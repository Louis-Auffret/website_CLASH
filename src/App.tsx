import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SportPage } from "./components/SportPage";
import { ClubPage } from "./components/ClubPage";
import { TeamsPage } from "./components/TeamsPage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SocialsPage } from "./components/SocialsPage";
import { ContactPage } from "./components/ContactPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { PlayerProfilePage } from "./components/PlayerProfilePage";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

const MEASUREMENT_ID = "G-SBF55VW119";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// Wrapper pour utiliser useNavigate dans App
function TeamsPageWrapper() {
    const navigate = useNavigate();

    const handlePlayerSelect = (playerId: string) => {
        navigate(`/player/${playerId}`);
    };

    return <TeamsPage onPlayerSelect={handlePlayerSelect} />;
}

export default function App() {
    const [players, setPlayers] = useState<any[]>([]);

    // Appel à ton backend OVH
    useEffect(() => {
        fetch("https://asso-clash.fr/backend/api.php")
            .then((res) => res.json())
            .then((data) => setPlayers(data))
            .catch((err) => console.error("Erreur fetch:", err));
    }, []);
    return (
        <Router>
            <AnalyticsTracker measurementId={MEASUREMENT_ID} />
            <div className="dark min-h-screen bg-background text-foreground">
                <ScrollToTop />
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/laser-game" element={<SportPage />} />
                        <Route path="/club" element={<ClubPage />} />
                        <Route path="/teams" element={<TeamsPageWrapper />} />
                        <Route path="/player/:id" element={<PlayerProfilePage />} />
                        <Route path="/sponsors" element={<SponsorsPage />} />
                        <Route path="/socials" element={<SocialsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
