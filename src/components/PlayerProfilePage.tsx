import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, ArrowLeft, Star, Calendar, Users, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Imports des images :
import background from "../assets/avatar_background.webp";
import default_player from "../assets/players/Default.png";

interface TeamsPageProps {
    onPlayerSelect?: (playerId: string) => void;
}

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
    total_defeats: number;
    total_draws: number;
    competitions: CompetitionStats[];
};

export type CompetitionStats = {
    competition_id: number;
    competition_name: string;
    score: number;
    given: number;
    received: number;
    TK: number;
    wins: number;
    defeats: number;
    draws: number;
};

type Season = {
    id: number;
    name: string;
    start_date: string;
    end_date?: string;
};

export function PlayerProfilePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [player, setPlayer] = useState<Player | null>(null);
    const [loading, setLoading] = useState(true);

    const modules = import.meta.glob<{ default: string }>("../assets/players/*.png", { eager: true }); // Importe toutes les images du dossier players

    // On reconstruit un objet { Sleaz: <url> }
    const playerImages: { [key: string]: string } = {};

    for (const path in modules) {
        const fileName = path.split("/").pop()?.replace(".png", "");
        if (fileName) {
            playerImages[fileName] = modules[path].default;
        }
    }

    const [searchParams] = useSearchParams();
    const seasonIdFromURL = searchParams.get("season_id");
    const [selectedSeason, setSelectedSeason] = useState<string | null>(seasonIdFromURL);
    const [seasons, setSeasons] = useState<Season[]>([]);

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

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const formatted = date.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
        });
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    };

    useEffect(() => {
        fetch("https://asso-clash.fr/backend/season.php")
            .then((res) => res.json())
            .then((data) => setSeasons(data))
            .catch((err) => console.error("Erreur chargement saisons:", err));
    }, []);

    useEffect(() => {
        if (!id) return;

        let url = `https://asso-clash.fr/backend/api.php`;
        if (selectedSeason) {
            url += `?season_id=${selectedSeason}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((teams: any[]) => {
                // trouver le joueur
                const allPlayers: Player[] = teams.flatMap((team) =>
                    team.players.map((p: any) => ({
                        ...p,
                        team_name: team.name,
                    }))
                );
                const found = allPlayers.find((p) => p.player_id.toString() === id);
                setPlayer(found || null);
            })
            .catch((err) => console.error("Erreur API:", err))
            .finally(() => setLoading(false));
    }, [id, selectedSeason]);

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
                            <div className="relative overflow-hidden w-full h-full rounded-lg border-primary/30">
                                <ImageWithFallback
                                    src={background}
                                    alt="Arrière plan joueur"
                                    className="w-full h-full object-cover"
                                />
                                <ImageWithFallback
                                    src={playerImages[player?.player_pseudo || ""] || default_player}
                                    alt={"Portrait de " + (player?.player_pseudo || "Joueur")}
                                    className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-500 origin-bottom md:translate-y-2 md:group-hover:scale-102"
                                />
                            </div>

                            {/* Infos */}
                            <div className="lg:col-span-2">
                                {player && (
                                    <>
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

                                        {/* 
                                        {(() => {
                                            // Utilise les scores de toutes les compétitions s'ils existent, sinon le total global
                                            const scores =
                                                player.competitions?.length > 0
                                                    ? player.competitions.map((c) => c.score)
                                                    : [player.total_score];

                                            const minScore = Math.min(...scores);
                                            const maxScore = Math.max(...scores);
                                            const currentScore = player.total_score ?? 0;

                                            // Normalisation pour éviter division par 0
                                            const percent =
                                                maxScore === minScore
                                                    ? 100
                                                    : ((currentScore - minScore) / (maxScore - minScore)) * 100;

                                            // Clamp la valeur entre 0 et 100
                                            const clamped = Math.max(0, Math.min(100, percent));

                                            return (
                                                <div className="mt-6">
                                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                                        <span>Performance globale</span>
                                                        <span>{clamped.toFixed(1)}%</span>
                                                    </div>
                                                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-3 bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-500"
                                                            style={{ width: `${clamped}%` }}></div>
                                                    </div>
                                                </div>
                                            );
                                        })()}
                                             */}
                                    </>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Stats détaillées */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-3xl font-bold text-primary mb-8">Statistiques</h2>
                        {seasons.length > 0 && (
                            <div className="flex justify-center mb-12 max-w-fit justify-self-center">
                                <Select
                                    value={selectedSeason ?? ""}
                                    onValueChange={(value) => setSelectedSeason(value)}>
                                    <SelectTrigger className="px-6 py-5 rounded-xl border border-primary/40 bg-card text-white hover:bg-primary/10 transition-all duration-300">
                                        <SelectValue placeholder="Sélectionnez une saison" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {seasons
                                            .sort(
                                                (a, b) =>
                                                    new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
                                            )
                                            .map((season) => (
                                                <SelectItem key={season.id} value={season.id.toString()}>
                                                    {season.name}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    </div>
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
                                {/* <div className="flex justify-between">
                                    <span className="text-gray-400">Tournois joués:</span>
                                    <span className="text-white">{player.career_competition}</span>
                                </div> */}
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
                    <h2 className="text-3xl font-bold text-primary mb-8">Compétitions</h2>
                    <div>
                        {player.competitions.map((comp) => (
                            <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 mb-5">
                                <div className="text-md font-bold">{comp.competition_name}</div>
                                <div className="flex flex-col md:flex-row md:justify-between px-5">
                                    <div className="flex flex-row gap-15 justify-between">
                                        <div className="flex flex-col items-center ">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Score</div>
                                            <div className="text-3xl font-bold text-white mb-4 md:mb-2">
                                                {comp.score}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Données</div>
                                            <div className="text-3xl font-bold text-primary mb-4 md:mb-2">
                                                {comp.given}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Reçues</div>
                                            <div className="text-3xl font-bold text-destructive mb-4 md:mb-2">
                                                {comp.received}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 justify-between">
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Score Moy</div>
                                            <div className="text-3xl font-bold text-white mb-4 md:mb-2">
                                                {(
                                                    Number(comp.score) /
                                                    (Number(comp.draws) + Number(comp.defeats) + Number(comp.wins))
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Données Moy</div>
                                            <div className="text-3xl font-bold text-primary mb-4 md:mb-2">
                                                {(
                                                    Number(comp.given) /
                                                    (Number(comp.draws) + Number(comp.defeats) + Number(comp.wins))
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Reçues Moy</div>
                                            <div className="text-3xl font-bold text-destructive mb-4 md:mb-2">
                                                {(
                                                    Number(comp.received) /
                                                    (Number(comp.draws) + Number(comp.defeats) + Number(comp.wins))
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 justify-between">
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Victoires</div>
                                            <div className="text-3xl font-bold text-primary mb-4 md:mb-2">
                                                {comp.wins}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Défaites</div>
                                            <div className="text-3xl font-bold text-destructive mb-4 md:mb-2">
                                                {comp.defeats}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-400 pb-0 md:pb-4">Égalités</div>
                                            <div className="text-3xl font-bold text-white mb-4 md:mb-2">
                                                {comp.draws}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Récompenses et Titres</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(() => {
                            let achievementsArray: string[][] = [];

                            try {
                                let parsed: unknown;

                                if (typeof player.player_achievements === "string") {
                                    parsed = JSON.parse(player.player_achievements);
                                } else {
                                    parsed = player.player_achievements;
                                }

                                if (Array.isArray(parsed)) {
                                    achievementsArray = parsed.map((item) =>
                                        Array.isArray(item) ? item.map(String) : [String(item)]
                                    );
                                }
                            } catch (e) {
                                achievementsArray = [];
                            }

                            return achievementsArray.map(([title, date, description], index) => (
                                <Card
                                    key={index}
                                    className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex-col">
                                            <h3 className="font-bold text-white pb-2">{title}</h3>
                                            {date && <p className="text-sm text-primary pb-2">{formatDate(date)}</p>}
                                            {description && <p className="text-sm text-gray-400">{description}</p>}
                                        </div>
                                    </div>
                                </Card>
                            ));
                        })()}
                    </div>
                </div>
            </section>
        </div>
    );
}
