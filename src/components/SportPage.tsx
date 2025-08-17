import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Zap, Timer, Award } from "lucide-react";

export function SportPage() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        LA DISCIPLINE
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Le Laser Game, c'est plus qu'un simple jeu, c'est une discipline mêlant technologie et sport
                        traditionnel, qui allie stratégie, précision et travail d'équipe.
                    </p>
                </div>
            </section>

            {/* Explanation Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">Qu'est-ce que le Laser Game ?</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le Laser Game est une discipline compétitive, collective, où deux équipes de cinq
                                joueurs s'affrontent dans un labyrinthe lors de parties de 15 minutes réglementées. Les
                                joueurs utilisent le matériel de Laser Game Evolution® pour marquer des points en
                                touchant les capteurs de leurs adversaires, tout en évitant d'être touchés eux-mêmes.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Au delà du simple loisir, l'aspect compétitif du Laser Game permet de développer des
                                compétences très variées : endurance, précision, stratégie, réflexes et travail
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
                                src="https://images.unsplash.com/photo-1632017734927-48988a0efae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzU1MzQ1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Futuristic Gaming Arena"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
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
                                Il est interdit de cacher sa cible. Il faut donc adopter une posture adéquate. Sinon le
                                joueur peut subit des pénalités.
                            </p>
                            <div className="text-sm text-primary">Faute: -200 points</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Hauteurs</h3>
                            <p className="text-gray-400 mb-4">
                                En compétition, un joueur éteint sur une hauteur, doit retourner au rez-de-chaussée
                                avant de pouvoir rejouer.
                            </p>
                            <div className="text-sm text-primary"></div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Budget Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="pb-16">
                        <h1 className="text-4xl font-bold mb-6 text-primary">Cotisations à l'année</h1>
                        <p className="text-xl text-gray-300">
                            Une saison d'entraînement s'étend de Septembre à Juin. Les entraînement ont lieux le
                            dimanche soir de 18h à 21h sur un créneau entièrement réservé au club.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">Cotisation Loisir [400€]</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Sans engagement</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Possibilité de payer au mois</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Pas de compétition, donc pas intégré à une équipe du club
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Encadré par des joueurs compétitifs expérimentés</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">[400€] dédié aux frais de location du matériel</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">Cotisation Compétition [600€]</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Engagement à l'année</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Obligation de payer à l'année</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Participation à la compétition régionale, intégré à une équipe officielle
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        En plus des frais de location du matériel s'ajoute [200€] dédié aux frais de la
                                        marque pour organiser les compétitions
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Le club, strucuté sous forme d'association, réclame également une participation
                                        financière [~50€] pour les déplacements de la saison
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
