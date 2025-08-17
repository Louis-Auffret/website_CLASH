import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Users, Calendar, MapPin, Target, Star } from "lucide-react";

export function ClubPage() {
    const achievements = [
        { year: "2025", title: "Champions de France", description: "Championnat de France - Angoulême" },
        { year: "2024", title: "Quatrième place CDF", description: "Championnat de France - Roanne" },
        { year: "2022", title: "Champions de ligue Nord", description: "Championnat régionnal - Ligue Nord" },
        { year: "2021", title: "Vice-Champions de France", description: "Championnat de France - Poitiers" },
    ];

    const facilities = [
        { name: "Arena Alpha", description: "Multi-level competitive arena with obstacles", capacity: "24 players" },
        { name: "Arena Beta", description: "CQB training facility for close combat", capacity: "16 players" },
        { name: "Training Center", description: "Practice range with target systems", capacity: "12 players" },
        { name: "Team Rooms", description: "Strategy planning and equipment storage", capacity: "6 teams" },
    ];

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        NOTRE CLUB
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Fondé en 2016, le CLASH est un des clubs les plus expérimentés et prestigieux de France.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">À propos du CLASH</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le CLASH a été fondé avec l'objectif de faire du laser game une discipline de
                                compétition, passant du simple loisir à la compétition. Notre expérience et nos joueurs
                                expérimentés offrent l'environnement idéal pour que les joueurs développent leurs
                                compétences et concourent au plus haut niveau.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Nous pensons que le Laser Game est plus qu'un simple jeu : c'est une discipline qui
                                développe le caractère, l'esprit d'équipe, la réflexion stratégique et les réflexes.
                                Notre club a formé de nombreuses équipes dont une équipe championne de France et des
                                joueurs individuels figurant parmis les meilleurs joueurs.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                <div className="flex items-start space-x-3">
                                    <Calendar className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Date de création</h4>
                                        <p className="text-gray-400">2016</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Users className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Membres</h4>
                                        <p className="text-gray-400">25+ actifs</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Trophy className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Championnats</h4>
                                        <p className="text-gray-400">Champions de France</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Adresse</h4>
                                        <p className="text-gray-400">Laser Game Evolution, Le Havre</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZyUyMHRlYW18ZW58MXx8fHwxNzU1MzQ1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Competitive Gaming Team"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos qualifications</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                                        <Trophy className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-primary font-bold text-lg">{achievement.year}</span>
                                            <div className="flex space-x-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">World-Class Facilities</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {facilities.map((facility, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                                        <Target className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-primary">{facility.name}</h3>
                                        <p className="text-gray-300 mb-3">{facility.description}</p>
                                        <div className="text-sm text-primary">Capacity: {facility.capacity}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="relative">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1620705914357-a9d11009e068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZ2FtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTUzNDU5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Neon Gaming Technology"
                            className="w-full h-60 object-cover rounded-lg border border-primary/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end p-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">State-of-the-Art Technology</h3>
                                <p className="text-gray-300">
                                    Advanced laser tag systems with real-time tracking and analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Notre <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Offrir une expérience de laser game compétitive de classe nationale qui développe des athlètes,
                        forge le caractère et crée des souvenirs inoubliables. Nous nous efforçons d'être la destination
                        de choix pour les joueurs passionnés de laser game souhaitant se mesurer aux meilleurs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Excellence</h4>
                            <p className="text-gray-400">Viser le sommet en matière d'entraînement et de compétition</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Communauté</h4>
                            <p className="text-gray-400">Construire des relations solides et des amitiés durables</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Succès</h4>
                            <p className="text-gray-400">
                                Atteindre la victoire grâce au dévouement et au travail d'équipe
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
