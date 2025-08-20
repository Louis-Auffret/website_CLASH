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
    Award,
    MapPin,
    Mail,
    Instagram,
    Twitter,
} from "lucide-react";

interface PlayerProfilePageProps {
    playerId: string;
    onBack: () => void;
}

export function PlayerProfilePage({ playerId, onBack }: PlayerProfilePageProps) {
    // This would normally come from a database or API
    const getPlayerData = (id: string) => {
        const allPlayerData = {
            "alex-chen": {
                name: "Alex Chen",
                role: "Captain",
                team: "Digital Storm",
                teamId: 1,
                photo: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU1MzQ2OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                age: 24,
                location: "San Francisco, CA",
                joinDate: "March 2020",
                bio: "Competitive laser tag athlete with over 4 years of professional experience. Known for strategic thinking and exceptional team leadership. Started playing recreationally in college and quickly rose through the ranks to become one of the top players in the national circuit.",
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
                    {
                        title: "National Champion",
                        date: "December 2023",
                        description: "Led Digital Storm to victory in the National Championship",
                    },
                    {
                        title: "Best Captain Award",
                        date: "November 2023",
                        description: "Recognized for outstanding leadership and team coordination",
                    },
                    {
                        title: "Regional Tournament Winner",
                        date: "September 2023",
                        description: "First place in the Western Regional Championship",
                    },
                    {
                        title: "Rookie of the Year",
                        date: "December 2020",
                        description: "Outstanding performance in first competitive season",
                    },
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
                        result: "W",
                        score: "98-76",
                        kd: "3.2",
                        accuracy: "91%",
                    },
                    {
                        date: "Jan 12, 2024",
                        opponent: "Neon Hunters",
                        result: "W",
                        score: "112-89",
                        kd: "2.9",
                        accuracy: "88%",
                    },
                    {
                        date: "Jan 8, 2024",
                        opponent: "Shadow Raiders",
                        result: "W",
                        score: "87-65",
                        kd: "3.1",
                        accuracy: "89%",
                    },
                    {
                        date: "Jan 5, 2024",
                        opponent: "Elite Force",
                        result: "L",
                        score: "78-82",
                        kd: "2.4",
                        accuracy: "84%",
                    },
                    {
                        date: "Jan 2, 2024",
                        opponent: "Quantum Squad",
                        result: "W",
                        score: "95-71",
                        kd: "3.5",
                        accuracy: "93%",
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
            "sarah-kim": {
                name: "Sarah Kim",
                role: "Sniper",
                team: "Digital Storm",
                teamId: 1,
                photo: "https://images.unsplash.com/photo-1571169186019-18acfb7036bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1MzM0MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                age: 22,
                location: "Los Angeles, CA",
                joinDate: "June 2021",
                bio: "Precision shooter specialist with the highest accuracy rating in the league. Former competitive archery athlete who transitioned to laser tag and brought unmatched precision skills to the sport.",
                performance: {
                    matchesPlayed: 30,
                    pointsTaken: 2134,
                    pointsGiven: 892,
                    kdRatio: "2.4",
                    accuracy: "92.1%",
                    teamKills: 8,
                    wins: 26,
                    losses: 4,
                    winRate: "86.7%",
                    avgPointsPerMatch: 71,
                    bestStreaks: 12,
                    totalTournaments: 10,
                },
                achievements: [
                    {
                        title: "Best Sniper 2023",
                        date: "December 2023",
                        description: "Highest accuracy rating in national competition",
                    },
                    {
                        title: "Accuracy King",
                        date: "November 2023",
                        description: "92.1% accuracy - new league record",
                    },
                    {
                        title: "Regional Champion",
                        date: "September 2023",
                        description: "Key player in regional championship victory",
                    },
                    {
                        title: "Rising Star Award",
                        date: "December 2022",
                        description: "Outstanding improvement and performance",
                    },
                ],
                careerStats: {
                    totalMatches: 98,
                    totalWins: 85,
                    careerKD: "2.3",
                    careerAccuracy: "90.8%",
                    totalTournaments: 18,
                    championshipTitles: 2,
                    yearsActive: 3,
                },
                recentMatches: [
                    {
                        date: "Jan 15, 2024",
                        opponent: "Cyber Phantoms",
                        result: "W",
                        score: "89-76",
                        kd: "2.8",
                        accuracy: "94%",
                    },
                    {
                        date: "Jan 12, 2024",
                        opponent: "Neon Hunters",
                        result: "W",
                        score: "76-89",
                        kd: "2.2",
                        accuracy: "91%",
                    },
                    {
                        date: "Jan 8, 2024",
                        opponent: "Shadow Raiders",
                        result: "W",
                        score: "82-65",
                        kd: "2.6",
                        accuracy: "93%",
                    },
                    {
                        date: "Jan 5, 2024",
                        opponent: "Elite Force",
                        result: "L",
                        score: "71-82",
                        kd: "1.9",
                        accuracy: "88%",
                    },
                    {
                        date: "Jan 2, 2024",
                        opponent: "Quantum Squad",
                        result: "W",
                        score: "85-71",
                        kd: "3.1",
                        accuracy: "95%",
                    },
                ],
                social: {
                    instagram: "@sarahkim_sniper",
                    twitter: "@sarahk_laser",
                    email: "sarah.kim@clash-lasertag.com",
                },
                specialties: ["Long Range Precision", "Cover Fire", "Position Control", "Target Elimination"],
                equipment: ["TechNova Precision X2", "Nexus Sniper Scope", "Atlas Stealth Gear"],
            },
            // Add more players as needed...
        };

        return allPlayerData[id as keyof typeof allPlayerData] || null;
    };

    const player = getPlayerData(playerId);

    if (!player) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Joueur introuvable</h1>
                    <Button onClick={onBack} className="bg-primary text-black hover:bg-primary/90">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Teams
                    </Button>
                </div>
            </div>
        );
    }

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
                        Back to Teams
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
                                        <h1 className="text-4xl font-bold text-primary mb-2">{player.name}</h1>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <Badge variant="secondary" className="text-lg px-3 py-1">
                                                {player.role}
                                            </Badge>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-white font-medium text-lg">{player.team}</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Joined:</span>
                                                <span className="text-white">{player.joinDate}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Location:</span>
                                                <span className="text-white">{player.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Age:</span>
                                                <span className="text-white">{player.age} years old</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <TrendingUp className="h-4 w-4 text-primary" />
                                                <span className="text-gray-400">Experience:</span>
                                                <span className="text-white">
                                                    {player.careerStats.yearsActive} years
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">{player.bio}</p>

                                {/* Social Links */}
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-400">Connect:</span>
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
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Current Season Performance</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.matchesPlayed}
                            </div>
                            <div className="text-sm text-gray-400">Matches Played</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.kdRatio}</div>
                            <div className="text-sm text-gray-400">K/D Ratio</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.accuracy}</div>
                            <div className="text-sm text-gray-400">Accuracy</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.winRate}</div>
                            <div className="text-sm text-gray-400">Win Rate</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {player.performance.avgPointsPerMatch}
                            </div>
                            <div className="text-sm text-gray-400">Avg Points/Match</div>
                        </Card>
                        <Card className="bg-card border-primary/20 p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{player.performance.bestStreaks}</div>
                            <div className="text-sm text-gray-400">Best Win Streak</div>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Detailed Stats */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Season Statistics</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Points Taken:</span>
                                    <span className="text-primary font-bold">
                                        {player.performance.pointsTaken.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Points Given:</span>
                                    <span className="text-white">
                                        {player.performance.pointsGiven.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Team Kills:</span>
                                    <span className="text-white">{player.performance.teamKills}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Wins:</span>
                                    <span className="text-primary font-bold">{player.performance.wins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Losses:</span>
                                    <span className="text-white">{player.performance.losses}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tournaments Played:</span>
                                    <span className="text-white">{player.performance.totalTournaments}</span>
                                </div>
                            </div>
                        </Card>

                        {/* Career Overview */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Career Overview</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Career Matches:</span>
                                    <span className="text-primary font-bold">{player.careerStats.totalMatches}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Career Wins:</span>
                                    <span className="text-primary font-bold">{player.careerStats.totalWins}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Career K/D Ratio:</span>
                                    <span className="text-white">{player.careerStats.careerKD}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Career Accuracy:</span>
                                    <span className="text-white">{player.careerStats.careerAccuracy}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Championship Titles:</span>
                                    <span className="text-primary font-bold">
                                        {player.careerStats.championshipTitles}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Years Active:</span>
                                    <span className="text-white">{player.careerStats.yearsActive}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Achievements & Awards</h2>

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
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-primary mb-8">Recent Match History</h2>

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
                                            <div className="text-sm text-gray-400 mb-1">Opponent</div>
                                            <div className="text-white font-medium">{match.opponent}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Result</div>
                                            <Badge
                                                variant={match.result === "W" ? "default" : "destructive"}
                                                className={match.result === "W" ? "bg-primary text-black" : ""}>
                                                {match.result === "W" ? "WIN" : "LOSS"}
                                            </Badge>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Score</div>
                                            <div className="text-white font-medium">{match.score}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">K/D</div>
                                            <div className="text-primary font-bold">{match.kd}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Accuracy</div>
                                            <div className="text-primary font-bold">{match.accuracy}</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties & Equipment */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Specialties */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <Target className="h-5 w-5 text-primary mr-2" />
                                Specialties
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {player.specialties.map((specialty, index) => (
                                    <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                                        {specialty}
                                    </Badge>
                                ))}
                            </div>
                        </Card>

                        {/* Equipment */}
                        <Card className="bg-card border-primary/20 p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <Zap className="h-5 w-5 text-primary mr-2" />
                                Equipment
                            </h3>
                            <div className="space-y-2">
                                {player.equipment.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
