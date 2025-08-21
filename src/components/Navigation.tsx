import { useState } from "react";
import { Button } from "./ui/button";
import clashLogo from "../assets/clash-logo.png";
import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { path: "/", label: "Accueil" },
        { path: "/sport", label: "La Discipline" },
        { path: "/club", label: "Notre Club" },
        { path: "/teams", label: "Équipes & Joueurs" },
        { path: "/sponsors", label: "Sponsors" },
        { path: "/socials", label: "Nos réseaux" },
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
        setMenuOpen(false); // fermer le menu après clic
    };

    return (
        <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-black border-b border-primary/20 header bg-primary-foreground/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src={clashLogo} alt="CLASH Logo" className="h-10 w-10 object-contain logo" />
                    <span className="text-xl font-bold text-primary logo-title">CLASH</span>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition-all duration-300 hover:!no-underline ${
                                    isActive
                                        ? "bg-primary text-black hover:bg-primary/90 px-4 py-2 rounded-lg"
                                        : "text-white hover:text-primary hover:bg-white/10 px-4 py-2 rounded-lg"
                                }`
                            }>
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile menu */}
                <div className="md:hidden relative">
                    <Button variant="ghost" className="border-primary border-1" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu />
                    </Button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-black border border-primary/30 rounded shadow-lg flex flex-col">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    className="px-4 py-2 text-left text-white hover:bg-primary/20"
                                    onClick={() => handleNavigate(item.path)}>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
