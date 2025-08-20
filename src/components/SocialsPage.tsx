import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    Youtube,
    Twitter,
    Instagram,
    Facebook,
    Twitch,
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

export function SocialsPage() {
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
            description: "Scores des joueurs et des équipes, annonces d'événements et moments forts",
        },
        // {
        //     name: "Twitter",
        //     handle: "@CLASHLaserTag",
        //     followers: "12.4K",
        //     icon: Twitter,
        //     color: "bg-blue-500 hover:bg-blue-600",
        //     url: "https://twitter.com/clashlasertag",
        //     description: "Live tournament updates, news, and community discussions",
        // },
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
            description: "Community updates, event announcements, and photo galleries",
        },
        {
            name: "Discord",
            handle: "CLASH",
            followers: "2.3K",
            icon: MessageSquare,
            color: "bg-indigo-600 hover:bg-indigo-700",
            url: "https://discord.gg/clashlasertag",
            description:
                "Parfait pour échanger des stratégies et s'organiser avec son équipe ou tout simplement se retrouver en dehors des sessions de jeu.",
        },
        {
            name: "Discord",
            handle: "Ligues LGE",
            followers: "2.3K",
            icon: MessageSquare,
            color: "bg-indigo-600 hover:bg-indigo-700",
            url: "https://discord.gg/clashlasertag",
            description:
                "Discord des ligues LGE, pour les joueurs et les équipes et tous joueurs souhaitant s'inscrire dans une ligue/équipe",
        },
    ];

    const featuredVideos = [
        {
            title: "CLASH Championship Finals 2023 - Epic Showdown",
            thumbnail:
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGdhbWUlMjBhcmVuYXxlbnwxfHx8fDE3NTUzNDY1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
            channel: "Esports Central",
            views: "127K",
            duration: "18:42",
            date: "2023-12-15",
            description: "Complete coverage of our championship match against regional rivals",
        },
        {
            title: "Inside CLASH: Training Like Champions",
            thumbnail:
                "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NTM0NjUwNHww&ixlib=rb-4.1.0&q=80&w=1080",
            channel: "Sports Documentary",
            views: "89K",
            duration: "25:17",
            date: "2023-11-08",
            description: "Documentary exploring our training methods and team culture",
        },
        {
            title: "Player Spotlight: Phoenix Rising Star",
            thumbnail:
                "https://images.unsplash.com/photo-1594736797933-d0401ba0ad45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwbGF5ZXJ8ZW58MXx8fHwxNzU1MzQ2NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            channel: "Player Profiles",
            views: "45K",
            duration: "12:34",
            date: "2023-10-22",
            description: "In-depth interview with our star player Phoenix about their journey",
        },
        {
            title: "CLASH Arena Tour: State-of-the-Art Facilities",
            thumbnail:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJlbmF8ZW58MXx8fHwxNzU1MzQ2NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
            channel: "Tech Tours",
            views: "73K",
            duration: "15:28",
            date: "2023-09-14",
            description: "Complete walkthrough of our advanced training facilities and technology",
        },
    ];

    const newsArticles = [
        {
            title: "CLASH Dominates Regional Championships with Innovative Strategy",
            source: "Esports Today",
            date: "2023-12-20",
            excerpt:
                "The laser tag club's revolutionary approach to team coordination led them to a decisive victory in the regional championships, setting new standards for competitive play.",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGlvbnNoaXAlMjB0cm9waHl8ZW58MXx8fHwxNzU1MzQ2NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
            readTime: "5 min read",
            category: "Championship",
        },
        {
            title: "The Rise of Competitive Laser Tag: How CLASH is Leading the Revolution",
            source: "Gaming Weekly",
            date: "2023-11-15",
            excerpt:
                "An in-depth look at how CLASH has transformed from a local club to a national powerhouse, pioneering the evolution of laser tag as a legitimate esport.",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdGVhbXxlbnwxfHx8fDE3NTUzNDY1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            readTime: "8 min read",
            category: "Industry",
        },
        {
            title: "Technology Meets Sport: CLASH's State-of-the-Art Training Facility",
            source: "Tech Sports Magazine",
            date: "2023-10-28",
            excerpt:
                "Exclusive coverage of CLASH's new training center, featuring cutting-edge laser tag technology and analytics systems that are revolutionizing player development.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU1MzQ2NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
            readTime: "6 min read",
            category: "Technology",
        },
        {
            title: "Community Impact: CLASH's Youth Development Program",
            source: "Local Sports Network",
            date: "2023-09-30",
            excerpt:
                "How CLASH is giving back to the community through their youth development program, introducing young players to competitive laser tag and building future champions.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0c3xlbnwxfHx8fDE3NTUzNDY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            readTime: "4 min read",
            category: "Community",
        },
    ];

    return (
        <div className="pt-20">
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
                                        <Badge
                                            variant="secondary"
                                            className="bg-primary/20 text-primary border-primary/30">
                                            {social.followers}
                                        </Badge>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
                                        <p className="text-primary font-mono text-sm">{social.handle}</p>
                                        <p className="text-gray-400 text-sm mt-2">{social.description}</p>
                                    </div>

                                    <Button
                                        className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
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
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-primary/90 hover:bg-primary w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110">
                                            <Play className="h-8 w-8 text-black ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2">
                                        <Badge className="bg-black/80 text-white">{video.duration}</Badge>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                                    <p className="text-gray-400 text-sm mb-3">{video.description}</p>

                                    <div className="flex items-center justify-between text-sm text-gray-500">
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
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3">
                            <Youtube className="h-5 w-5 mr-2" />
                            Voir toutes les vidéos
                        </Button>
                    </div>
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
                                className="bg-card border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                                <div className="relative h-48">
                                    <ImageWithFallback
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-primary/90 text-black">{article.category}</Badge>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="text-primary font-medium">{article.source}</span>
                                        <span>{new Date(article.date).toLocaleDateString()}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{article.readTime}</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-primary hover:text-primary hover:bg-primary/10">
                                            Read More
                                            <ExternalLink className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3">
                            <Newspaper className="h-5 w-5 mr-2" />
                            Voir tous les articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* Community Stats */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        Notre <span className="text-primary">Communauté</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">53.5K</div>
                            <p className="text-gray-400">Total d'abonnés</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Video className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">2.1M</div>
                            <p className="text-gray-400">Vidéos vues</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ThumbsUp className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">847K</div>
                            <p className="text-gray-400">Likes & Réactions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Share2 className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">156K</div>
                            <p className="text-gray-400">Partages et reposts</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
