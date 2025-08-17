import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Users, Trophy } from "lucide-react";
import clashLogo from "../assets/clash-logo.png";

interface HomePageProps {
    onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
                <ImageWithFallback
                    // src="https://images.unsplash.com/photo-1643398899826-2fca1e015fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHRhZyUyMGdhbWUlMjBkYXJrfGVufDF8fHx8MTc1NTM0NTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    src="../src/assets/Teams.jpg"
                    alt="Laser Tag Arena"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="mb-6">
                        <img
                            src={clashLogo}
                            alt="CLASH Logo"
                            className="h-60 w-60 object-contain mx-auto mb-4 animate-pulse"
                        />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        Club de Laser Associatif et Sportif Havrais
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Club de compétition de laser game d'élite. Là où la précision rencontre la technologie et où
                        naissent les champions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => onPageChange("sport")}
                            className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                            Découvrez la discipline
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => onPageChange("teams")}
                            className=" text-lg px-8 py-3">
                            Rencontrez nos équipes
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Pourquoi choisir le <span className="text-primary">CLASH</span>?
                    </h2>

                    <div className="inline-flex content-center grid md:grid-cols-3 gap-8">
                        <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Target className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Formation d'excellence</h3>
                            <p className="text-gray-400">
                                Ciblage avancés et coaching professionnel pour affiner vos compétences et améliorer
                                votre précision.
                            </p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Users className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Esprit d'équipe</h3>
                            <p className="text-gray-400">
                                Rejoignez nos équipes compétitives et forgez des amitiés durables tout en concourant au
                                plus haut niveau.
                            </p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Trophy className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Niveau Championnat</h3>
                            <p className="text-gray-400">
                                Participez au tournois régionaux et nationaux avec nos équipes éxpérimentées et un
                                palmarès éprouvé.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Prêt à rejoindre <span className="text-primary">l'élite</span> ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Faites passez vos capacités au niveau surpérieur avec le CLASH
                    </p>
                    <Button
                        size="lg"
                        onClick={() => onPageChange("club")}
                        className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4">
                        Apprenez en plus sur le club
                    </Button>
                </div>
            </section>
        </div>
    );
}
