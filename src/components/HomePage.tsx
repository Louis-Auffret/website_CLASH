import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import subtitles from "../assets/transcript.vtt";
import clashLogo from "../assets/logo-clash.svg";
import coverPhoto from "../assets/CLASH_Background.webp";
import laserLogo from "../assets/Laser_League_Logo.webp";
import trailerAjin from "../assets/Trailer_Ajin_CDF.mp4";
import thumbnail from "../assets/Trailer_Ajin_thumbnail.webp";

export function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();

    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Trailer Team'Ajin",
        description: "Bande-annonce de la Team'Ajin pour les Championnats de France de Laser Game.",
        thumbnailUrl: [thumbnail],
        uploadDate: "2025-11-15T00:00:00Z",
        contentUrl: "https://asso-clash.fr/assets/Trailer_Ajin_CDF-CBj0wsIV.mp4",
        embedUrl: "https://asso-clash.fr/",
        duration: "PT97S",
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="pt-20">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/80 z-10" />
                <ImageWithFallback
                    src={coverPhoto}
                    alt="Membres du CLASH"
                    className="absolute inset-0 w-full h-full object-cover"
                    width={2800}
                    height={1173}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />

                <img
                    src={clashLogo}
                    alt="Logo du CLASH"
                    className="absolute z-20 h-70 top-20 object-contain mx-auto mb-4 animate-pulse"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-100">
                    <div className="mb-6"></div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent drop-shadow-xl/50">
                        Laser Game Evolution Le&nbsp;Havre
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-xl/50">
                        Le CLASH est l’association championne de France de Laser Game Evolution au Havre. Véritable
                        référence de la discipline, notre club forme les meilleurs joueurs et joueuses compétitifs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => navigate("/laser-game")}
                            className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                            Découvrez la discipline
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => navigate("/club")}
                            className=" text-lg px-8 py-3">
                            Rejoignez notre club
                        </Button>
                    </div>
                </div>

                <img
                    src={laserLogo}
                    alt="Logo Laser League"
                    className="absolute w-70 bottom-30 left-1/2 -translate-x-1/2 z-20 hidden md:block"
                />
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Pourquoi choisir le <span className="text-primary">CLASH</span> ?
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 mx-auto drop-shadow-xl/50">
                        Le CLASH <i>– Club de Laser game Associatif et Sportif Havrais –</i> est l’association de
                        référence du laser game evolution au Havre. Que vous soyez débutant ou joueur expérimenté,
                        découvrez nos compétitions, événements et activités de laser game autour de vous. Rejoignez-nous
                        pour vivre des expériences uniques et conviviales.
                    </p>

                    <div className="flex flex-col md:flex-row content-center gap-8">
                        <Card className="flex-1 bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Target className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Formation d'excellence</h3>
                            <p className="text-gray-400">
                                Coaching sur-mesure pour développer vos compétences et faire de vous l'un des meilleurs
                                joueurs de Laser Game.
                            </p>
                        </Card>

                        <Card className="flex-1 bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Users className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Esprit d'équipe</h3>
                            <p className="text-gray-400">
                                Rejoignez nos équipes compétitives et forgez des amitiés durables tout en concourant au
                                plus haut niveau.
                            </p>
                        </Card>

                        <Card className="flex-1 bg-card border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 group">
                            <Trophy className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-primary">Niveau Championnat</h3>
                            <p className="text-gray-400">
                                Rejoignez nos équipes expérimentées et participez aux tournois régionaux jusqu’à la
                                grande finale nationale.
                            </p>
                        </Card>
                    </div>
                    <div className="container mx-auto max-w-6xl">
                        <video ref={videoRef} className="w-full h-auto rounded-xl my-8" controls muted playsInline>
                            <source src={trailerAjin} type="video/mp4" />
                            <track src={subtitles} kind="subtitles" srcLang="fr" label="Français" default />
                            Votre navigateur ne supporte pas ce type de vidéo (WebM, MP4).
                        </video>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Envie de faire partie <span className="text-primary">des meilleurs</span> ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Faites passer vos capacités au niveau supérieur avec le CLASH.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate("/teams")}
                        className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4">
                        Rencontrez nos équipes et joueurs
                    </Button>
                </div>
            </section>
        </div>
    );
}
