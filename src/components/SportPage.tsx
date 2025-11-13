import { Helmet } from "react-helmet";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Zap, Timer, Award, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

import image from "../assets/podium_championnat_de_france_2025.webp";
import lexisCodex from "../assets/Lexis Codex 2024-2025.pdf";

export function SportPage() {
    const navigate = useNavigate();
    return (
        <div className="pt-20">
            <Helmet>
                <title>La Discipline – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Découvrez la discipline du laser game evolution avec Asso-Clash au Havre : stratégie, précision et compétition pour tous les joueurs."
                />
                <meta property="og:title" content="La Discipline – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Explorez le monde du laser game evolution avec Asso-Clash : technique, stratégie et compétition au Havre."
                />
                <meta property="og:url" content="https://asso-clash.fr/sport" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        LA DISCIPLINE
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Le Laser Game, c'est plus qu'un simple jeu, c'est une discipline mêlant technologie et sport
                        traditionnel, qui allie stratégie, précision, explosivité, réflexes, endurance et travail
                        d'équipe.
                    </p>
                </div>
            </section>

            {/* Explanation Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">C'est quoi le Laser compétitif ?</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le Laser Game est une discipline compétitive, collective, où deux équipes de cinq
                                joueurs s'affrontent dans un labyrinthe lors de parties de 15 minutes réglementées. Les
                                joueurs utilisent le matériel de Laser Game Evolution® pour marquer des points en
                                touchant les capteurs de leurs adversaires, tout en évitant d'être touchés
                                eux&#8209;mêmes.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Au delà du simple loisir, l'aspect compétitif du Laser Game permet de développer des
                                compétences très variées : endurance, précision, stratégie, réflexes et travail
                                d'équipe. C'est une discipline exigeante qui demande à la fois de la concentration et de
                                la coordination.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <Zap className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Équipment high-tech</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Règles complètes</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Timer className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Action rapide</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Award className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Discipline compétitive</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                src={image}
                                alt="Podium championnat de France 2025 de Laser Game, Team'Ajin au centre"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl flex flex-col">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Règles du jeu compétitif</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Configuration</h3>
                            <p className="text-gray-400 mb-4">
                                Affrontement en équipe contre équipe. À la fin du temps imparti, l'équipe avec le
                                meilleur score remporte le match.
                            </p>
                            <div className="text-sm text-primary">Joueurs: 5vs5 | Durée: 15 minutes</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Système de points</h3>
                            <p className="text-gray-400 mb-4">
                                En compétition, chaque touche donnée par un joueur lui rapporte des points, et en enlève
                                à l'adversaire qui la subit.
                            </p>
                            <div className="text-sm text-primary">Touche: +100 / -100 points</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Tir allié</h3>
                            <p className="text-gray-400 mb-4">
                                En compétition, les tirs alliés sont activés. Un tir allié enlève des points aux deux
                                joueurs et éteint celui qui subit la touche.
                            </p>
                            <div className="text-sm text-primary">Touche: -100 / -100 points</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Éxctinction</h3>
                            <p className="text-gray-400 mb-4">
                                Un joueur qui se prend une touche est éteint et doit "dézonner", c'est-à-dire se
                                déplacer d'au moins 5m à vol d'oiseau.
                            </p>
                            <div className="text-sm text-primary">Durée: 8s | Distance: 5m </div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Cachage de cible</h3>
                            <p className="text-gray-400 mb-4">
                                Il est interdit de cacher ses cibles. Il faut donc adopter une posture adéquate. Sinon
                                le joueur peut subir des pénalités.
                            </p>
                            <div className="text-sm text-primary">Faute: -200 points</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Hauteurs</h3>
                            <p className="text-gray-400 mb-4">
                                En compétition, un joueur éteint sur une hauteur, doit retourner au
                                rez&#8209;de&#8209;chaussée avant de pouvoir jouer à nouveau.
                            </p>
                            <div className="text-sm text-primary"></div>
                        </Card>
                    </div>

                    <Button variant="link" size="lg" className="my-8 justify-self-center flex">
                        <a href={lexisCodex} download className="flex items-center gap-2">
                            Télécharger le livre de règle 2025 <Download className="h-8 w-8 text-white" />
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        onClick={() => navigate("/teams")}
                        className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        Rencontrez nos joueurs
                    </Button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Foire aux questions</h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem
                            value="item-1"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Is laser tag a recognized competitive sport?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Yes! Laser tag has evolved into a legitimate competitive sport with organized leagues,
                                tournaments, and championships at regional, national, and international levels.
                                Professional laser tag athletes compete for titles and prizes, with the sport gaining
                                increasing recognition worldwide.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                What age groups can participate in competitive laser tag?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Competitive laser tag welcomes players of all ages, typically starting from 8 years old.
                                We have junior divisions (8-12), youth divisions (13-17), adult divisions (18+), and
                                veteran divisions (40+). Each division has appropriate game modes and competition levels
                                to ensure fair and exciting gameplay for everyone.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                What physical fitness level is required?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                While laser tag does involve running, dodging, and quick movements, it's accessible to
                                various fitness levels. Players can start at their current fitness level and improve
                                over time. Regular training helps develop agility, endurance, and reaction speed, but
                                beginners can participate comfortably and progress at their own pace.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                How long does it take to become competitive?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Most players can grasp the basics within a few sessions, but becoming truly competitive
                                typically takes 3-6 months of regular practice. This includes learning map layouts,
                                developing teamwork skills, mastering different game modes, and improving aim and
                                movement. Our coaching staff provides structured training programs to accelerate your
                                development.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-5"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Is special equipment needed beyond what the arena provides?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                The arena provides all essential equipment (taggers, vests, sensors). However,
                                competitive players often invest in personal gear such as comfortable athletic shoes,
                                moisture-wicking clothing, knee pads, and gloves for better grip. Some advanced players
                                also use personal communication headsets for team coordination during tournaments.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-6"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                How do tournaments and competitions work?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Tournaments typically follow bracket-style or round-robin formats with multiple game
                                modes. Teams compete in qualifying rounds, followed by playoffs and finals. Points are
                                awarded based on objectives completed, eliminations, and overall team performance. Major
                                competitions can last a full day or weekend, with prizes for top performers.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-7"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                What are the main skills needed to excel?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Successful laser tag players develop a combination of physical and mental skills:
                                accurate aiming, quick reflexes, strategic thinking, map awareness, effective
                                communication, teamwork, stamina, and the ability to stay calm under pressure. Mental
                                preparation and game sense are just as important as physical abilities.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-8"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Can I play competitively without joining a team?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Yes! While team play is the most common format, we also host individual tournaments and
                                free-for-all competitions. Additionally, many players start as solo participants and are
                                matched with teams looking for members. Our club helps facilitate team formation for
                                those interested in joining established rosters.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
