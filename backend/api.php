<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$host = "assoclxadmin.mysql.db";
$dbname = "assoclxadmin";
$user = "assoclxadmin";
$pass = "AssoCLASH2025";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer la saison demandée (optionnelle)
    $seasonId = $_GET["season_id"] ?? null;

    // 1. Récupérer les équipes
    if ($seasonId) {
        $teamsStmt = $pdo->prepare("
            SELECT DISTINCT t.id, t.name, t.achievements
            FROM team t
            INNER JOIN player_team_season pts ON pts.team_id = t.id
            WHERE pts.season_id = :season_id
        ");
        $teamsStmt->execute(["season_id" => $seasonId]);
    } else {
        $teamsStmt = $pdo->query("SELECT id, name, achievements FROM team");
    }

    $teams = $teamsStmt->fetchAll(PDO::FETCH_ASSOC);

    // 2. Pour chaque équipe, récupérer ses joueurs
    foreach ($teams as &$team) {
    if ($seasonId) {
        // Joueurs pour la saison sélectionnée
        $stmt = $pdo->prepare("
            SELECT 
                p.id AS player_id,
                p.pseudo AS player_pseudo,
                p.firstName,
                p.lastName,
                p.birthdate,
                p.registration,
                p.photo,
                p.achievements AS player_achievements,
                p.career_score,
                p.career_given,
                p.career_received,
                p.career_TK,
                p.career_competition,
                p.career_matches,
                p.career_wins,
                p.career_defeats,
                p.career_draws,
                pts.id AS pts_id,
                pts.total_score,
                pts.total_given,
                pts.total_received,
                pts.total_TK,
                pts.total_matches,
                pts.total_wins,
                pts.total_defeats,
                pts.total_draws
            FROM player_team_season pts
            JOIN player p ON p.id = pts.player_id
            WHERE pts.season_id = :season_id
            AND pts.team_id = :team_id
        ");
        $stmt->execute([
            "season_id" => $seasonId,
            "team_id"   => $team["id"]
        ]);
    } else {
        // Tous les joueurs, toutes saisons
        $stmt = $pdo->prepare("
            SELECT 
                p.id AS player_id,
                p.pseudo AS player_pseudo,
                p.firstName,
                p.lastName,
                p.birthdate,
                p.registration,
                p.photo,
                p.achievements AS player_achievements,
                p.career_score,
                p.career_given,
                p.career_received,
                p.career_TK,
                p.career_competition,
                p.career_matches,
                p.career_wins,
                p.career_defeats,
                p.career_draws,
                0 AS pts_id,
                0 AS total_score,
                0 AS total_given,
                0 AS total_received,
                0 AS total_TK,
                0 AS total_matches,
                0 AS total_wins,
                0 AS total_defeats,
                0 AS total_draws
            FROM player p
            WHERE p.id IN (
                SELECT player_id FROM player_team_season WHERE team_id = :team_id
            )
        ");
        $stmt->execute(["team_id" => $team["id"]]);
    }

    $players = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 🔥 Ajout des compétitions pour chaque joueur
    foreach ($players as &$player) {
        if (!empty($player["pts_id"])) {
            $compStmt = $pdo->prepare("
                SELECT 
                    c.id AS competition_id,
                    c.name AS competition_name,
                    SUM(mp.score) AS score,
                    SUM(mp.given) AS given,
                    SUM(mp.received) AS received,
                    SUM(mp.TK) AS TK,
                    SUM(CASE WHEN m.result = 2 AND m.team_id = t.id THEN 1 ELSE 0 END) AS wins,
                    SUM(CASE WHEN m.result = 0 AND m.team_id = t.id THEN 1 ELSE 0 END) AS defeats,
                    SUM(CASE WHEN m.result = 1 AND m.team_id = t.id THEN 1 ELSE 0 END) AS draws
                FROM match_player mp
                JOIN matches m ON m.id = mp.match_id
                JOIN competition c ON c.id = m.competition_id
                JOIN player_team_season pts ON pts.id = mp.player_team_season_id
                JOIN team t ON t.id = pts.team_id
                WHERE mp.player_team_season_id = :pts_id
                GROUP BY c.id, c.name
            ");
            $compStmt->execute(["pts_id" => $player["pts_id"]]);
            $player["competitions"] = $compStmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $player["competitions"] = [];
        }
    }

    $team["players"] = $players;
}

    // 3. Retourner les équipes avec leurs joueurs imbriqués
    echo json_encode($teams);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
