import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SportPage } from "./components/SportPage";
import { ClubPage } from "./components/ClubPage";
import { TeamsPage } from "./components/TeamsPage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SocialsPage } from "./components/SocialsPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { PlayerProfilePage } from "./components/PlayerProfilePage";
import "./App.css";

// composant pour faire défiler vers le haut à chaque changement de route
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <Router>
            <div className="dark min-h-screen bg-background text-foreground">
                <ScrollToTop />
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sport" element={<SportPage />} />
                        <Route path="/club" element={<ClubPage />} />
                        <Route path="/teams" element={<TeamsPage />} />
                        <Route path="/sponsors" element={<SponsorsPage />} />
                        <Route path="/socials" element={<SocialsPage />} />

                        {/* route dynamique pour afficher un joueur */}
                        <Route path="/player/:id" element={<PlayerProfilePage />} />

                        {/* catch-all 404 */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
