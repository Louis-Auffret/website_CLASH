import { Helmet } from "react-helmet";
import { useState } from "react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    Trophy,
    Users,
    Calendar,
    MapPin,
    Target,
    Star,
    UserPlus,
    Mail,
    Phone,
    GamepadIcon,
    Shirt,
    RotateCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import clubLogo from "../assets/Cover.webp";
import jersey19Front from "../assets/jerseys/jersey_2019_front.webp";
import jersey19Back from "../assets/jerseys/jersey_2019_back.webp";
import jersey25Front from "../assets/jerseys/jersey_2025_front.webp";
import jersey25Back from "../assets/jerseys/jersey_2025_back.webp";
import jerseyAjinFront from "../assets/jerseys/jersey_ajin_front.webp";
import jerseyAjinBack from "../assets/jerseys/jersey_ajin_back.webp";
import jerseyPingwinFront from "../assets/jerseys/jersey_pingwin_front.webp";
import jerseyPingwinBack from "../assets/jerseys/jersey_pingwin_back.webp";
import gifAjin from "../assets/Stats_CDF_1 Compressed.gif";

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

    const [flippedJerseys, setFlippedJerseys] = useState<{ [key: number]: boolean }>({});

    const jerseys = [
        {
            id: 1,
            name: "CLASH V2",
            season: "Saison 2019",
            description: "Couleurs officielles du club, avec le vert CLASH caractéristique sur fond noir.",
            frontImage: jersey19Front,
            backImage: jersey19Back,
            features: [
                "Reprise de l'identité générale du maillot V1",
                "Logo CLASH en pleine poitrine",
                "Personnalisation du numéro du joueur",
            ],
        },
        {
            id: 2,
            name: "PING'WIN V1",
            season: "Saison 2022",
            description: "Édition originale pour notre équipe Ping'Win, premier maillot officiel d'une équipe du club.",
            frontImage: jerseyPingwinFront,
            backImage: jerseyPingwinBack,
            features: [
                "Changement radical d'identité visuelle",
                "Motif banquise pour le thème d'équipe",
                "Logo de la ligue en fond de motif",
            ],
        },
        {
            id: 3,
            name: "TEAM'AJIN V1",
            season: "Saison 2024",
            description: "Jersey compétitif de notre équipe championne de France 2025. Aux couleurs du club.",
            frontImage: jerseyAjinFront,
            backImage: jerseyAjinBack,
            features: [
                "Premier maillot intégrant le pseudo sur la manche",
                "Liste des joueurs historique de l'équipe",
                "Mélange d'identités entre l'équipe et le club",
            ],
        },
        {
            id: 4,
            name: "CLASH V3",
            season: "Saison 2025",
            description: "Design épuré plus sobre pour laisser la place à nos premiers partenaires et sponsors.",
            frontImage: jersey25Front,
            backImage: jersey25Back,
            features: [
                "Nouvelle identité visuelle épurée",
                "Plus de place pour les sponsors",
                "Usage des manches pour les informations",
            ],
        },
    ];

    const toggleJerseyFlip = (id: number) => {
        setFlippedJerseys((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="pt-20">
            <Helmet>
                <title>Le Club – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Asso-Clash, le club de laser game au Havre : une équipe passionnée, des entraînements réguliers et des compétitions locales et nationales."
                />
                <meta property="og:title" content="Le Club – Laser Game Evolution Le Havre | CLASH" />
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
                        Le Club de Laser Game au Havre
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        l'Asso CLASH est un club associatif dédié au laser game au Havre. Notre équipe passionnée
                        organise des entraînements réguliers et participe à des tournois locaux et nationaux. Rejoignez
                        notre club pour partager votre passion du laser game evolution autour de vous.
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
                                Fondé en 2016, le CLASH <i>–&nbsp;Club de Laser Associatif et Sportif Havrais&nbsp;–</i>{" "}
                                est un des clubs les plus expérimentés et prestigieux. Actuel champion de France, le
                                club à pour objectif de former les meileurs joueurs et joueuses compétitifs. Notre
                                expérience et nos joueurs vétérans constituent l’environnement idéal pour que des
                                nouveaux joueurs développent leurs compétences et concourent au plus haut niveau.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Nous pensons que le Laser Game est plus qu’un simple jeu : c’est une discipline qui
                                développe le caractère, l’esprit d’équipe, la réflexion stratégique et les réflexes.
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

                    <div className="grid md:grid-cols-2 gap-8 pb-8">
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

                    <img
                        src={gifAjin}
                        alt="Animation des statistiques des joueurs de la Team'AJIN au Championnat de France 2025"
                        className=" w-auto  left-1/2 rounded-xl"
                    />
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
                            La saison d’entraînement s’étend de septembre à juin. Pendant la période de Juillet à Août,
                            l’association assure des sessions d’entraînement et de recrutement. À titre indicatif, les
                            tarifs appliqués sont définis par{" "}
                            <a href="https://lasergame-entreprise.com/">Laser Game Entreprise®</a>.
                        </p>
                        <p className="text-xl text-gray-300 pb-6">
                            Cependant, grâce au soutien de nos sponsors,{" "}
                            <span className="text-primary">le club prend en charge une grande partie de ces frais</span>
                            , afin de rendre la discipline accessible au plus grand nombre. Une participation est
                            toutefois demandée pour couvrir certaines dépenses. Ces frais complémentaires varient d’une
                            saison à l’autre en fonction des financements obtenus et du nombre de joueurs inscrits.
                        </p>
                        <p className="text-xl text-gray-300">
                            Pour plus d’informations sur les tarifs et les conditions d’adhésion ou si vous souhaitez
                            rejoindre le CLASH, n’hésitez pas à nous <a href="./contact">contacter</a> pour plus
                            d’informations.
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
                                    <p className="text-gray-300">Possibilité de payer au trimestre</p>
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
                                    <p className="text-gray-300">
                                        Ambiance loisir&nbsp;: jeux, exercices et matchs mixés
                                    </p>
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
                                    <p className="text-gray-300">Engagement à l’année</p>
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
                                        Ambiance compétitive&nbsp;: exercices, matchs d'équipes, stratégies avancées
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
                            <h3 className="text-xl font-bold mb-4 text-primary">Loisir</h3>
                            <p className="text-gray-400 mb-4">
                                Pour les joueurs moins expérimentés, le club propose un créneau le lundi soir encadré
                                par les pros, entraîneurs du club. L’objectif est de découvrir la discipline et ses
                                règles, pour ensuite devenir un pro et rejoindre le créneau du dimanche.
                            </p>
                            <div className="text-sm text-primary">Lundi 18h-21h</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Pros</h3>
                            <p className="text-gray-400 mb-4">
                                Pour tout les joueurs suffisament expérimentés pour jouer en compétition, le club
                                propose un créneau le dimanche soir. Les pros peuvent venir s’entraîner librement sur le
                                créneau du lundi soir dans un cadre plus détendu.
                            </p>
                            <div className="text-sm text-primary">Dimanche 18h-21h + Lundi 18h-21h</div>
                        </Card>
                    </div>
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
                                Peut-on venir essayer un entraînement avant de s’inscrire ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Ouis bien sûr, nous organisons des sessions d’essais en Juillet Auût. Mais si vous
                                souhaitez venir essayer, vous pouvez nous{" "}
                                <a href="./contact" className="text-primary underline">
                                    contacter
                                </a>{" "}
                                à tout moment. Nous serons ravis de vous accueillir pour une session d’essai afin que
                                vous puissiez découvrir l’ambiance du club et l’entraînement proposé.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Comment puis-je rejoindre le club ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Si vous souhaitez rejoindre le CLASH, vous pouvez nous contacter via notre page{" "}
                                <a href="./contact" className="text-primary underline">
                                    contact
                                </a>
                                . Nous organiserons une session d’essai pour vous permettre de découvrir le club et son
                                ambiance. En fonction de votre niveau, nous vous orienterons vers le créneau
                                d’entraînement le plus adapté à vos besoins et objectifs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Si je ne vis pas au Havre, puis-je quand même participer à la compétition ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Bien sûr ! De nombreux joueurs de laser game compétitif ne vivent pas dans la même ville
                                que leur club. Cependant, il est important de pouvoir assister régulièrement aux
                                entraînements et aux compétitions. Si vous êtes motivé et prêt à vous déplacer pour les
                                événements importants, vous pouvez tout à fait rejoindre une équipe même si vous ne
                                résidez pas au Havre. Pour rejoindre une équipe d’un centre laser game, renseignez vous
                                auprès du centre le plus proche de chez vous pour savoir s’il acceuille une équipe
                                compétitive.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Comment payer ma cotisation ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Que ce soit pour le loisir ou la compétition, si vous souhaitez rejoindre le CLASH, ne
                                payez pas directement votre cotisation au centre. Notre association fait tout pour
                                réduire le coût de la cotisation pour nos membres grâce au soutien de nos sponsors.
                                C’est notre association qui paie les cotisations, vous n’aurez donc qu’à faire un
                                virement à l’association du montant réduit offert par nos soins. Ce montant comprend
                                également les frais de compétitions pour les joueurs compétitifs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-5"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Puis-je choisir mon équipe ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Si vous souhaitez rejoindre le CLASH en tant que joueur compétitif, vous ne pouvez pas
                                choisir votre équipe. En effet, les équipes sont formées en début de saison, vous serez
                                donc intégré à une équipe en fonction de votre niveau et de vos disponibilités.
                                Cependant, si vous avez des préférences ou des contraintes particulières, n’hésitez pas
                                à en discuter avec nous lors de votre session d’essai.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-6"
                            className="bg-card border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-primary">
                                Quelles sont les valeurs du club ?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pt-4">
                                Le CLASH porte ses valeurs depuis sa création. Nous valorisons l’évolution globale de
                                nos joueurs. Ainsi, chaque saison, nous mélangeons nos équipes pour favoriser
                                l’entraide, le partage de compétences et la cohésion entre tous les membres du club.
                                Cela permet à chacun de progresser en bénéficiant de l’expérience des autres joueurs.
                                Nous structurons nos équipes en fonction des affinités et en distribuant équitablement
                                le niveau de jeu.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Jersey Collection Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            {/* <Shirt className="h-10 w-10 text-primary" /> */}
                            <h2 className="text-4xl font-bold text-primary">Vitrine des maillots</h2>
                        </div>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Explorer nos maillots officiels à travers nos saisons - Cliquez sur un maillot pour voir le
                            dos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {jerseys.map((jersey) => (
                            <Card
                                key={jersey.id}
                                className="bg-card border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                                {/* Jersey Image Container */}
                                <div
                                    className="relative aspect-[3/4] cursor-pointer overflow-hidden bg-secondary/50"
                                    onClick={() => toggleJerseyFlip(jersey.id)}>
                                    {/* Front/Back Images with flip animation */}
                                    <div
                                        className={`absolute inset-0 transition-all duration-500 ${
                                            flippedJerseys[jersey.id] ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                        }`}>
                                        <ImageWithFallback
                                            src={jersey.frontImage}
                                            alt={`${jersey.name} Front`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-bold">AVANT</span>
                                                <RotateCcw className="h-5 w-5 text-primary " />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`absolute inset-0 transition-all duration-500 ${
                                            flippedJerseys[jersey.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                        }`}>
                                        <ImageWithFallback
                                            src={jersey.backImage}
                                            alt={`${jersey.name} Back`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-bold">DOS</span>
                                                <RotateCcw className="h-5 w-5 text-primary " />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />

                                    {/* Click instruction */}
                                    <div className="absolute top-4 right-4 bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                        CLIQUEZ POUR TOURNER
                                    </div>
                                </div>

                                {/* Jersey Details */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-1">{jersey.name}</h3>
                                            <p className="text-sm text-gray-400">{jersey.season}</p>
                                        </div>
                                        {jersey.name === "CLASH V3" && (
                                            <div className="bg-primary/20 px-2 py-1 rounded border border-primary/40">
                                                <Star className="h-4 w-4 text-primary fill-current" />
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-300 text-sm mb-4">{jersey.description}</p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {jersey.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                                <span className="text-gray-400 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                {/* <div className="px-6 pb-6">
                                    <Button
                                        variant="outline"
                                        className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                        onClick={() => toggleJerseyFlip(jersey.id)}>
                                        <RotateCcw className="h-4 w-4 mr-2" />
                                        {flippedJerseys[jersey.id] ? "VOIR AVANT" : "VOIR DOS"}
                                    </Button>
                                </div> */}
                            </Card>
                        ))}
                    </div>

                    {/* Jersey Info Footer */}
                    <div className="mt-12 text-center">
                        <Card className="bg-card/50 border-primary/20 p-6 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                                <div className="text-center">
                                    <Shirt className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <h4 className="font-bold text-white mb-1">Qualité premium</h4>
                                    <p className="text-gray-400 text-sm">Réalisé par des professionnels</p>
                                </div>
                                <div className="text-center">
                                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <h4 className="font-bold text-white mb-1">Design personnalisé</h4>
                                    <p className="text-gray-400 text-sm">Style unique du CLASH</p>
                                </div>
                                <div className="text-center">
                                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <h4 className="font-bold text-white mb-1">Exclusivité membres</h4>
                                    <p className="text-gray-400 text-sm">Disponible pour les membres du club</p>
                                </div>
                            </div>
                        </Card>
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
                        Offrir une expérience de Laser Game compétitive de classe nationale qui développe des athlètes,
                        forge le caractère et crée des souvenirs inoubliables. Nous nous efforçons d’être la destination
                        de choix pour les joueurs passionnés de Laser Game souhaitant se mesurer aux meilleurs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 my-12">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Excellence</h4>
                            <p className="text-gray-400">Viser le sommet en matière d’entraînement et de compétition</p>
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
                                Atteindre la victoire grâce au dévouement et au travail d’équipe
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
