import { useParams, useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    Trophy,
    ArrowLeft,
    Star,
    Target,
    Zap,
    Users,
    Calendar,
    TrendingUp,
    MapPin,
    Mail,
    Instagram,
    Twitter,
} from "lucide-react";
import sleaz from "../assets/players/Sleaz1.jpg";

export function PlayerProfilePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Fonction pour récupérer les données d’un joueur
    const getPlayerData = (playerId: string) => {
        const allPlayerData: Record<string, any> = {
            Sleaz: {
                name: "Sleaz",
                firstName: "Louis",
                lastName: "Auffret",
                role: "Captain",
                team: "Team'AJin",
                teamId: 1,
                photo: sleaz,
                age: 24,
                location: "San Francisco, CA",
                joinDate: "2016",
                bio: "Competitive laser tag athlete with over 4 years of professional experience...",
                performance: {
                    matchesPlayed: 32,
                    pointsTaken: 2847,
                    pointsGiven: 1018,
                    kdRatio: "2.8",
                    accuracy: "87.3%",
                    teamKills: 12,
                    wins: 28,
                    losses: 4,
                    winRate: "87.5%",
                    avgPointsPerMatch: 89,
                    bestStreaks: 15,
                    totalTournaments: 12,
                },
                achievements: [
                    {
                        title: "MVP 2023",
                        date: "December 2023",
                        description: "Most Valuable Player of the National Championship",
                    },
                    { title: "National Champion", date: "December 2023", description: "Led Digital Storm to victory" },
                    { title: "Best Captain Award", date: "November 2023", description: "Outstanding leadership" },
                ],
                careerStats: {
                    totalMatches: 145,
                    totalWins: 127,
                    careerKD: "2.6",
                    careerAccuracy: "85.8%",
                    totalTournaments: 28,
                    championshipTitles: 3,
                    yearsActive: 4,
                },
                recentMatches: [
                    {
                        date: "Jan 15, 2024",
                        opponent: "Cyber Phantoms",
                        result: "V",
                        score: "98-76",
                        kd: "3.2",
                        accuracy: "91%",
                    },
                    {
                        date: "Jan 12, 2024",
                        opponent: "Neon Hunters",
                        result: "D",
                        score: "112-89",
                        kd: "2.9",
                        accuracy: "88%",
                    },
                ],
                social: {
                    instagram: "@alexchen_laser",
                    twitter: "@alexchen_gaming",
                    email: "alex.chen@clash-lasertag.com",
                },
                specialties: ["Team Leadership", "Strategic Planning", "Fast Attack", "Arena Control"],
                equipment: ["TechNova X1 Laser", "Nexus Pro Vest", "Atlas Tactical Gear"],
            },
        };
        return allPlayerData[playerId] || null;
    };

    const player = id ? getPlayerData(id) : null;

    if (!player) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Joueur introuvable</h1>
                    <Button onClick={() => navigate("/teams")} className="bg-primary text-black hover:bg-primary/90">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Retour aux équipes
                    </Button>
                </div>
            </div>
        );
    }

    const onBack = () => {
        navigate("/teams");
    };

    return (
        <div className="pt-20">
            {/* Header with Back Button */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-6xl">
                    <Button
                        onClick={onBack}
                        variant="outline"
                        className="mb-6 border-primary text-primary hover:bg-primary/10">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Retour aux équipes
                    </Button>
                </div>
            </section>

            {/* Player Hero Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <Card className="bg-card border-primary/20 p-8 mb-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Player Photo */}
                            <div className="lg:col-span-1">
                                <div className="relative">
                                    <ImageWithFallback
                                        src={player.photo}
                                        alt={player.name}
                                        className="w-full h-80 object-cover rounded-lg border-2 border-primary/30"
                                    />
                                    {player.role === "Captain" && (
                                        <div className="absolute top-4 right-4 bg-primary/90 p-2 rounded-full">
                                            <Star className="h-6 w-6 text-black fill-current" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Player Info */}
                            <div className="lg:col-span-2">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h1 className="text-4xl font-bold text-primary mb-2">
                                            {player.name}
                                            <span className="text-white font-normal">
                                                {" "}
                                                - {player.firstName} {player.lastName}
                                            </span>
                                        </h1>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <Badge variant="secondary" className="text-lg px-3 py-1">
                                                {player.role}
                                            </Badge>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-white font-medium text-lg">{player.team}</span>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Inscrit:</span>
                                                <span className="text-white">{player.joinDate}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Âge:</span>
                                                <span className="text-white">{player.age} ans</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <TrendingUp className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Éxpérience:</span>
                                                <span className="text-white">
                                                    {player.careerStats.yearsActive} saisons
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">{player.bio}</p>

                                {/* Social Links */}
                                {/* <div className="flex items-center space-x-4">
                                    <span className="text-gray-400">Ses réseaux:</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-primary hover:bg-primary/10">
                                        <Instagram className="h-4 w-4 mr-2" />
                                        Instagram
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-primary hover:bg-primary/10">
                                        <Twitter className="h-4 w-4 mr-2" />
                                        Twitter
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-primary hover:bg-primary/10">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Current Season Stats Overview */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Performances de la saison en cours</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.matchesPlayed}
                            </div>
                            <div className="text-sm text-gray-400">Matchs joués</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.matchesPlayed}
                            </div>
                            <div className="text-sm text-gray-400">Victoires</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.winRate}</div>
                            <div className="text-sm text-gray-400">Taux de victoire</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.kdRatio}</div>
                            <div className="text-sm text-gray-400">Score Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.avgPointsPerMatch}
                            </div>
                            <div className="text-sm text-gray-400">Données Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.bestStreaks}</div>
                            <div className="text-sm text-gray-400">Reçues Moy/Match</div>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Detailed Stats */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Statistiques de la saison</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Score total:</span>
                                    <span className="text-primary font-bold">
                                        {player.performance.pointsTaken.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches données:</span>
                                    <span className="text-primary font-bold">
                                        {player.performance.pointsTaken.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches reçues:</span>
                                    <span className="text-white">
                                        {player.performance.pointsGiven.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de Tirs alliés donnés:</span>
                                    <span className="text-white">{player.performance.teamKills}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Victoires:</span>
                                    <span className="text-primary font-bold">{player.performance.wins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Défaites:</span>
                                    <span className="text-white">{player.performance.losses}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Égalités:</span>
                                    <span className="text-white">{player.performance.totalTournaments}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tournois joués:</span>
                                    <span className="text-white">{player.performance.totalTournaments}</span>
                                </div>
                            </div>
                        </Card>

                        {/* Career Overview */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Statistiques de carrière</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Score total:</span>
                                    <span className="text-primary font-bold">{player.careerStats.totalMatches}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches données:</span>
                                    <span className="text-primary font-bold">
                                        {player.performance.pointsTaken.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches reçues:</span>
                                    <span className="text-white">
                                        {player.performance.pointsGiven.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de Tirs alliés donnés:</span>
                                    <span className="text-white">{player.performance.teamKills}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Victoires:</span>
                                    <span className="text-primary font-bold">{player.performance.wins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Défaites:</span>
                                    <span className="text-white">{player.performance.losses}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Égalités:</span>
                                    <span className="text-white">{player.performance.totalTournaments}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tournois joués:</span>
                                    <span className="text-white">{player.performance.totalTournaments}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saisons jouées:</span>
                                    <span className="text-white">{player.careerStats.yearsActive}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* All Seasons Stats Overview */}
            <section className="py-16 px-4 ">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Performances de la carrière globale</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.matchesPlayed}
                            </div>
                            <div className="text-sm text-gray-400">Matchs joués</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.kdRatio}</div>
                            <div className="text-sm text-gray-400">Victoires</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.accuracy}</div>
                            <div className="text-sm text-gray-400">Taux de victoire</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.winRate}</div>
                            <div className="text-sm text-gray-400">Score Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.avgPointsPerMatch}
                            </div>
                            <div className="text-sm text-gray-400">Données Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.bestStreaks}</div>
                            <div className="text-sm text-gray-400">Reçues Moy/Match</div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Récompenses et Titres</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {player.achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                                        <Trophy className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">{achievement.title}</h3>
                                        <p className="text-primary text-sm mb-2">{achievement.date}</p>
                                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Matches */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Historique des matchs récents</h2>

                    <div className="space-y-4">
                        {player.recentMatches.map((match, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-4 hover:border-primary/40 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Date</div>
                                            <div className="text-white font-medium">{match.date}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Adversaire</div>
                                            <div className="text-white font-medium">{match.opponent}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Résultat</div>
                                            <Badge
                                                variant={match.result === "V" ? "default" : "destructive"}
                                                className={match.result === "V" ? "bg-primary text-black" : ""}>
                                                {match.result === "V" ? "Victoire" : "Défaite"}
                                            </Badge>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Score équipe</div>
                                            <div className="text-white font-medium">{match.score}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Score joueur</div>
                                            <div className="text-primary font-bold">{match.kd}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Touches Données</div>
                                            <div className="text-primary font-bold">{match.accuracy}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Touches Reçues</div>
                                            <div className="text-primary font-bold">{match.accuracy}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Tirs alliés</div>
                                            <div className="text-primary font-bold">{match.accuracy}</div>
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
