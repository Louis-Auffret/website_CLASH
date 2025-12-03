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
                <meta property="og:url" content="https://asso-clash.fr/laser-game" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        La Discipline du Laser Game Evolution
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Le laser game evolution est bien plus qu’un simple jeu&nbsp;: c’est une discipline mêlant
                        stratégie, précision et esprit d’équipe. Le Clash vous fait découvrir cette activité
                        passionnante au Havre, avec des compétitions et des entraînements adaptés à tous les niveaux.
                    </p>
                </div>
            </section>

            {/* Explanation Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">C’est quoi le Laser compétitif ?</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le Laser Game est une discipline compétitive, collective, où deux équipes de cinq
                                joueurs s’affrontent dans un labyrinthe lors de parties de 15 minutes réglementées. Les
                                joueurs utilisent le matériel de Laser Game Evolution® pour marquer des points en
                                touchant les capteurs de leurs adversaires, tout en évitant d’être touchés
                                eux&#8209;mêmes.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Au delà du simple loisir, l’aspect compétitif du Laser Game permet de développer des
                                compétences très variées : endurance, précision, stratégie, réflexes et travail
                                d’équipe. C’est une discipline exigeante qui demande à la fois de la concentration et de
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
                                Affrontement en équipe contre équipe. À la fin du temps imparti, l’équipe avec le
                                meilleur score remporte le match.
                            </p>
                            <div className="text-sm text-primary">Joueurs: 5vs5 | Durée: 15 minutes</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Système de points</h3>
                            <p className="text-gray-400 mb-4">
                                En compétition, chaque touche donnée par un joueur lui rapporte des points, et en enlève
                                à l’adversaire qui la subit.
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
                                Un joueur qui se prend une touche est éteint et doit "dézonner", c’est-à-dire se
                                déplacer d’au moins 5m à vol d’oiseau.
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
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl pb-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Foire aux questions</h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem
                            value="item-1"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Le Laser Game est-il un sport reconnu ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Pas tout à fait, le Laser Game est une discipline de loisir qui gagne en reconnaissance,
                                notamment grâce à des compétitions organisées par des associations comme la nôtre.
                                Depuis peu, la marque Laser Game Evolution® travaille également à promouvoir le laser
                                game comme une activité compétitive, avec des règles officielles et des tournois
                                réguliers.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                À partir de quel âge peut-on jouer en compétition ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                La compétition de Laser Game n’a pas d’âge minimum officiel, mais elle n’est
                                généralement pas recommandée pour les enfants de moins de 14 ans. La discipline n’est
                                pas séparée en divisions, ainsi hommes et femmes de tout âge, s’affrontent lors des
                                compétitions. Cependant, il est important que les joueurs aient une bonne compréhension
                                des règles et une certaine maturité pour participer efficacement en équipe.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Combien de temps faut-il pour participer à la compétition ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Pour participer à des compétitions officielles, il est recommandé d’avoir au moins une
                                première année d’entraînement régulier, en loisir ou avec une équipe. Cela permet de
                                bien comprendre les règles, de développer les compétences de tir et de positionnement,
                                et de s’habituer à la dynamique d’équipe. Cependant, la durée exacte dépend du niveau
                                individuel et de la fréquence des entraînements.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                A-t-on besoin d’équipement spécial ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Le matériel de Laser Game Evolution® est fourni lors des compétitions officielles.
                                Cependant, il est recommandé de porter des vêtements confortables et des chaussures de
                                sport adaptées. Certains joueurs choisissent d’investir dans des accessoires personnels
                                comme des gants ou des protège-genoux pour plus de confort et de protection pendant les
                                matchs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-5"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Comment se déroulent les tournois et compétitions ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Les tournois en saison régulière de Laser Game Evolution se déroulent généralement sous
                                forme de matchs aller-retour entre équipes dans deux labyrinthes. Les équipes
                                s’affrontent dans un format de championnat, accumulant des points en fonction de leurs
                                performances. À la fin de la saison, les meilleures équipes se qualifient pour le
                                championnat de France (CDF). Lors du CDF, les équipes s’affrontent dans un format à
                                élimination jusqu’à ce qu’une équipe soit couronnée championne de France.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-6"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Quels sont les compétences clés pour exceller au laser game ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Pour exceller en laser game compétitif, plusieurs compétences sont essentielles :
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>Précision de tir : Savoir viser rapidement et efficacement.</li>
                                    <li>Stratégie d’équipe : Comprendre les rôles et les tactiques collectives.</li>
                                    <li>
                                        Endurance physique : Maintenir un haut niveau d’énergie tout au long du match.
                                    </li>
                                    <li>Réflexes rapides : Réagir rapidement aux mouvements des adversaires.</li>
                                    <li>Communication : Coopérer efficacement avec les coéquipiers.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-7"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Puis-je participer à la compétition en tant que joueur solo ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Malheuresement non. Le laser game compétitif est une discipline d’équipe. Il est donc
                                nécessaire de rejoindre une équipe existante ou d’en former une avec d’autres joueurs
                                avant de participer à des compétitions officielles. Cela permet de développer la
                                cohésion et la stratégie d’équipe, qui sont essentielles pour réussir dans cette
                                discipline.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Championship Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Organisation</h2>
                    <p className="mb-8">
                        La compétition évolue chaque année en terme de ligues, de régions, d’équipes, de règles et
                        d’organisation. Néanmoins, cette année l’organisation est prise en charge par la marque Laser
                        Game Evolution® elle&#8209;même, avec un championnat de France finalisant la saison compétitive.
                    </p>
                    <p className="mb-8">
                        Cette saison, pas de ligues régionales, les équipes s'inscrivent aux tournois organisés par les
                        différents centres de Laser Game Evolution® en France. Chaque tournoi permet aux équipes de
                        gagner des points en fonction de leurs performances. À la fin de la saison régulière, les
                        équipes avec le plus de points se qualifient pour le championnat de France (CDF).
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 gap-2">
                            <h3 className="text-xl font-bold mb-4 text-primary">LGL150</h3>
                            <p className="text- text-white">
                                De 4 à 7 équipes <br />
                            </p>
                            <ul className="text-gray-400 mb-4 list-none">
                                Distribution des points :
                                <li>
                                    1<sup>er</sup> : 150 PTS
                                </li>
                                <li>
                                    2<sup>e</sup> : 75 PTS
                                </li>
                                <li>
                                    3<sup>e</sup> : 50 PTS
                                </li>
                                <li>
                                    4<sup>e</sup>+ : 25 PTS
                                </li>
                            </ul>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 gap-2">
                            <h3 className="text-xl font-bold mb-4 text-primary">LGL250</h3>
                            <p className="text- text-white">
                                De 8 à 11 équipes <br />
                            </p>
                            <ul className="text-gray-400 mb-4 list-none">
                                Distribution des points :
                                <li>
                                    1<sup>er</sup> : 250 PTS
                                </li>
                                <li>
                                    2<sup>e</sup> : 150 PTS
                                </li>
                                <li>
                                    3<sup>e</sup> : 75 PTS
                                </li>
                                <li>
                                    4<sup>e</sup> : 50 PTS
                                </li>
                                <li>
                                    5<sup>e</sup>+ : 25 PTS
                                </li>
                            </ul>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 gap-2">
                            <h3 className="text-xl font-bold mb-4 text-primary">LGL500</h3>
                            <p className="text- text-white">
                                12 équipes et + <br />
                            </p>
                            <ul className="text-gray-400 mb-4 list-none">
                                Distribution des points :
                                <li>
                                    1<sup>er</sup> : 500 PTS
                                </li>
                                <li>
                                    2<sup>e</sup> : 250 PTS
                                </li>
                                <li>
                                    3<sup>e</sup> : 150 PTS
                                </li>
                                <li>
                                    4<sup>e</sup> : 75 PTS
                                </li>
                                <li>
                                    5<sup>e</sup> : 50 PTS
                                </li>
                                <li>
                                    6<sup>e</sup>+ : 25 PTS
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Button
                        size="lg"
                        onClick={() => navigate("/teams")}
                        className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto items-center flex mt-8">
                        Rencontrez nos joueurs
                    </Button>
                </div>
            </section>
        </div>
    );
}
