// AnalyticsTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, pageview } from "./gtag";

interface AnalyticsTrackerProps {
    measurementId: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ measurementId }) => {
    const location = useLocation();

    useEffect(() => {
        // Initialisation une seule fois au chargement
        initGA(measurementId);
    }, [measurementId]);

    useEffect(() => {
        // Pageview à chaque changement de route
        pageview(location.pathname, measurementId);
    }, [location, measurementId]);

    return null; // ne rend rien à l’écran
};

export default AnalyticsTracker;
