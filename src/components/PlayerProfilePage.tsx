import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, ArrowLeft, Star, Calendar, Users, TrendingUp } from "lucide-react";

type Player = {
    player_id: number;
    player_pseudo: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    registration: number;
    photo: string;
    player_achievements: string | string[];
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
    total_score: number;
    total_given: number;
    total_received: number;
    total_TK: number;
    total_matches: number;
    total_wins: number;
};

export function PlayerProfilePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [player, setPlayer] = useState<Player | null>(null);
    const [loading, setLoading] = useState(true);

    const getAge = (birthdate: string): number => {
        const birth = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const getExperience = (registration: string | number): number => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth(); // 0 = janvier, 11 = décembre

        let seasonYear = currentYear;
        if (currentMonth < 8) {
            // avant septembre
            seasonYear = currentYear - 1;
        }

        return seasonYear - Number(registration) + 1; // +1 pour inclure la première saison
    };

    useEffect(() => {
        fetch("https://asso-clash.fr/backend/api.php")
            .then((res) => res.json())
            .then((teams) => {
                const allPlayers = teams.flatMap((team: any) =>
                    team.players.map((p: any) => ({ ...p, team_name: team.name }))
                );
                const found = allPlayers.find((p: Player) => p.player_id.toString() === id);
                setPlayer(found || null);
            })
            .catch((err) => console.error("Erreur API:", err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <div className="pt-20 min-h-screen flex items-center justify-center text-white">Chargement...</div>;
    }

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

    const onBack = () => navigate("/teams");

    return (
        <div className="pt-20">
            {/* Bouton retour */}
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

            {/* Player Hero */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <Card className="bg-card border-primary/20 p-8 mb-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Photo */}
                            <div className="lg:col-span-1">
                                <ImageWithFallback
                                    src={player.photo}
                                    alt={player.player_pseudo}
                                    className="w-full h-80 object-cover rounded-lg border-2 border-primary/30"
                                />
                            </div>

                            {/* Infos */}
                            <div className="lg:col-span-2">
                                <h1 className="text-4xl font-bold text-primary mb-2">
                                    {player.player_pseudo}
                                    <span className="text-white font-normal">
                                        {" "}
                                        - {player.firstName} {player.lastName}
                                    </span>
                                </h1>
                                <div className="flex items-center space-x-4 mb-4">
                                    <Badge variant="secondary">{player.team_name}</Badge>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <span className="text-gray-400">Inscrit:</span>
                                        <span className="text-white">{player.registration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-primary" />
                                        <span className="text-gray-400">Âge:</span>
                                        <span className="text-white">{getAge(player.birthdate)} ans</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <TrendingUp className="h-4 w-4 text-primary" />
                                        <span className="text-gray-400">Expérience:</span>
                                        <span className="text-white">
                                            {getExperience(player.registration)} saison
                                            {getExperience(player.registration) > 1 ? "s" : ""}
                                        </span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Stats détaillées */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Statistiques</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">{player.total_matches}</div>
                            <div className="text-sm text-gray-400">Matchs joués</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">{player.total_wins}</div>
                            <div className="text-sm text-gray-400">Victoires</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">
                                {player.total_matches > 0
                                    ? ((player.total_wins / player.total_matches) * 100).toFixed(1) + "%"
                                    : "0%"}
                            </div>
                            <div className="text-sm text-gray-400">Taux de victoire</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">
                                {player.total_matches
                                    ? (Number(player.total_score) / Number(player.total_matches)).toFixed(2)
                                    : 0}
                            </div>
                            <div className="text-sm text-gray-400">Score Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">
                                {player.total_matches
                                    ? (Number(player.total_given) / Number(player.total_matches)).toFixed(2)
                                    : 0}
                            </div>
                            <div className="text-sm text-gray-400">Données Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-2xl font-bold text-primary">
                                {player.total_matches
                                    ? (Number(player.total_received) / Number(player.total_matches)).toFixed(2)
                                    : 0}
                            </div>
                            <div className="text-sm text-gray-400">Reçues Moy/Match</div>
                        </Card>
                    </div>

                    {/* Detailed Stats */}
                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        <Card className="bg-card border-primary/20 p-6 flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">Statistiques de la saison</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Score total:</span>
                                    <span className="text-primary font-bold">{player.total_score}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches données:</span>
                                    <span className="text-primary font-bold">{player.total_given}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches reçues:</span>
                                    <span className="text-white">{player.total_received}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de Tirs alliés donnés:</span>
                                    <span className="text-white">{player.total_TK}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Victoires:</span>
                                    <span className="text-primary font-bold">{player.total_wins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Défaites:</span>
                                    <span className="text-white">{player.total_matches}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Égalités:</span>
                                    <span className="text-white">{player.total_matches}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tournois joués:</span>
                                    <span className="text-white">{player.total_matches}</span>
                                </div>
                            </div>
                        </Card>

                        {/* Career Overview */}
                        <Card className="bg-card border-primary/20 p-6 flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">Statistiques de carrière</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Score total:</span>
                                    <span className="text-primary font-bold">{player.career_score}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches données:</span>
                                    <span className="text-primary font-bold">{player.career_given}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de touches reçues:</span>
                                    <span className="text-white">{player.career_received}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total de Tirs alliés donnés:</span>
                                    <span className="text-white">{player.career_TK}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Victoires:</span>
                                    <span className="text-primary font-bold">{player.career_wins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Défaites:</span>
                                    <span className="text-white">{player.career_defeats}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Égalités:</span>
                                    <span className="text-white">{player.career_draws}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tournois joués:</span>
                                    <span className="text-white">{player.career_competition}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saisons jouées:</span>
                                    <span className="text-white">
                                        {getExperience(player.registration)}
                                        {getExperience(player.registration) > 1}
                                    </span>
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
                            <div className="text-3xl font-bold text-primary mb-2">{player.career_matches}</div>
                            <div className="text-sm text-gray-400">Matchs joués</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.career_wins}</div>
                            <div className="text-sm text-gray-400">Victoires</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.career_matches > 0
                                    ? ((player.career_wins / player.career_matches) * 100).toFixed(1) + "%"
                                    : "0%"}
                            </div>
                            <div className="text-sm text-gray-400">Taux de victoire</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.career_matches
                                    ? (Number(player.career_score) / Number(player.career_matches)).toFixed(2)
                                    : 0}
                            </div>
                            <div className="text-sm text-gray-400">Score Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {" "}
                                {player.career_matches
                                    ? (Number(player.career_given) / Number(player.career_matches)).toFixed(2)
                                    : 0}
                            </div>
                            <div className="text-sm text-gray-400">Données Moy/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {" "}
                                {player.career_matches
                                    ? (Number(player.career_received) / Number(player.career_matches)).toFixed(2)
                                    : 0}
                            </div>
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
                        {String(player.player_achievements)
                            .replace(/[\[\]"]/g, "") // supprime [ ] et "
                            .split(",")
                            .map((achievement, index) => (
                                <Card
                                    key={index}
                                    className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                                            <Trophy className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{achievement.trim()}</h3>
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
