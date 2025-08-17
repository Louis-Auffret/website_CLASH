import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SportPage } from "./components/SportPage";
import { ClubPage } from "./components/ClubPage";
import { TeamsPage } from "./components/TeamsPage";
import { SponsorsPage } from "./components/SponsorsPage";
// import { PlayerProfilePage } from "./components/PlayerProfilePage";
import "./App.css";

// fonction pour faire défiler vers le haut à chaque changement de page
function ScrollToTop({ currentPage }: { currentPage: string }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return null;
}

export default function App() {
    const [currentPage, setCurrentPage] = useState("home");
    // const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
        // setSelectedPlayerId(null); // Clear player selection when changing pages
    };

    // const handlePlayerSelect = (playerId: string) => {
    //     setSelectedPlayerId(playerId);
    //     setCurrentPage("player-profile");
    // };

    // const handleBackFromPlayer = () => {
    //     setSelectedPlayerId(null);
    //     setCurrentPage("teams");
    // };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <HomePage onPageChange={handlePageChange} />;
            case "sport":
                return <SportPage />;
            case "club":
                return <ClubPage />;
            case "teams":
                return <TeamsPage />;
            case "sponsors":
                return <SponsorsPage />;
            default:
                return <HomePage onPageChange={handlePageChange} />;
        }
    };

    return (
        <div className="dark min-h-screen bg-background text-foreground">
            <ScrollToTop currentPage={currentPage} />
            <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
            <main>{renderPage()}</main>
        </div>
    );
}
