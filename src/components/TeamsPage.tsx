import { Helmet } from "react-helmet";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Imports des images :
import background from "../assets/avatar_background.webp";
import default_player from "../assets/players/Default.png";
import default_team from "../assets/teams_logo/CLASH.webp";

interface TeamsPageProps {
    onPlayerSelect?: (playerId: string, seasonId: string | null) => void;
}

interface StatLineProps {
    label: string;
    value: number | string;
    invert?: boolean; // Nouveau prop
}

type Player = {
    player_id: number;
    player_pseudo: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    photo: string;
    player_achievements: string;
    career_score: number;
    career_given: number;
    career_received: number;
    career_TK: number;
    career_competition: number;
    career_matches: number;
    career_wins: number;
    career_defeats: number;
    career_draws: number;
    team_id: number;
    team_name: string;
    team_achievements: string;
    total_score: number;
    total_given: number;
    total_received: number;
    total_TK: number;
    total_matches: number;
    total_wins: number;
    total_defeats: number;
    total_draws: number;
};

type Team = {
    id: number;
    name: string;
    achievements: string;
    players: Player[];
};

type Season = {
    id: number;
    name: string;
    start_date: string;
    end_date?: string;
};

export function TeamsPage({ onPlayerSelect }: TeamsPageProps) {
    const navigate = useNavigate();
    const [teams, setTeams] = useState<Team[]>([]);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // State pour stocker uniquement les IDs des joueurs sélectionnés
    const [comparedPlayerIds, setComparedPlayerIds] = useState<number[]>([]);

    // Toggle comparaison
    const toggleCompare = (player: Player) => {
        setComparedPlayerIds((prev) => {
            if (prev.includes(player.player_id)) {
                return prev.filter((id) => id !== player.player_id); // retirer
            }
            if (prev.length === 2) return [prev[1], player.player_id]; // remplacer le plus ancien
            return [...prev, player.player_id]; // ajouter
        });
    };

    // Comparer les joueurs pour la saison actuelle
    const comparedPlayers = comparedPlayerIds
        .map((id) => teams.flatMap((t) => t.players).find((p) => p.player_id === id))
        .filter(Boolean) as Player[];

    // const modules = import.meta.glob("../assets/*_player.webp", { eager: true }); // Importe toutes les images du dossier players
    const playerModules = import.meta.glob<{ default: string }>("../assets/players/*.png", { eager: true });
    const teamModules = import.meta.glob<{ default: string }>("../assets/teams_logo/*.webp", { eager: true });

    // On reconstruit un objet { Sleaz: <url> }
    const playerImages: { [key: string]: string } = {};

    for (const path in playerModules) {
        const fileName = path.split("/").pop()?.replace(".png", "");
        if (fileName) {
            playerImages[fileName] = playerModules[path].default;
        }
    }

    const teamImages: { [key: string]: string } = {};

    for (const path in teamModules) {
        const fileName = path.split("/").pop()?.replace(".webp", "");
        if (fileName) {
            teamImages[fileName] = teamModules[path].default;
        }
    }

    const startX = useRef(0);
    const endX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const delta = startX.current - endX.current;

        if (Math.abs(delta) < 50) return; // seuil minimal pour éviter les faux déclenchements

        if (delta > 0) {
            // Slide vers la gauche → next
            setCurrentIndex((prev) => Math.min(prev + 1, teams.length - 1));
        } else {
            // Slide vers la droite → previous
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    // Fetch des équipes en fonction de la saison sélectionnée
    useEffect(() => {
        if (!selectedSeason) return;

        fetch(`https://asso-clash.fr/backend/api.php?season_id=${selectedSeason}`)
            .then((res) => res.json())
            .then((data) => setTeams(data))
            .catch((err) => console.error("Erreur chargement API:", err));
    }, [selectedSeason]);

    // Fetch des saisons
    useEffect(() => {
        fetch("https://asso-clash.fr/backend/season.php")
            .then((res) => res.json())
            .then((data) => {
                setSeasons(data);

                // 1) Vérifie si une saison est déjà sauvée
                const savedSeason = localStorage.getItem("selectedSeason");
                if (savedSeason) {
                    setSelectedSeason(savedSeason);
                    return;
                }

                // 2) Sinon, choisir la plus récente comme avant
                if (data.length > 0) {
                    const sorted = [...data].sort(
                        (a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
                    );
                    setSelectedSeason(sorted[0].id.toString());
                }
            })
            .catch((err) => console.error("Erreur chargement API saisons:", err));
    }, []);

    // Gestion des flèches du clavier
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextTeam();
            else if (e.key === "ArrowLeft") prevTeam();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]); // dépendance si nextTeam / prevTeam utilisent l’état

    // Créer une liste de tous les joueurs + filtrage par équipe
    // const filteredPlayers = useMemo(() => {
    //     return teams
    //         .flatMap((team) =>
    //             team.players.map((player) => ({
    //                 ...player,
    //                 team_id: team.id,
    //                 team_name: team.name,
    //             }))
    //         )
    //         .filter((player) => selectedTeamFilter === "all" || player.team_id.toString() === selectedTeamFilter);
    // }, [teams, selectedTeamFilter]);

    const nextTeam = () => setCurrentIndex((prev) => (prev + 1) % teams.length);
    const prevTeam = () => setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length);

    function StatLine({ label, value, invert }: StatLineProps) {
        return (
            <div className={`flex justify-between ${invert ? "flex-row-reverse text-right" : ""}`}>
                <span className={`font-bold ${invert ? "text-primary" : "text-red-500"} `}>{value}</span>
                <span className="text-gray-400">{label}</span>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <Helmet>
                <title>Équipes & Joueurs – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Découvrez les équipes et joueurs d’Asso-Clash, spécialistes du laser game evolution au Havre. Compétitions et tournois à suivre !"
                />
                <meta property="og:title" content="Équipes & Joueurs – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Rencontrez les joueurs et équipes d’Asso-Clash, champions de laser game evolution au Havre."
                />
                <meta property="og:url" content="https://asso-clash.fr/teams" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        ÉQUIPES & JOUEURS
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Découvrez les équipes et les joueurs du CLASH, spécialistes du laser game. Suivez leurs
                        performances en compétition, apprenez de leurs stratégies et rejoignez la communauté de joueurs
                        passionnés pour vivre le laser game autour de vous.
                    </p>
                </div>
            </section>

            {/* Teams Section */}
            <section className="pt-16 px-4">
                <div className="container mx-auto max-w-6xl relative">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos équipes</h2>

                    {/* Dropdown Saison */}
                    <div className="flex items-center justify-center pb-6 space-x-2 overflow-x-auto py-2 scrollbar-thin">
                        {seasons.map((season) => (
                            <div
                                key={season.id}
                                onClick={() => {
                                    setSelectedSeason(season.id.toString());
                                    localStorage.setItem("selectedSeason", season.id.toString());
                                }}
                                className={`
                cursor-pointer px-4 py-2 rounded-lg text-sm border
                ${
                    selectedSeason === season.id.toString()
                        ? "bg-primary text-white border-primary"
                        : "bg-card text-gray-300 border-primary/20 hover:bg-primary/30"
                }
            `}>
                                {season.name}
                            </div>
                        ))}
                    </div>

                    {/* Flèches */}
                    {teams.length > 1 && (
                        <>
                            <button
                                onClick={prevTeam}
                                className="absolute left-0 -translate-x-2 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 p-3 rounded-full">
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextTeam}
                                className="absolute right-0 translate-x-2 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 p-3 rounded-full">
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </>
                    )}

                    {/* Carousel */}
                    <div
                        className="overflow-hidden touch-pan-y"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {teams.map((team) => (
                                <div key={team.id} className="w-full flex-shrink-0 px-4">
                                    <Card className="bg-card border-primary/20 p-8 hover:border-primary/40 transition-all duration-300">
                                        <div className="grid lg:grid-cols-3 gap-8">
                                            {/* Team Info */}
                                            <div className="lg:col-span-1">
                                                <div className="flex flex-col items-center space-x-3 mb-4">
                                                    {/* Cadre du logo de l'équipe */}
                                                    <div className="relative w-full aspect-square flex items-center justify-center border-2 border-primary/30 rounded-xl p-5 mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                        <ImageWithFallback
                                                            src={teamImages[team.name] || default_team}
                                                            alt={"Logo " + team.name}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-primary">{team.name}</h3>
                                                </div>

                                                <div className="space-y-3 mb-6">
                                                    <div className="flex justify-between">
                                                        <p className="text-gray-400">Victoires:</p>
                                                        <p className="text-primary font-bold">
                                                            {/* {team.players.reduce(
                                                                (acc, player) => acc + player.total_wins,
                                                                0
                                                            ) / 5} */}
                                                            {Math.round(
                                                                team.players.reduce(
                                                                    (acc, player) => acc + player.total_wins,
                                                                    0
                                                                ) / 5
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-gray-400">Défaites:</p>
                                                        <p className="text-red-500">
                                                            {" "}
                                                            {team.players.reduce(
                                                                (acc, player) => acc + player.total_defeats,
                                                                0
                                                            ) / 5}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-gray-400">Égalités:</p>
                                                        <p className="text-white">
                                                            {" "}
                                                            {team.players.reduce(
                                                                (acc, player) => acc + player.total_draws,
                                                                0
                                                            ) / 5}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-white mb-3">
                                                        Succès de l&apos;équipe
                                                    </h4>
                                                    {(() => {
                                                        let achievements: string[] = [];

                                                        if (team.achievements) {
                                                            try {
                                                                const parsed = JSON.parse(team.achievements);
                                                                // S'assurer que parsed est bien un tableau
                                                                achievements = Array.isArray(parsed)
                                                                    ? parsed
                                                                    : [parsed];
                                                            } catch {
                                                                achievements = [team.achievements];
                                                            }
                                                        }

                                                        if (achievements.length === 0) {
                                                            return (
                                                                <span className="text-sm text-gray-500">
                                                                    Aucun succès
                                                                </span>
                                                            );
                                                        }

                                                        return achievements.map((ach, i) => (
                                                            <div key={i} className="flex items-center space-x-2">
                                                                <Trophy className="h-4 w-4 text-primary" />
                                                                <span className="text-sm text-gray-300">{ach}</span>
                                                            </div>
                                                        ));
                                                    })()}
                                                </div>
                                            </div>

                                            {/* Players */}
                                            <div className="lg:col-span-2">
                                                <h4 className="text-xl font-bold mb-6 text-white">Roster</h4>
                                                <div className="grid gap-3">
                                                    {team.players.map((player) => (
                                                        <Card
                                                            key={player.player_id}
                                                            className="relative bg-secondary/30 border-primary/10 p-4 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/player/${player.player_id}?season_id=${selectedSeason}`
                                                                )
                                                            }>
                                                            <div className="flex gap-2 items-center text-primary absolute top-3 right-3 z-20">
                                                                <p className="hidden text-gray-500 sm:block">
                                                                    COMPARER:
                                                                </p>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={comparedPlayerIds.includes(
                                                                        player.player_id
                                                                    )}
                                                                    onChange={() => toggleCompare(player)}
                                                                    className="w-5 h-5 accent-primary cursor-pointer border-2 border-primary"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                />
                                                            </div>

                                                            <div className="flex items-center space-x-4">
                                                                <div className="relative w-14 h-14 border-2 border-primary/30 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                                    <ImageWithFallback
                                                                        src={
                                                                            playerImages[player.player_pseudo] ||
                                                                            default_player
                                                                        }
                                                                        alt={"Portrait de " + player.player_pseudo}
                                                                        className="object-cover object-top scale-140 translate-y-5"
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <h5 className="font-bold text-white">
                                                                            {player.player_pseudo}{" "}
                                                                            <span className="font-normal">
                                                                                - {player.firstName} {player.lastName}
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                    <div className="grid grid-cols-4 gap-4 text-xs">
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">
                                                                                Score:
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_score}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">
                                                                                Données:
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_given}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">
                                                                                Reçues:
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_received}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">
                                                                                Tirs&nbsp;alliés:
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_TK}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid grid-cols-4 gap-4 text-xs">
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">Moy: </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_matches
                                                                                    ? (
                                                                                          Number(player.total_score) /
                                                                                          Number(player.total_matches)
                                                                                      ).toFixed(1)
                                                                                    : 0}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">Moy: </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_matches
                                                                                    ? (
                                                                                          Number(player.total_given) /
                                                                                          Number(player.total_matches)
                                                                                      ).toFixed(1)
                                                                                    : 0}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">Moy: </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_matches
                                                                                    ? (
                                                                                          Number(
                                                                                              player.total_received
                                                                                          ) /
                                                                                          Number(player.total_matches)
                                                                                      ).toFixed(1)
                                                                                    : 0}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex gap-1 flex-col sm:flex-row">
                                                                            <span className="text-gray-400">
                                                                                Matchs:{" "}
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_matches}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARATEUR DE JOUEURS */}
            {comparedPlayers.length === 2 && (
                <section className="py-16 px-4 bg-secondary/60 mt-10">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-4xl font-bold text-primary text-center mb-10">Comparatif de joueurs</h2>

                        {/* Dropdown Saison */}
                        <div className="flex items-center justify-center pb-6 space-x-2 overflow-x-auto py-2 scrollbar-thin">
                            {seasons.map((season) => (
                                <div
                                    key={season.id}
                                    onClick={() => {
                                        setSelectedSeason(season.id.toString());
                                        localStorage.setItem("selectedSeason", season.id.toString());
                                    }}
                                    className={`
                cursor-pointer px-4 py-2 rounded-lg text-sm border
                ${
                    selectedSeason === season.id.toString()
                        ? "bg-primary text-white border-primary"
                        : "bg-card text-gray-300 border-primary/20 hover:bg-primary/30"
                }`}>
                                    {season.name}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 md:gap-4">
                            {/* Joueur 1 */}
                            <div className="bg-card border border-primary/30 rounded-xl shadow-xl flex-1">
                                <div className="relative w-full aspect-[1/1] rounded-t-xl overflow-hidden border-b-1 border-primary/40">
                                    <ImageWithFallback
                                        src={background}
                                        alt="Arrière plan joueur"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <div className="absolute bottom-1 md:bottom-2 right-[-5px] lg:right-[-16px] h-full w-full flex items-end justify-start rotate-270">
                                        <h3 className="bebas-neue text-primary leading-none text-[clamp(4rem,8vw,11rem)] whitespace-nowrap">
                                            {comparedPlayers[0].player_pseudo.toUpperCase()}
                                        </h3>
                                    </div>

                                    <ImageWithFallback
                                        src={playerImages[comparedPlayers[0].player_pseudo] || default_player}
                                        alt={"Portrait " + comparedPlayers[0].player_pseudo}
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 origin-bottom md:translate-y-2 md:group-hover:scale-102 drop-shadow-[10px_10px_12px_rgba(0,0,0,0.85)]"
                                    />

                                    <div className="absolute bottom-1 md:bottom-2 right-[-5px] lg:right-[-16px] h-full w-full flex items-end justify-start rotate-270">
                                        <h3 className="bebas-neue text-outline-green leading-none text-[clamp(4rem,8vw,11rem)] whitespace-nowrap">
                                            {comparedPlayers[0].player_pseudo.toUpperCase()}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {/* Statistiques saison */}
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-white border-b border-primary/30 pb-2 mb-3">
                                            Statistiques saison
                                        </h4>

                                        <div className="space-y-2 text-sm">
                                            {Object.entries({
                                                "Score total": comparedPlayers[0].total_score,
                                                Données: comparedPlayers[0].total_given,
                                                Reçues: comparedPlayers[0].total_received,
                                                "Tirs alliés": comparedPlayers[0].total_TK,
                                                Matchs: comparedPlayers[0].total_matches,
                                                Victoires: comparedPlayers[0].total_wins,
                                                Défaites: comparedPlayers[0].total_defeats,
                                                Égalités: comparedPlayers[0].total_draws,
                                                Winrate: comparedPlayers[0].total_matches
                                                    ? (
                                                          (comparedPlayers[0].total_wins /
                                                              comparedPlayers[0].total_matches) *
                                                          100
                                                      ).toFixed(2) + "%"
                                                    : "0%",
                                                "Moy score": comparedPlayers[0].total_matches
                                                    ? (
                                                          comparedPlayers[0].total_score /
                                                          comparedPlayers[0].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy données": comparedPlayers[0].total_matches
                                                    ? (
                                                          comparedPlayers[0].total_given /
                                                          comparedPlayers[0].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy reçues": comparedPlayers[0].total_matches
                                                    ? (
                                                          comparedPlayers[0].total_received /
                                                          comparedPlayers[0].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                            }).map(([label, value]) => (
                                                <StatLine key={label} label={label} value={value} invert={true} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Statistiques globales */}
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-white border-b border-primary/30 pb-2 mb-3">
                                            Carrière
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            {Object.entries({
                                                "Score total": comparedPlayers[0].career_score,
                                                Données: comparedPlayers[0].career_given,
                                                Reçues: comparedPlayers[0].career_received,
                                                "Tirs alliés": comparedPlayers[0].career_TK,
                                                Matchs: comparedPlayers[0].career_matches,
                                                Victoires: comparedPlayers[0].career_wins,
                                                Défaites: comparedPlayers[0].career_defeats,
                                                Égalités: comparedPlayers[0].career_draws,
                                                Winrate: comparedPlayers[0].career_matches
                                                    ? (
                                                          (comparedPlayers[0].career_wins /
                                                              comparedPlayers[0].career_matches) *
                                                          100
                                                      ).toFixed(2) + "%"
                                                    : "0%",
                                                Compétitions: comparedPlayers[0].career_competition,
                                                "Moy score": comparedPlayers[0].career_matches
                                                    ? (
                                                          comparedPlayers[0].career_score /
                                                          comparedPlayers[0].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy données": comparedPlayers[0].career_matches
                                                    ? (
                                                          comparedPlayers[0].career_given /
                                                          comparedPlayers[0].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy reçues": comparedPlayers[0].career_matches
                                                    ? (
                                                          comparedPlayers[0].career_received /
                                                          comparedPlayers[0].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                            }).map(([label, value]) => (
                                                <StatLine key={label} label={label} value={value} invert={true} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Différences */}
                            <div className="pb-12 flex flex-col justify-end max-w-24 mx-auto">
                                <div className="space-y-2 text-sm">
                                    {[
                                        "total_score",
                                        "total_given",
                                        "total_received",
                                        "total_TK",
                                        "total_matches",
                                        "total_wins",
                                        "total_defeats",
                                        "total_draws",
                                        "avg_winrate",
                                        "avg_score",
                                        "avg_given",
                                        "avg_received",
                                        "career_score",
                                        "career_given",
                                        "career_received",
                                        "career_TK",
                                        "career_matches",
                                        "career_wins",
                                        "career_defeats",
                                        "career_draws",
                                        "avg_career_winrate",
                                        "career_competition",
                                        "avg_career_score",
                                        "avg_career_given",
                                        "avg_career_received",
                                    ].map((key, index) => {
                                        // Fonction pour récupérer la valeur d'un joueur
                                        const getValue = (player: Player, key: string) => {
                                            switch (key) {
                                                case "avg_score":
                                                    return player.total_matches
                                                        ? player.total_score / player.total_matches
                                                        : 0;
                                                case "avg_given":
                                                    return player.total_matches
                                                        ? player.total_given / player.total_matches
                                                        : 0;
                                                case "avg_received":
                                                    return player.total_matches
                                                        ? player.total_received / player.total_matches
                                                        : 0;
                                                case "avg_winrate":
                                                    return player.total_matches
                                                        ? player.total_wins / player.total_matches
                                                        : 0;
                                                case "avg_career_score":
                                                    return player.career_matches
                                                        ? player.career_score / player.career_matches
                                                        : 0;
                                                case "avg_career_given":
                                                    return player.career_matches
                                                        ? player.career_given / player.career_matches
                                                        : 0;
                                                case "avg_career_received":
                                                    return player.career_matches
                                                        ? player.career_received / player.career_matches
                                                        : 0;
                                                case "avg_career_winrate":
                                                    return player.career_matches
                                                        ? player.career_wins / player.career_matches
                                                        : 0;
                                                default:
                                                    // cast sécurisé en number
                                                    return player[key as keyof Player] as unknown as number;
                                            }
                                        };

                                        const value0 = getValue(comparedPlayers[0], key);
                                        const value1 = getValue(comparedPlayers[1], key);
                                        const isWinrate = key.includes("winrate");

                                        // --- Normalisation pour les winrates (robuste contre fraction vs pourcentage) ---
                                        const normalizeWinrate = (v: number) => {
                                            if (v === null || v === undefined || Number.isNaN(v)) return 0;
                                            // si c'est une fraction (<= 1), transforme en %
                                            if (Math.abs(v) <= 1) return v * 100;
                                            // sinon on suppose que c'est déjà en %
                                            return v;
                                        };

                                        const norm0 = isWinrate ? normalizeWinrate(value0) : value0;
                                        const norm1 = isWinrate ? normalizeWinrate(value1) : value1;

                                        // debug console (décommenter si nécessaire)
                                        // console.log(key, { value0, value1, norm0, norm1, isWinrate });

                                        const diff = (norm0 ?? 0) - (norm1 ?? 0);

                                        // Les stats où moins c'est mieux
                                        const invertedStats = [
                                            "total_received",
                                            "career_received",
                                            "total_defeats",
                                            "total_TK",
                                            "career_defeats",
                                            "career_TK",
                                            "avg_received",
                                            "avg_career_received",
                                        ];
                                        const isInverted = invertedStats.includes(key);
                                        const isZero = diff === 0;
                                        const isPositive = isInverted ? diff < 0 : diff > 0; // inversé si nécessaire
                                        const colorClass = isZero
                                            ? "text-white"
                                            : isPositive
                                            ? "text-primary"
                                            : "text-red-500";

                                        return (
                                            <div
                                                key={key}
                                                className={`text-center font-bold flex justify-center items-center space-x-1 ${colorClass} ${
                                                    index === 0 ? "mt-[63px]" : index === 12 ? "pt-16" : ""
                                                }`}>
                                                <span>
                                                    {isWinrate
                                                        ? Math.abs(diff).toFixed(2) + "%"
                                                        : key.startsWith("avg")
                                                        ? Math.abs(diff).toFixed(2)
                                                        : Number.isInteger(diff)
                                                        ? Math.abs(diff)
                                                        : Math.abs(diff).toFixed(0)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Joueur 2 */}
                            <div className="bg-card border border-primary/30 rounded-xl shadow-xl flex-1">
                                <div className="relative w-full aspect-[1/1] rounded-t-xl overflow-hidden border-b-1 border-primary/40">
                                    <ImageWithFallback
                                        src={background}
                                        alt="Arrière plan joueur"
                                        className="absolute inset-0 w-full h-full object-cover rotate-180"
                                    />

                                    <div className="absolute bottom-1 md:bottom-2 left-0 h-full w-full flex justify-start rotate-270">
                                        <h3 className="bebas-neue text-primary leading-none text-[clamp(4rem,8vw,11rem)] whitespace-nowrap">
                                            {comparedPlayers[1].player_pseudo.toUpperCase()}
                                        </h3>
                                    </div>

                                    <ImageWithFallback
                                        src={playerImages[comparedPlayers[1].player_pseudo] || default_player}
                                        alt={"Portrait " + comparedPlayers[1].player_pseudo}
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 origin-bottom sm:translate-y-2 md:group-hover:scale-102 drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.85)]"
                                    />

                                    <div className="absolute bottom-1 md:bottom-2 left-0 h-full w-full flex justify-start rotate-270">
                                        <h3 className="bebas-neue text-outline-green leading-none text-[clamp(4rem,8vw,11rem)] whitespace-nowrap">
                                            {comparedPlayers[1].player_pseudo.toUpperCase()}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {/* Statistiques saison */}
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-white border-b border-primary/30 pb-2 mb-3">
                                            Statistiques saison
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            {Object.entries({
                                                "Score total": comparedPlayers[1].total_score,
                                                Données: comparedPlayers[1].total_given,
                                                Reçues: comparedPlayers[1].total_received,
                                                "Tirs alliés": comparedPlayers[1].total_TK,
                                                Matchs: comparedPlayers[1].total_matches,
                                                Victoires: comparedPlayers[1].total_wins,
                                                Défaites: comparedPlayers[1].total_defeats,
                                                Égalités: comparedPlayers[1].total_draws,
                                                Winrate: comparedPlayers[1].total_matches
                                                    ? (
                                                          (comparedPlayers[1].total_wins /
                                                              comparedPlayers[1].total_matches) *
                                                          100
                                                      ).toFixed(2) + "%"
                                                    : "0%",
                                                "Moy score": comparedPlayers[1].total_matches
                                                    ? (
                                                          comparedPlayers[1].total_score /
                                                          comparedPlayers[1].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy données": comparedPlayers[1].total_matches
                                                    ? (
                                                          comparedPlayers[1].total_given /
                                                          comparedPlayers[1].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy reçues": comparedPlayers[1].total_matches
                                                    ? (
                                                          comparedPlayers[1].total_received /
                                                          comparedPlayers[1].total_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                            }).map(([label, value]) => (
                                                <StatLine key={label} label={label} value={value} invert={false} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Statistiques globales */}
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-white border-b border-primary/30 pb-2 mb-3">
                                            Carrière
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            {Object.entries({
                                                "Score total": comparedPlayers[1].career_score,
                                                Données: comparedPlayers[1].career_given,
                                                Reçues: comparedPlayers[1].career_received,
                                                "Tirs alliés": comparedPlayers[1].career_TK,
                                                Matchs: comparedPlayers[1].career_matches,
                                                Victoires: comparedPlayers[1].career_wins,
                                                Défaites: comparedPlayers[1].career_defeats,
                                                Égalités: comparedPlayers[1].career_draws,
                                                Winrate: comparedPlayers[1].career_matches
                                                    ? (
                                                          (comparedPlayers[1].career_wins /
                                                              comparedPlayers[1].career_matches) *
                                                          100
                                                      ).toFixed(2) + "%"
                                                    : "0%",
                                                Compétitions: comparedPlayers[1].career_competition,
                                                "Moy score": comparedPlayers[1].career_matches
                                                    ? (
                                                          comparedPlayers[1].career_score /
                                                          comparedPlayers[1].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy données": comparedPlayers[1].career_matches
                                                    ? (
                                                          comparedPlayers[1].career_given /
                                                          comparedPlayers[1].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                                "Moy reçues": comparedPlayers[1].career_matches
                                                    ? (
                                                          comparedPlayers[1].career_received /
                                                          comparedPlayers[1].career_matches
                                                      ).toFixed(2)
                                                    : "0%",
                                            }).map(([label, value]) => (
                                                <StatLine key={label} label={label} value={value} invert={false} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Individual Players Section */}
            {/* <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-between mb-12 flex-col md:flex-row">
                        <h2 className="text-4xl font-bold text-primary mb-6 md:mb-0">Joueurs</h2>
                        <div className="flex items-center space-x-4">
                            <Filter className="h-5 w-5 text-primary" />
                            <div className="flex space-x-2">
                                <Button
                                    variant={selectedTeamFilter === "all" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedTeamFilter("all")}
                                    className={
                                        selectedTeamFilter === "all"
                                            ? "bg-primary text-black"
                                            : "border-primary text-primary hover:bg-primary/10"
                                    }>
                                    Toutes
                                </Button>
                                {teams.map((team) => {
                                    const isSelected = selectedTeamFilter === team.id.toString();
                                    return (
                                        <Button
                                            key={team.id}
                                            variant={isSelected ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedTeamFilter(team.id.toString())}
                                            className={
                                                isSelected
                                                    ? "bg-primary text-black"
                                                    : "border-primary text-primary hover:bg-primary/10"
                                            }>
                                            {team.name}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {filteredPlayers
                            .slice()
                            .sort((a, b) => b.career_score - a.career_score)
                            .map((player, index) => (
                                <Card
                                    key={index}
                                    className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden cursor-pointer"
                                    onClick={() =>
                                        onPlayerSelect &&
                                        player.player_id &&
                                        navigate(`/player/${player.player_id}?season_id=${selectedSeason}`)
                                    }>
                                    <div className="flex items-start flex-col md:flex-row">
                                        <div
                                            className="relative flex-2 relative flex-shrink-0"
                                            style={{ height: "-webkit-fill-available" }}>
                                            <div
                                                className="w-32 h-32 overflow-hidden max-h-70 md:max-h-none"
                                                style={{
                                                    height: "-webkit-fill-available",
                                                    width: "-webkit-fill-available",
                                                }}>
                                                <ImageWithFallback
                                                    src={background}
                                                    alt="Arrière plan joueur"
                                                    className="w-full h-full object-cover"
                                                />
                                                <ImageWithFallback
                                                    src={playerImages[player.player_pseudo] || default_player}
                                                    alt={"Portrait de " + player.player_pseudo}
                                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 origin-bottom md:translate-y-2 md:group-hover:scale-102"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-8 p-6 w-full">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-primary mb-1">
                                                        {player.player_pseudo}
                                                    </h3>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-white font-medium">
                                                            {player.firstName + " " + player.lastName}
                                                        </span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-white">{player.team_name}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="flex items-center text-sm text-gray-400 mb-1">
                                                        Voir le profil
                                                        <div className="visible text-primary group-hover:scale-110 transition-transform duration-300">
                                                            <svg
                                                                className="h-5 w-5 ml-1"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_score.toLocaleString()}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Score</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_given.toLocaleString()}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Données</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_received.toLocaleString()}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Reçues</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_TK}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Tirs alliés</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_matches
                                                            ? (
                                                                  Number(player.career_score) /
                                                                  Number(player.career_matches)
                                                              ).toFixed(2)
                                                            : 0}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Moyenne Score</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_matches
                                                            ? (
                                                                  Number(player.career_given) /
                                                                  Number(player.career_matches)
                                                              ).toFixed(2)
                                                            : 0}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Moyenne Données</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_matches
                                                            ? (
                                                                  Number(player.career_received) /
                                                                  Number(player.career_matches)
                                                              ).toFixed(2)
                                                            : 0}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Moyenne Reçues</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-primary">
                                                        {player.career_matches}
                                                    </p>
                                                    <p className="text-sm text-gray-400">Total matchs</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Succès</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {(() => {
                                                        let achievements: string[] = [];

                                                        try {
                                                            if (typeof player.player_achievements === "string") {
                                                                const parsed: unknown = JSON.parse(
                                                                    player.player_achievements
                                                                );

                                                                if (Array.isArray(parsed)) {
                                                                    achievements = (
                                                                        parsed as (string | string[])[]
                                                                    ).map((item) =>
                                                                        Array.isArray(item)
                                                                            ? String(item[0])
                                                                            : String(item)
                                                                    );
                                                                } else {
                                                                    achievements = [String(parsed)];
                                                                }
                                                            } else if (Array.isArray(player.player_achievements)) {
                                                                achievements = (
                                                                    player.player_achievements as (string | string[])[]
                                                                ).map((item) =>
                                                                    Array.isArray(item) ? String(item[0]) : String(item)
                                                                );
                                                            } else {
                                                                achievements = [String(player.player_achievements)];
                                                            }
                                                        } catch (e) {
                                                            achievements = [String(player.player_achievements)];
                                                        }

                                                        const maxBadges = 7;
                                                        const visibleBadges = achievements.slice(0, maxBadges);
                                                        const hiddenCount = achievements.length - visibleBadges.length;

                                                        return (
                                                            <>
                                                                {visibleBadges.map((ach, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                                                                        <Trophy className="h-4 w-4 text-primary mr-2" />
                                                                        <span className="text-sm text-gray-300">
                                                                            {ach}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                                {hiddenCount > 0 && (
                                                                    <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                                                                        <span className="text-sm text-gray-300">
                                                                            … +{hiddenCount}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        );
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </div>
                    <div className="container mx-auto max-w-6xl flex flex-col mt-8">
                        <Button
                            size="lg"
                            onClick={() => navigate("/club")}
                            className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                            Découvrez notre club
                        </Button>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
