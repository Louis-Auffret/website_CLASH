import { Helmet } from "react-helmet";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Users, Calendar, MapPin, Target, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import clubLogo from "../assets/Cover.webp";

export function ClubPage() {
    const navigate = useNavigate();
    const achievements = [
        {
            year: "2025",
            title: "Champions de France",
            team: "Team'Ajin",
            description: "Championnat de France – Angoulême",
            star: 5,
        },
        {
            year: "2024",
            title: "Quatrième place CDF",
            team: "Ping'Win",
            description: "Championnat de France – Roanne",
            star: 3,
        },
        {
            year: "2023",
            title: "Quatrième place CDF",
            team: "Ping'Win",
            description: "Championnat de France – Le Mans",
            star: 3,
        },
        {
            year: "2022",
            title: "Vice-Champions de France",
            team: "Team'Ajin",
            description: "Championnat de France – Poitiers",
            star: 4,
        },
        {
            year: "2022",
            title: "Champions de ligue Nord",
            team: "Team'Ajin",
            description: "Championnat régionnal – Ligue Nord",
            star: 2,
        },
        {
            year: "2021",
            title: "Champions de ligue Ouest",
            team: "CLASH",
            description: "Championnat régionnal – Ligue Ouest",
            star: 2,
        },
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>Notre Club – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Asso-Clash, le club de laser game au Havre : une équipe passionnée, des entraînements réguliers et des compétitions locales et nationales."
                />
                <meta property="og:title" content="Notre Club – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Rejoignez Asso-Clash, le club de laser game au Havre, pour vivre l’expérience compétitive et associative !"
                />
                <meta property="og:url" content="https://asso-clash.fr/club" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        NOTRE CLUB
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Fondé en 2016, le CLASH –
                        <i className="text-gray-400"> Club de Laser Associatif et Sportif Havrais</i> – est un des clubs
                        les plus expérimentés et prestigieux dans le domaine. Actuel champion de France !
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
                                compétition. Notre expérience et nos joueurs vétérans constituent l'environnement idéal
                                pour que des nouveaux joueurs développent leurs compétences et concourent au plus haut
                                niveau.
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
                                        <h4 className="font-bold text-white">Classement</h4>
                                        <p className="text-gray-400">Champions de France</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Adresse</h4>
                                        <p className="text-gray-400">61 Rue de Fleurus, Le Havre</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                src={clubLogo}
                                alt="Illustration avec logo du club"
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
                                                {[...Array(achievement.star)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white">
                                            {achievement.title}{" "}
                                            <span className="font-extralight"> - {achievement.team}</span>
                                        </h3>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Budget Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl flex flex-col">
                    <div>
                        <h1 className="text-4xl font-bold mb-6 text-primary">Cotisations à l'année</h1>
                        {/* <p className="text-xl text-gray-300 pb-6">
                            La saison d’entraînement s’étend de septembre à juin. À titre indicatif, les tarifs
                            appliqués par la marque sont de 390 € pour la pratique loisir et de 590 € pour la pratique
                            compétition.
                        </p> */}
                        <p className="text-xl text-gray-300 pb-6">
                            La saison d’entraînement s’étend de septembre à juin. À titre indicatif, les tarifs
                            appliqués sont décidés par la marque Laser Game Entreprise®.
                        </p>
                        <p className="text-xl text-gray-300 pb-6">
                            Grâce au soutien de nos sponsors, le club prend en charge une grande partie de ces frais,
                            afin de rendre la discipline accessible au plus grand nombre. Une participation est
                            toutefois demandée pour couvrir certaines dépenses. Ces frais complémentaires varient d’une
                            saison à l’autre en fonction des financements obtenus et du nombre de joueurs inscrits.
                        </p>
                        <p className="text-xl text-gray-300">
                            Pour comprendre les montants demandés par la marque et leurs offres, référez-vous à leur
                            site internet. Si vous souhaitez rejoindre le CLASH, contactez-nous pour plus d'informations
                            sur les tarifs et les conditions d'adhésion.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 py-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">
                                Cotisation <span className="text-white">Loisir</span>
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Lundi soir 18h – 21h</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300"> Sans engagement</p>
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
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">
                                Cotisation <span className="text-white">Compétition</span>
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Dimanche soir 18h – 21h</p>
                                </div>
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
                                        Le club réclame également une participation financière : pour les déplacements,
                                        les maillots, la communication, les évènements, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="min-w-100 bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        Rejoignez notre club
                    </Button>
                </div>
            </section>

            {/* Slots Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos créneaux</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Pros</h3>
                            <p className="text-gray-400 mb-4">
                                Pour tout les joueurs suffisament expérimentés pour jouer en compétition, le club
                                propose un créneau le dimanche soir. Les pros peuvent venir s'entraîner librement sur le
                                créneau du lundi soir dans un cadre plus détendu.
                            </p>
                            <div className="text-sm text-primary">Dimanche 18h-21h + Lundi 18h-21h</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Loisir</h3>
                            <p className="text-gray-400 mb-4">
                                Pour les joueurs moins expérimentés, le club propose un créneau le lundi soir encadré
                                par les pros, entraîneurs du club. L'objectif est de découvrir la discipline et ses
                                règles, pour ensuite devenir un pro et rejoindre le créneau du dimanche.
                            </p>
                            <div className="text-sm text-primary">Lundi 18h-21h</div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Join Our Club Section */}

            {/* Mission Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Notre <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Offrir une expérience de Laser Game compétitive de classe nationale qui développe des athlètes,
                        forge le caractère et crée des souvenirs inoubliables. Nous nous efforçons d'être la destination
                        de choix pour les joueurs passionnés de Laser Game souhaitant se mesurer aux meilleurs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 my-12">
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
                    <Button
                        size="lg"
                        onClick={() => navigate("/sponsors")}
                        className="min-w-100 bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        Rencontrez nos sponsors
                    </Button>
                </div>
            </section>
        </div>
    );
}
