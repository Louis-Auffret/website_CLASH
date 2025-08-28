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

    // ⚡ Pour l’instant, on force la saison à 4
    $seasonId = 4;

    // 1. Récupérer toutes les équipes
    $teamsStmt = $pdo->query("SELECT id, name, achievements FROM team");
    $teams = $teamsStmt->fetchAll(PDO::FETCH_ASSOC);

    // 2. Pour chaque équipe, récupérer ses joueurs liés à la saison
    foreach ($teams as &$team) {
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
        $team["players"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // 3. Retourner les équipes avec leurs joueurs imbriqués
    echo json_encode($teams);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
