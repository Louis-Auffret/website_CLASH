import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Zap, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import background from "../assets/players/avatar_background.webp";
import Sleaz from "../assets/players/Sleaz_Player.webp";

interface TeamsPageProps {
    onPlayerSelect?: (playerId: string) => void;
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

export function TeamsPage({ onPlayerSelect }: TeamsPageProps) {
    const navigate = useNavigate();
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedTeamFilter, setSelectedTeamFilter] = useState<string>("all");
    const [currentIndex, setCurrentIndex] = useState(0);
    const playerImages: { [key: string]: string } = {
        // ajoute tous les joueurs ici
        Sleaz: Sleaz,
    };

    // Fetch des équipes
    useEffect(() => {
        fetch("https://asso-clash.fr/backend/api.php")
            .then((res) => res.json())
            .then((data) => setTeams(data))
            .catch((err) => console.error("Erreur chargement API:", err));
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
    const filteredPlayers = useMemo(() => {
        return teams
            .flatMap((team) =>
                team.players.map((player) => ({
                    ...player,
                    team_id: team.id, // s’assurer que team_id est correct
                    team_name: team.name,
                }))
            )
            .filter((player) => selectedTeamFilter === "all" || player.team_id.toString() === selectedTeamFilter);
    }, [teams, selectedTeamFilter]);

    const nextTeam = () => setCurrentIndex((prev) => (prev + 1) % teams.length);
    const prevTeam = () => setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length);

    return (
        <div className="pt-20">
            <title>CLASH – Équipes & Joueurs</title>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        ÉQUIPES & JOUEURS
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Découvrez nos équipes de champions et nos joueurs vedettes qui représentent le meilleur de la
                        compétition de Laser Game en France.
                    </p>
                </div>
            </section>

            {/* Teams Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl relative">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos équipes</h2>

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
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {teams.map((team) => (
                                <div key={team.id} className="w-full flex-shrink-0 px-4">
                                    <Card className="bg-card border-primary/20 p-8 hover:border-primary/40 transition-all duration-300">
                                        <div className="grid lg:grid-cols-3 gap-8">
                                            {/* Team Info */}
                                            <div className="lg:col-span-1">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <div className="bg-primary/20 p-3 rounded-lg">
                                                        <Zap className="h-8 w-8 text-primary" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-primary">{team.name}</h3>
                                                </div>

                                                <div className="space-y-3 mb-6">
                                                    <div className="flex justify-between">
                                                        <p className="text-gray-400">Victoires:</p>
                                                        <p className="text-primary font-bold">
                                                            {team.players.reduce(
                                                                (acc, player) => acc + player.total_wins,
                                                                0
                                                            ) / 5}
                                                            {/* {Math.round(
                                                                team.players.reduce(
                                                                    (acc, player) => acc + player.total_wins,
                                                                    0
                                                                ) / 5
                                                            )} */}
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
                                                        try {
                                                            achievements = JSON.parse(team.achievements);
                                                        } catch {
                                                            achievements = [team.achievements];
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
                                                            className="bg-secondary/30 border-primary/10 p-4 hover:border-primary/30 transition-all duration-300 group">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="relative">
                                                                    <ImageWithFallback
                                                                        src={player.photo}
                                                                        alt={player.player_pseudo}
                                                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300"
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
                                                                        <div>
                                                                            <span className="text-gray-400">
                                                                                Score:{" "}
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_score}
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-gray-400">
                                                                                Données:{" "}
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_given}
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-gray-400">
                                                                                Reçues:{" "}
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_received}
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-gray-400">
                                                                                Tirs alliés:{" "}
                                                                            </span>
                                                                            <span className="text-primary font-bold">
                                                                                {player.total_TK}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid grid-cols-4 gap-4 text-xs">
                                                                        <div>
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
                                                                        <div>
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
                                                                        <div>
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
                                                                        <div>
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

            {/* Individual Players Section */}
            <section className="py-16 px-4 bg-secondary/50">
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
                                        onPlayerSelect(player.player_id.toString())
                                    }>
                                    <div className="flex items-start flex-col md:flex-row">
                                        <div
                                            className="flex-2 relative flex-shrink-0"
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
                                                    src={playerImages[player.player_pseudo]}
                                                    alt={player.player_pseudo}
                                                    className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-500 origin-bottom md:translate-y-2 md:group-hover:scale-102"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-8 p-6">
                                            <div>
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
                                                                // On essaie de parser comme un tableau JSON
                                                                if (typeof player.player_achievements === "string") {
                                                                    achievements = JSON.parse(
                                                                        player.player_achievements
                                                                    );
                                                                    // Si ce n'est pas un tableau après parse, on le transforme en tableau
                                                                    if (!Array.isArray(achievements))
                                                                        achievements = [achievements];
                                                                } else if (Array.isArray(player.player_achievements)) {
                                                                    achievements = player.player_achievements;
                                                                } else {
                                                                    achievements = [String(player.player_achievements)];
                                                                }
                                                            } catch (e) {
                                                                // Si JSON.parse échoue, on met juste la valeur dans un tableau
                                                                achievements = [player.player_achievements];
                                                            }

                                                            return achievements.map((ach, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                                                                    <Trophy className="h-4 w-4 text-primary mr-2" />
                                                                    <span className="text-sm text-gray-300">{ach}</span>
                                                                </div>
                                                            ));
                                                        })()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
