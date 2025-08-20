import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Home, Users, Trophy, Target, Zap, AlertTriangle, ArrowLeft, Search, RefreshCw } from "lucide-react";

interface NotFoundPageProps {
    onPageChange: (page: string) => void;
}

export function NotFoundPage({ onPageChange }: NotFoundPageProps) {
    const quickLinks = [
        { id: "home", label: "Page d'accueil", icon: Home, description: "Retournez sur la page d'accueil" },
        { id: "teams", label: "Équipes & Joueurs", icon: Users, description: "Découvrez nos équipes" },
        { id: "sport", label: "La Discipline", icon: Target, description: "Aprenez en plus sur le Laser Game" },
        { id: "club", label: "Notre Club", icon: Trophy, description: "Découvrez notre club" },
    ];

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                {/* Main 404 Section */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl" />
                    <div className="relative z-10">
                        {/* Glitch-style 404 */}
                        <div className="mb-8">
                            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent relative">
                                4<span className="animate-pulse">0</span>4
                                <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-primary/20 -translate-x-1 translate-y-1 -z-10">
                                    404
                                </div>
                            </div>
                        </div>

                        {/* Gaming-themed error message */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center justify-center space-x-3">
                                <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">
                                    TARGET <span className="text-primary">NOT FOUND</span>
                                </h1>
                                <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
                            </div>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                On dirait que cette page a disparu ! Nous ne parvenons pas à localiser la cible que vous
                                recherchez.
                            </p>

                            <div className="flex items-center justify-center space-x-2 text-primary">
                                <Zap className="h-5 w-5" />
                                <span className="font-mono text-sm">ERROR_CODE: PAGE_ELIMINATED</span>
                                <Zap className="h-5 w-5" />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                onClick={() => onPageChange("home")}
                                className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                                <Home className="h-5 w-5 mr-2" />
                                Return to Base
                            </Button>

                            <Button
                                onClick={() => window.history.back()}
                                variant="outline"
                                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 text-lg transition-all duration-300">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                Go Back
                            </Button>

                            <Button
                                onClick={handleRefresh}
                                variant="outline"
                                className="border-primary/30 text-gray-300 hover:text-primary hover:border-primary/50 px-8 py-3 text-lg transition-all duration-300">
                                <RefreshCw className="h-5 w-5 mr-2" />
                                Retry Scan
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
                        <Search className="h-6 w-6 text-primary mr-3" />
                        Navigate to Target Zone
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <Card
                                    key={link.id}
                                    className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                                    onClick={() => onPageChange(link.id)}>
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

                {/* Gaming-themed illustration */}
                <div className="relative">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1566207474742-de921626ad0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzU1MzQ2ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Futuristic Gaming Arena"
                        className="w-full max-w-md mx-auto h-48 object-cover rounded-lg border border-primary/20 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end justify-center p-6">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-1">Perdu dans le labyrinthe ?</h3>
                            <p className="text-gray-300 text-sm">
                                Pas de souci, même les champions se perdent parfois.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fun stats */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">404</div>
                            <div className="text-sm text-gray-400">Code d'erreur</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">0</div>
                            <div className="text-sm text-gray-400">Cibles touchées</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">∞</div>
                            <div className="text-sm text-gray-400">Retour en arrière</div>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm mt-6">
                        Ne te laisse pas décourager, champion. Tous les joueurs d'élite rencontrent des obstacles.
                    </p>
                </div>
            </div>
        </div>
    );
}
