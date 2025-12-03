import { Helmet } from "react-helmet";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
    Home,
    Users,
    Trophy,
    Target,
    Zap,
    AlertTriangle,
    ArrowLeft,
    Search,
    RefreshCw,
    Share2,
    MessageSquare,
    Handshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate = useNavigate();

    const quickLinks = [
        { path: "/club", label: "Notre Club", icon: Trophy, description: "Découvrez notre club" },
        { path: "/sport", label: "La Discipline", icon: Target, description: "Apprenez en plus sur le Laser Game" },
        {
            path: "/teams",
            label: "Équipes & Joueurs",
            icon: Users,
            description: "Découvrez nos équipes et nos joueurs",
        },
        { path: "/sponsors", label: "Sponsors", icon: Handshake, description: "Découvrez nos partenaires" },
        { path: "/socials", label: "Nos Réseaux", icon: Share2, description: "Retrouvez nous sur nos réseaux" },
        { path: "/contact", label: "Contact", icon: MessageSquare, description: "Contactez-nous directement" },
    ];

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Page non trouvée – CLASH</title>
                <meta
                    name="description"
                    content="La page que vous recherchez n'existe pas sur le site CLASH, association de laser game au Havre."
                />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="container mx-auto px-4 max-w-4xl text-center">
                {/* Main 404 Section */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl" />
                    <div className="relative z-10">
                        {/* Glitch-style 404 */}
                        <div className="mb-8">
                            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent relative">
                                404
                                <div className="absolute inset-0 text-8xl animate-pulse blur-xs md:text-9xl font-bold text-primary/20 -translate-x-1 translate-y-1 -z-10">
                                    404
                                </div>
                            </div>
                        </div>

                        {/* Gaming-themed error message */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center justify-center space-x-3">
                                <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">
                                    CIBLE <span className="text-primary">INTROUVABLE</span>
                                </h1>
                                <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
                            </div>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Oups ! La page que vous cherchez n’existe pas. Revenez à la page d’accueil ou explorez
                                nos sections.
                            </p>

                            <div className="flex items-center justify-center space-x-2 text-primary">
                                <span className="font-mono text-sm">ERROR_CODE: 404_NOT_FOUND</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                onClick={() => navigate("/")}
                                className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                                <Home className="h-5 w-5 mr-2" />
                                Retournez au menu
                            </Button>

                            <Button
                                onClick={() => window.history.back()}
                                variant="outline"
                                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 text-lg transition-all duration-300">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                Retournez en arrière
                            </Button>

                            <Button
                                onClick={handleRefresh}
                                variant="outline"
                                className="border-primary/30 text-gray-300 hover:text-primary hover:border-primary/50 px-8 py-3 text-lg transition-all duration-300">
                                <RefreshCw className="h-5 w-5 mr-2" />
                                Réessayez
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
                        <Search className="h-6 w-6 text-primary mr-3" />
                        Naviguez vers la page cible :
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <Card
                                    key={link.path}
                                    className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                                    onClick={() => navigate(link.path)}>
                                    <div className="text-center">
                                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {link.label}
                                        </h3>
                                        <p className="text-gray-400 text-sm">{link.description}</p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
