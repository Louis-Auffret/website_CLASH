import { Helmet } from "react-helmet";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    MicVocal,
    Instagram,
    Facebook,
    Music2,
    MessageSquare,
    ExternalLink,
    Play,
    Calendar,
    Eye,
    ThumbsUp,
    Share2,
    Newspaper,
    Video,
    Users,
} from "lucide-react";

import AjinTrophée from "../assets/AJIN_trophée.webp";
import BFMcover from "../assets/CLASH_CDF25.webp";

export function SocialsPage() {
    const navigate = useNavigate();
    const socialLinks = [
        // {
        //     name: "YouTube",
        //     handle: "@CLASHLaserTag",
        //     followers: "15.2K",
        //     icon: Youtube,
        //     color: "bg-red-600 hover:bg-red-700",
        //     url: "https://youtube.com/@clashlasertag",
        //     description: "Watch our tournament highlights, training videos, and player spotlights",
        // },
        {
            name: "Instagram",
            handle: "@asso_clash",
            followers: "8.7K",
            icon: Instagram,
            color: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
            url: "https://www.instagram.com/asso_clash/",
            description:
                "Images et vidéos sur le club et ses membres, il s'agit de notre plus grosse chaîne de contenus.",
        },
        // {
        //     name: "Twitch",
        //     handle: "CLASHLaserTag",
        //     followers: "5.1K",
        //     icon: Twitch,
        //     color: "bg-purple-600 hover:bg-purple-700",
        //     url: "https://twitch.tv/clashlasertag",
        //     description: "Live streams of tournaments and training sessions",
        // },
        {
            name: "Facebook",
            handle: "Club de Laser Associatif et Sportif Havrais",
            followers: "9.8K",
            icon: Facebook,
            color: "bg-blue-600 hover:bg-blue-700",
            url: "https://www.facebook.com/CLASHLGE/",
            description: "Score des équipes, annonces d'évènements et images du club !",
        },
        {
            name: "Tik Tok",
            handle: "asso_clash",
            followers: "12.4K",
            icon: Music2,
            color: "bg-pink-600 hover:bg-pink-700",
            url: "https://www.tiktok.com/@asso_clash?_t=ZN-8yofazsJETn&_r=1",
            description: "Vidéos de présentations du club et trucs et astuces pour s'améliorer dans notre discipline.",
        },
        {
            name: "Discord",
            handle: "CLASH",
            followers: "2.3K",
            icon: MessageSquare,
            color: "bg-indigo-600 hover:bg-indigo-700",
            url: "https://discord.gg/MHRNJyueSM",
            description:
                "Parfait pour échanger des stratégies et s'organiser avec son équipe ou tout simplement se retrouver en dehors des sessions de jeu.",
        },
        {
            name: "Discord",
            handle: "Ligues LGE",
            followers: "2.3K",
            icon: MessageSquare,
            color: "bg-indigo-600 hover:bg-indigo-700",
            url: "https://discord.gg/JXU5ZkxrKQ",
            description:
                "Discord des ligues LGE, pour les joueurs et les équipes et tous joueurs souhaitant s'inscrire dans une ligue ou une équipe près de chez soi.",
        },
    ];

    const featuredVideos = [
        {
            title: "Laser Game : une équipe du Havre prépare les championnats de France",
            thumbnail: "https://img.youtube.com/vi/lRXZq8snRc0/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=lRXZq8snRc0",
            altText: "Miniature de la vidéo de France 3 : Une équipe du Havre prépare les championnats de France",
            channel: "France 3",
            views: "3.3K",
            duration: "1:49",
            date: "11/19/2024",
            description:
                "Le laser game, vous connaissez ? Pour beaucoup, c'est un loisir… Mais pour les adhérents du Club de Laser game Associatif et Sportif Havrais, c'est une vraie discipline. L'une des 3 équipes du CLASH détient même le titre de vice-championne de France 2022.",
        },
        {
            title: "Nous avons défiés le champion de France de Laser Game",
            thumbnail: BFMcover,
            link: "https://www.facebook.com/lasergamelehavre/videos/-champion-de-france-et-sous-les-projecteurs-bfm-normandie-est-venu-interviewer-s/1262808381583012/",
            altText: "",
            channel: "BFM",
            views: "1.9K",
            duration: "3:15",
            date: "08/04/2025",
            description:
                "Nous avons affronté Sleaz, meilleur joueur de France et capitaine de la Team'Ajin, récente championne de France de Laser Game à domicile. Il nous présente sa discipline et nous as affronté lors d'un match.",
        },
    ];

    const newsArticles = [
        {
            title: "Au Havre, 5 choses à savoir sur les champions de France du laser game en compétition",
            source: "76 Actu",
            date: "09/17/2025",
            altText:
                "Couverture de l'article de 76 Actu : Au Havre, 5 choses à savoir sur les champions de France du laser game en compétition",
            excerpt:
                "On a rencontré l'équipe de laser game compétitif du Havre. Depuis juillet 2025, ils sont champions de France de leur discipline. Et justement, c'est quoi exactement le laser game ?",
            image: "https://static.actu.fr/uploads/2025/09/48530d76-02f6-4ff2-ac04-666511c1fc9c-960x640.jpg",
            link: "https://actu.fr/normandie/le-havre_76351/au-havre-5-choses-a-savoir-sur-les-champions-de-france-du-laser-game-en-competition_63164416.html",
            readTime: "3 min",
            category: "Club CLASH",
        },
        {
            title: "Laser game compétitif : l’équipe du Havre sacrée championne de France",
            source: "Paris Normandie",
            date: "08/05/2025",
            altText: "Couverture de l'article du Paris Normandie : CLASH l'équipe du Havre sacrée championne de France",
            excerpt:
                "L’association havraise Clash vient de décrocher le titre de champion de France de laser game compétitif à Angoulême. Une première pour cette association créée en 2016.",
            image: AjinTrophée,
            link: "https://www.paris-normandie.fr/id650248/article/2025-08-04/laser-game-competitif-lequipe-du-havre-sacree-championne-de-france",
            readTime: "2 min",
            category: "Championnat de France",
        },
        {
            title: "Une équipe du Havre remporte la coupe de France de Laser game",
            source: "Charente Libre",
            date: "07/13/2025",
            altText:
                "Couverture de l'article de Charente Libre : Une équipe du Havre remporte la coupe de France de Laser Game",
            excerpt:
                "Neuf équipes de toute la France se sont affrontées ce week-end à Laser Game Evolution, zone des Avenauds à Gond-Pontouvre, lors de la finale de la coupe de France de laser game.",
            image: "https://media.charentelibre.fr/25234954/1000x625/c15006ae-9065-4118-823e-cb0fa65884c9.jpg?v=1752425828",
            link: "https://www.charentelibre.fr/charente/gond-pontouvre/une-equipe-du-havre-remporte-la-coupe-de-france-de-laser-game-organiseeaux-avenauds-a-gond-pontouvre-25234954.php",
            readTime: "1 min",
            category: "Championnat de France",
        },
        {
            title: "Au Havre, un club de laser game vise les championnats de France",
            source: "76 Actu",
            date: "01/24/2017",
            altText:
                "Couverture de l'article de 76 Actu : Au Havre, un club de laser game vise les championnats de France",
            excerpt:
                "Au Havre (Seine-Maritime), le laser game est plus qu'un jeu, c'est un sport ! Le club Clash rassemble une quinzaine d'adeptes, rêvant d'atteindre les championnats de France.",
            image: "https://static.actu.fr/uploads/2017/01/DSCN1780.JPG",
            link: "https://actu.fr/normandie/le-havre_76351/au-havre-un-club-de-laser-game-vise-les-championnats-de-france_454476.html",
            readTime: "1 min",
            category: "Club CLASH",
        },
    ];

    const podcasts = [
        {
            title: "“Cette année elle est pour nous” : le Clash sacrés champions de France de Laser Game",
            source: "Ouest Track Radio",
            date: "08/27/2025",
            altText: "Couverture du podcast Ouest Track Radio : Cette année elle est pour nous",
            description:
                "Dans cet épisode, partez à la rencontre de l’équipe Le Clash, sacrée championne de France de Laser Game. Au programme : reportage exclusif avec le club des champions et immersion totale dans les labyrinthes où tout se joue.",
            image: "https://ouest-track.com/upload/podcasts/photos/main/68af3309e83df5.45237438.png?=1756326594",
            link: "https://ouest-track.com/podcasts/cette-annee-elle-est-pour-nous-le-clash-sacres-champions-de-france-de-laser-game-12913",
            duration: "13:39",
        },
        {
            title: "Objectif podium pour le CLASH : En route vers le championnat de France pour le club de laser game sportif Havrais",
            source: "Ouest Track Radio",
            date: "06/23/2025",
            altText: "Couverture du podcast Ouest Track Radio : Objectif podium pour le CLASH",
            description:
                "Un an après leur belle 4ᵉ place au championnat de France, le CLASH – Club de Laser Associatif et Sportif Havrais , revient dans nos studios avec une ambition claire : monter sur le podium lors du championnat de France en juillet !",
            image: "https://ouest-track.com/upload/podcasts/photos/main/685a797f9c77a3.91331442.png?=1755653049",
            link: "https://open.spotify.com/episode/7qWOGrYcgE2LZBq0gRyjme",
            duration: "22:14",
        },
        {
            title: "Le CLASH club de laser game du Havre 4ème aux championnats de France",
            source: "Ouest Track Radio",
            date: "07/29/2024",
            altText: "Couverture du podcast Ouest Track Radio : CLASH quatrième au championnat de France",
            description:
                "Sleaz et Fastyou sont venu présenter l'association du CLASH et les performance de leur équipe : les Ping'Win qui terminent 4ᵉ aux championnat de France pour la seconde année consécutive.",
            image: "https://ouest-track.com/upload/podcasts/photos/main/66a78ed36c5522.75685762.png?=1755652001",
            link: "https://open.spotify.com/episode/0fkSDTqk8LC8hxTr08rmEh",
            duration: "18:41",
        },
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>Nos Réseaux – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Suivez Asso-Clash sur nos réseaux sociaux et restez informés des tournois et événements de laser game au Havre."
                />
                <meta property="og:title" content="Nos Réseaux – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Restez connectés avec Asso-Clash sur les réseaux sociaux pour suivre toutes les actualités et événements de laser game."
                />
                <meta property="og:url" content="https://asso-clash.fr/socials" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Share2 className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        RÉSEAUX SOCIAUX
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Restez connecté avec le CLASH sur toutes les plateformes et découvrez ce que la communauté des
                        joueurs dit à notre sujet.
                    </p>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                        Suivez nous sur toutes les plateformes
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <Card
                                    key={index}
                                    className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-lg ${social.color} transition-all duration-300`}>
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        {/* <Badge
                                            variant="secondary"
                                            className="bg-primary/20 text-primary border-primary/30">
                                            {social.followers}
                                        </Badge> */}
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
                                        <p className="text-primary font-mono text-sm">{social.handle}</p>
                                        <p className="text-gray-400 text-sm mt-2">{social.description}</p>
                                    </div>

                                    <Button
                                        className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 mt-auto"
                                        onClick={() => window.open(social.url, "_blank")}>
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Nous suivre
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Videos Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-center mb-12">
                        <Video className="h-8 w-8 text-primary mr-3" />
                        <h2 className="text-4xl font-bold text-primary">Vidéos à la une</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredVideos.map((video, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                                <div className="relative">
                                    <ImageWithFallback
                                        src={video.thumbnail}
                                        alt={video.altText}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <a href={video.link} target="_blank">
                                            <div className="bg-primary/90 hover:bg-primary w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110">
                                                <Play className="h-8 w-8 text-black ml-1" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="absolute bottom-2 right-2">
                                        <Badge className="bg-black/80 text-white">{video.duration}</Badge>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="text-primary">{video.channel}</span>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <Eye className="h-4 w-4 mr-1" />
                                                {video.views}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {new Date(video.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-3">{video.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3">
                            <Youtube className="h-5 w-5 mr-2" />
                            Voir toutes les vidéos
                        </Button>
                    </div> */}
                </div>
            </section>

            {/* News Articles Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-center mb-12">
                        <Newspaper className="h-8 w-8 text-primary mr-3" />
                        <h2 className="text-4xl font-bold text-primary">Dans les journaux</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {newsArticles.map((article, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                                <div className="relative h-48">
                                    <ImageWithFallback
                                        src={article.image}
                                        alt={article.altText}
                                        className="w-full h-full object-cover "
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    {/* <div className="absolute top-4 left-4">
                                        <Badge className="bg-primary/90 text-black">{article.category}</Badge>
                                    </div> */}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="text-primary font-medium">{article.source}</span>
                                        <span>{new Date(article.date).toLocaleDateString()}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3 line-clamp-3">{article.excerpt}</p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            Temps de lecture : {article.readTime}
                                        </span>
                                        <a href={article.link} target="_blank">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-primary hover:text-primary hover:bg-primary/10">
                                                Lire l'article
                                                <ExternalLink className="h-4 w-4 ml-1" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3">
                            <Newspaper className="h-5 w-5 mr-2" />
                            Voir tous les articles
                        </Button>
                    </div> */}
                </div>
            </section>

            {/* Podcast Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-center mb-12">
                        <MicVocal className="h-8 w-8 text-primary mr-3" />
                        <h2 className="text-4xl font-bold text-primary">À la radio</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {podcasts.map((podcast, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                                <div className="relative">
                                    <ImageWithFallback
                                        src={podcast.image}
                                        alt={podcast.altText}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <a href={podcast.link} target="_blank">
                                            <div className="bg-primary/90 hover:bg-primary w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110">
                                                <Play className="h-8 w-8 text-black ml-1" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="absolute bottom-2 right-2">
                                        <Badge className="bg-black/80 text-white">{podcast.duration}</Badge>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="text-primary font-medium">{podcast.source}</span>
                                        <span>{new Date(podcast.date).toLocaleDateString()}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 transition-colors line-clamp-2">
                                        {podcast.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3 line-clamp-3">
                                        {podcast.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3">
                            <Newspaper className="h-5 w-5 mr-2" />
                            Voir tous les podcats
                        </Button>
                    </div> */}
                </div>
            </section>

            {/* Community Stats */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl flex flex-col">
                    <h2 className="text-4xl font-bold text-center text-white">
                        Notre <span className="text-primary">Communauté</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">400+</div>
                            <p className="text-gray-400">Total d'abonnés</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Video className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                            <p className="text-gray-400">Vidéos vues</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ThumbsUp className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                            <p className="text-gray-400">Likes & Réactions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Share2 className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">1K+</div>
                            <p className="text-gray-400">Partages et reposts</p>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="min-w-100 bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        Vous souhaitez nous contacter
                    </Button>
                </div>
            </section>
        </div>
    );
}
