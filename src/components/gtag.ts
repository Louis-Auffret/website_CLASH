// gtag.ts
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

/**
 * Envoie une pageview à Google Analytics
 * @param path Le chemin de la page à suivre
 * @param measurementId Ton ID GA4 (ex: G-XXXXXXX)
 */

export const initGA = (measurementId: string) => {
    if (window.gtag) {
        window.gtag("config", measurementId);
    }
};

export const pageview = (path: string, measurementId: string) => {
    if (window.gtag) {
        window.gtag("config", measurementId, {
            page_path: path,
        });
    }
};
