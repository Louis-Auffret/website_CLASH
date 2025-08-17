import { Button } from "./ui/button";
import clashLogo from "../assets/clash-logo.png";

interface NavigationProps {
    currentPage: string;
    onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
    const navItems = [
        { id: "home", label: "Accueil" },
        { id: "sport", label: "La Discipline" },
        { id: "club", label: "Notre Club" },
        { id: "teams", label: "Équipes & Joueurs" },
        { id: "sponsors", label: "Sponsors" },
    ];

    return (
        <nav
            className="fixed w-full top-0 left-0 right-0 z-500 bg-black border-b border-primary/20 header bg-primary-foreground/90 backdrop-blur-sm 
">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src={clashLogo} alt="CLASH Logo" className="h-10 w-10 object-contain logo" />
                    <span className="text-xl font-bold text-primary logo-title">CLASH</span>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            variant={currentPage === item.id ? "default" : "ghost"}
                            onClick={() => onPageChange(item.id)}
                            className={`
                ${
                    currentPage === item.id
                        ? "bg-primary text-black hover:bg-primary/90"
                        : "text-white hover:text-primary hover:bg-white/10"
                }
                transition-all duration-300
              `}>
                            {item.label}
                        </Button>
                    ))}
                </div>

                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        className="text-primary"
                        onClick={() => {
                            // Simple mobile menu toggle - for demo purposes
                            const nextPage =
                                navItems[(navItems.findIndex((item) => item.id === currentPage) + 1) % navItems.length];
                            onPageChange(nextPage.id);
                        }}>
                        Menu
                    </Button>
                </div>
            </div>
        </nav>
    );
}
