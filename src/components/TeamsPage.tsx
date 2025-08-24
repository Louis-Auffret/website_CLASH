import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Target, Zap, Shield, Users, Star, Filter } from "lucide-react";
import { useState } from "react";

import sleaz from "../assets/players/Sleaz1.jpg";

interface TeamsPageProps {
    onPlayerSelect?: (playerId: string) => void;
}

export function TeamsPage({ onPlayerSelect }: TeamsPageProps) {
    const [selectedTeamFilter, setSelectedTeamFilter] = useState<string>("all");

    const teams = [
        {
            id: 1,
            name: "Team'Ajin",
            division: "Ligue 1 IDF",
            wins: "28",
            loose: "12",
            seasons: "2021-22 / 2024-25",
            color: "primary",
            achievements: ["Champions de France CDF 2025", "Vice-champions de France CDF 2022"],
            players: [
                {
                    id: "Sleaz",
                    name: "Louis Auffret",
                    role: "Capitaine + Raptor",
                    photo: sleaz,
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [
                        "Chamion de France 2025",
                        "MVP CDF 2024",
                        "MVP CDF 2025",
                        "Meilleur Attaquant CDF 2024",
                        "Meilleur Attaquant CDF 2025",
                        "MVP Ligue-sur-Seine 2024",
                        "MVP Ligue 1 IDF 2025",
                        "Meilleur Attaquant Ligue 1 IDF 2025",
                        "MVP Ligue 1 IDF 2025",
                        "Meilleur Attaquant Ligue-sur-Seine 2024",
                        "MVP Ligue-sur-Seine 2024",
                        "Meilleur espoir 2017",
                    ],
                },
                {
                    id: "Fastyou",
                    name: "Tom Herteleer",
                    role: "Raptor",
                    photo: sleaz,
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "Ysbar",
                    name: "Mathys Lemiere",
                    role: "Middle",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "Niumesis",
                    name: "Quentin Kubézik",
                    role: "Sniper",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "Oso",
                    name: "Joey Morel",
                    role: "Middle",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "Neoxip",
                    name: "Romain Chatillon",
                    role: "Middle",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
            ],
        },
        {
            id: 2,
            name: "Ping'Win",
            division: "Ligue 1 IDF",
            wins: "4",
            loose: "36",
            seasons: "2022-23 / 2023-34 / 2024-25",
            color: "secondary",
            achievements: ["4e place Championnat de France 2023", "4e place Championnat de France 2024"],
            players: [
                {
                    id: "Katchu",
                    name: "Killian Hennache",
                    role: "Capitaine",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: ["State Champion", "Best Strategist", "Stealth Master"],
                },
                {
                    id: "Madox",
                    name: "Aurélien Boce",
                    role: "Infiltrator",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "Pegasus",
                    name: "Noah Bourdel",
                    role: "Sniper",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: ["Perfect Shot Award", "National Sniper Champion"],
                },
                {
                    id: "JPP",
                    name: "Benjamin Cateville",
                    role: "Medic",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: ["Life Saver Award", "Best Medic"],
                },
                {
                    id: "Lazarre",
                    name: "Tyler Brown",
                    role: "Heavy",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: ["Tank Award", "Defensive MVP"],
                },
            ],
        },
        {
            id: 3,
            name: "Platyp'Us",
            division: "Ligue 2 IDF",
            wins: "23",
            loose: "16",
            seasons: "2024-25",
            color: "accent",
            achievements: ["3e Ligue 2 IDF"],
            players: [
                {
                    id: "lisa-zhang",
                    name: "Lisa Zhang",
                    role: "Capitaine",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "james-wilson",
                    name: "James Wilson",
                    role: "Tactician",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "ava-thompson",
                    name: "Ava Thompson",
                    role: "Flanker",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "noah-davis",
                    name: "Noah Davis",
                    role: "Anchor",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
                {
                    id: "chloe-lee",
                    name: "Chloe Lee",
                    role: "Support",
                    photo: "",
                    performance: {
                        matchesPlayed: 38,
                        pointsTaken: 2847,
                        pointsGiven: 1018,
                        score: 665,
                        moyTaken: 41.8,
                        moyGiven: 24.2,
                        moyScore: 17.6,
                        classATQ: 1,
                        classDEF: 13,
                        classMVP: 1,
                        teamKills: 2,
                    },
                    achievements: [],
                },
            ],
        },
    ];

    // Flatten all players for the individual players section
    const allPlayers = teams.flatMap((team) =>
        team.players.map((player) => ({ ...player, team: team.name, teamId: team.id }))
    );

    const filteredPlayers =
        selectedTeamFilter === "all"
            ? allPlayers
            : allPlayers.filter((player) => player.teamId.toString() === selectedTeamFilter);

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
                        Découvrez nos équipes d'élite et nos joueurs vedettes qui représentent le meilleur de la
                        compétition de Laser Game.
                    </p>
                </div>
            </section>

            {/* Teams Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos équipes</h2>

                    <div className="space-y-12">
                        {teams.map((team) => (
                            <Card
                                key={team.id}
                                className="bg-card border-primary/20 p-8 hover:border-primary/40 transition-all duration-300">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Team Info */}
                                    <div className="lg:col-span-1">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="bg-primary/20 p-3 rounded-lg">
                                                <Zap className="h-8 w-8 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-primary">{team.name}</h3>
                                                <Badge variant="secondary" className="mt-1">
                                                    {team.division}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Victoires:</span>
                                                <span className="text-primary font-bold">{team.wins}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Défaites:</span>
                                                <span className="text-red-700">{team.loose}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Saisons:</span>
                                                <span className="text-white">{team.seasons}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="font-bold text-white mb-3">Succès de l'équipe</h4>
                                            {team.achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <Trophy className="h-4 w-4 text-primary" />
                                                    <span className="text-sm text-gray-300">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Players */}
                                    <div className="lg:col-span-2">
                                        <h4 className="text-xl font-bold mb-6 text-white">Roster</h4>
                                        <div className="grid gap-3">
                                            {team.players.map((player, index) => (
                                                <Card
                                                    key={index}
                                                    className="bg-secondary/30 border-primary/10 p-4 hover:border-primary/30 transition-all duration-300 group">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="relative">
                                                            <ImageWithFallback
                                                                src={player.photo}
                                                                alt={player.name}
                                                                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                            {player.role.includes("Capitaine") && (
                                                                <Star className="absolute -top-1 -right-1 h-4 w-4 text-primary fill-current" />
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <h5 className="font-bold text-white">
                                                                    {player.id}{" "}
                                                                    <span className="font-normal">
                                                                        {" "}
                                                                        - {player.name}
                                                                    </span>
                                                                </h5>
                                                                <Badge
                                                                    variant="outline"
                                                                    className="text-xs border-primary/30 text-primary">
                                                                    {player.role}
                                                                </Badge>
                                                            </div>
                                                            <div className="grid grid-cols-4 gap-4 text-xs">
                                                                <div>
                                                                    <span className="text-gray-400">Score: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.score}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Données: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.pointsTaken}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Reçues: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.pointsGiven}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Tirs alliés: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.teamKills}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-4 gap-4 text-xs">
                                                                <div>
                                                                    <span className="text-gray-400">Moy/Rang: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.moyScore}{" "}
                                                                        <span className="font-normal">
                                                                            {" "}
                                                                            -{player.performance.classMVP}
                                                                            <sup>
                                                                                {player.performance.classMVP === 1
                                                                                    ? "er"
                                                                                    : "e"}
                                                                            </sup>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Moy/Rang: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.moyTaken}
                                                                        <span className="font-normal">
                                                                            {" "}
                                                                            -{player.performance.classATQ}
                                                                            <sup>
                                                                                {player.performance.classATQ === 1
                                                                                    ? "er"
                                                                                    : "e"}
                                                                            </sup>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Moy/Rang: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.moyGiven}
                                                                        <span className="font-normal">
                                                                            {" "}
                                                                            -{player.performance.classDEF}
                                                                            <sup>
                                                                                {player.performance.classDEF === 1
                                                                                    ? "er"
                                                                                    : "e"}
                                                                            </sup>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-400">Matchs: </span>
                                                                    <span className="text-primary font-bold">
                                                                        {player.performance.matchesPlayed}
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
                        ))}
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
                                    aria-label="Filtrer joueurs : Tous"
                                    onClick={() => setSelectedTeamFilter("all")}
                                    className={
                                        selectedTeamFilter === "all"
                                            ? "bg-primary text-black"
                                            : "border-primary text-primary hover:bg-primary/10"
                                    }>
                                    Toutes
                                </Button>
                                {teams.map((team) => (
                                    <Button
                                        key={team.id}
                                        variant={selectedTeamFilter === team.id.toString() ? "default" : "outline"}
                                        size="sm"
                                        aria-label={`Filtrer joueurs de l'équipe : ${team.name}`}
                                        onClick={() => setSelectedTeamFilter(team.id.toString())}
                                        className={
                                            selectedTeamFilter === team.id.toString()
                                                ? "bg-primary text-black"
                                                : "border-primary text-primary hover:bg-primary/10"
                                        }>
                                        {team.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {filteredPlayers.map((player, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden cursor-pointer"
                                onClick={() => onPlayerSelect && player.id && onPlayerSelect(player.id)}>
                                <div className="flex items-start flex-col md:flex-row">
                                    {/* Player Photo as leftmost part of card */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-32 h-32 overflow-hidden">
                                            <ImageWithFallback
                                                src={player.photo}
                                                alt={player.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                            />
                                        </div>
                                        {player.role.includes("Capitaine") && (
                                            <div className="absolute top-2 right-2 bg-primary/90 p-1 rounded-full">
                                                <Star className="h-4 w-4 text-black fill-current" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Player Info */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-primary mb-1">{player.name}</h3>
                                                <div className="flex items-center space-x-3">
                                                    <Badge variant="secondary" className="text-sm">
                                                        {player.role}
                                                    </Badge>
                                                    <span className="text-gray-400">•</span>
                                                    <span className="text-white font-medium">{player.team}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="flex items-center text-xs text-gray-400 mb-1">
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

                                        {/* Performance Stats */}
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.matchesPlayed}
                                                </p>
                                                <p className="text-xs text-gray-400">Matches</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.score.toLocaleString()}
                                                </p>
                                                <p className="text-xs text-gray-400">Score (rang)</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.pointsTaken.toLocaleString()}
                                                </p>
                                                <p className="text-xs text-gray-400">Données (rang)</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.pointsGiven.toLocaleString()}
                                                </p>
                                                <p className="text-xs text-gray-400">Reçues (rang)</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.teamKills}
                                                </p>
                                                <p className="text-xs text-gray-400">Tirs alliés</p>
                                            </div>
                                        </div>

                                        {/* Average Stats */}
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                                            <div></div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.moyScore.toLocaleString()}{" "}
                                                    <span className="font-normal">
                                                        ({player.performance.classMVP.toLocaleString()})
                                                    </span>
                                                </p>
                                                <p className="text-xs text-gray-400">Moyenne</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.moyTaken.toLocaleString()}{" "}
                                                    <span className="font-normal">
                                                        ({player.performance.classATQ.toLocaleString()})
                                                    </span>
                                                </p>
                                                <p className="text-xs text-gray-400">Données (moy)</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-primary">
                                                    {player.performance.moyGiven.toLocaleString()}{" "}
                                                    <span className="font-normal">
                                                        ({player.performance.classDEF.toLocaleString()})
                                                    </span>
                                                </p>
                                                <p className="text-xs text-gray-400">Reçues (moy)</p>
                                            </div>
                                            <div></div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Achievements</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {player.achievements.map((achievement, achievementIndex) => (
                                                    <div
                                                        key={achievementIndex}
                                                        className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                                                        <Trophy className="h-3 w-3 text-primary" />
                                                        <span className="text-xs text-gray-300">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Rejoignez nos <span className="text-primary">équipes d'élite</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Vous pensez avoir ce qu'il faut pour rivaliser au plus haut niveau ? Nous sommes toujours à la
                        recherche de joueurs talentueux pour rejoindre nos équipes.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6 mt-12">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Compétences</h4>
                            <p className="text-gray-400">
                                Faites preuve d'une précision et d'un sens du jeu exceptionnels
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Travail d'équipe</h4>
                            <p className="text-gray-400">
                                Travailler efficacement avec ses coéquipiers dans des situations de forte pression
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Assiduité</h4>
                            <p className="text-gray-400">S'engager à participer aux entraînements et à s'améliorer</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Esprit sportif</h4>
                            <p className="text-gray-400">
                                Maintenir les standards les plus élevées en matière de fair-play et de respect
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
