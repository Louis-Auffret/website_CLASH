import { Helmet } from "react-helmet";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import {
    Handshake,
    Target,
    Users,
    Trophy,
    Zap,
    Star,
    Mail,
    Phone,
    LayoutTemplate,
    Download,
    ArrowDown,
    FileText,
    Euro,
    Briefcase,
    Building,
    MessageSquare,
    HelpCircle,
    Send,
    CheckCircle,
} from "lucide-react";
import sponsorPhoto from "../assets/TeamAjin_avec_sponsor_Laser_Game_Evolution_Le_Havre.webp";
import DossierSponsoring from "../assets/Dossier_sponsoring_CLASH.pdf";

export function SponsorsPage() {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState<string>("");
    const [isDossierExpanded, setIsDossierExpanded] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        website: "",
        inquiryType: "",
        sponsorshipTier: "",
        budget: "",
        message: "",
        howHeard: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // New state for the main sponsor/patron form
    const [sponsorFormData, setSponsorFormData] = useState({
        partnerType: "sponsor", // sponsor or patron
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        position: "",
        website: "",
        industry: "",
        contributionType: [] as string[], // financial, in-kind, services, equipment, etc.
        budgetRange: "",
        customBudget: "",
        partnershipDuration: "",
        specificInterests: [] as string[], // equipment, uniforms, events, etc.
        targetAudience: "",
        marketingGoals: "",
        brandValues: "",
        previousSponsorships: "",
        timeline: "",
        preferredContact: "",
        message: "",
        newsletter: false,
    });
    const [isSponsorFormSubmitting, setIsSponsorFormSubmitting] = useState(false);
    const [sponsorFormStatus, setSponsorFormStatus] = useState<"idle" | "success" | "error">("idle");

    const handleLearnMoreClick = (tierName: string) => {
        setSelectedTier(tierName);
        setFormData((prev) => ({ ...prev, sponsorshipTier: tierName }));
        setIsPopupOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitStatus("success");

        // Reset form after success
        setTimeout(() => {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                position: "",
                website: "",
                inquiryType: "",
                sponsorshipTier: "",
                budget: "",
                message: "",
                howHeard: "",
            });
            setSubmitStatus("idle");
            setIsPopupOpen(false);
        }, 3000);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Handlers for the main sponsor/patron form
    const handleSponsorFormChange = (field: string, value: string | string[] | boolean) => {
        setSponsorFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleContributionTypeToggle = (type: string) => {
        setSponsorFormData((prev) => ({
            ...prev,
            contributionType: prev.contributionType.includes(type)
                ? prev.contributionType.filter((t) => t !== type)
                : [...prev.contributionType, type],
        }));
    };

    const handleSpecificInterestsToggle = (interest: string) => {
        setSponsorFormData((prev) => ({
            ...prev,
            specificInterests: prev.specificInterests.includes(interest)
                ? prev.specificInterests.filter((i) => i !== interest)
                : [...prev.specificInterests, interest],
        }));
    };

    const handleSponsorFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSponsorFormSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSponsorFormSubmitting(false);
        setSponsorFormStatus("success");

        // Reset form after success
        setTimeout(() => {
            setSponsorFormData({
                partnerType: "sponsor",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                companyName: "",
                position: "",
                website: "",
                industry: "",
                contributionType: [],
                budgetRange: "",
                customBudget: "",
                partnershipDuration: "",
                specificInterests: [],
                targetAudience: "",
                marketingGoals: "",
                brandValues: "",
                previousSponsorships: "",
                timeline: "",
                preferredContact: "",
                message: "",
                newsletter: false,
            });
            setSponsorFormStatus("idle");
            // Scroll to top of form to show success message clearly
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
    };
    const sponsors = [
        {
            id: 1,
            name: "Laser Game Evolution Le Havre",
            tier: "Sponsor majeur",
            logo: "https://le-havre.lasergame-evolution.fr/wp-content/uploads/sites/145/2025/08/logo-CMJN-200x50-1.webp",
            description:
                "Le centre Laser Game Evolution du Havre nous accorde sa confiance depuis une décénie, et désormais il nous apporte également son soutien financier pour faire briller la renommée du Havre. Et conserver le titre de champion de France.",
            partnership: "2024 – 2026",
            contribution:
                "Financement des cotisations individuelles des joueurs compétitifs pour faciliter le recrutement.",
            website: "https://le-havre.lasergame-evolution.fr/",
        },
        {
            id: 2,
            name: "Intermarché SUPER Montivilliers",
            tier: "Mécène",
            logo: "https://www.intermarche.com/images/logoIntermarche.svg",
            description:
                "C'est au magasin Intermarché SUPER de Montivilliers que notre club se ravitaille pour la compétition depuis des années. De leurs côté, ils suivent nos aventures depuis plusieurs années, et nous apporte désormais son soutien financier pour faire briller la renommée du Havre.",
            partnership: "2025 – 2026",
            contribution:
                "Financement des cotisations individuelles des joueurs compétitifs pour faciliter le recrutement.",
            website:
                "https://www.intermarche.com/magasins/03358/montivilliers-76290/infos-pratiques?srsltid=AfmBOopJQYQp6D-bqh8817Uq4jirAppWqXbRHDGZdbKQOsYoEQ0UPN1e",
        },
        {
            id: 3,
            name: "Auregroup",
            tier: "Partenaire",
            logo: "https://www.auregroup.fr/uploads/utilisateurs/12806/68b3493577a68-logo-print-hd-transparent/320-68b3493577a68-logo-print-hd-transparent.png",
            description:
                "Auregroup, spécialiste de la détection incendie et notre club partagent les mêmes valeurs : protéger et anticiper. De cette vision commune est né un partenarait naturel, fondé sur la confiance et l'engagement. Merci pour son soutien.",
            partnership: "2025 – 2026",
            contribution:
                "Financement de la gestion administrative de l'association et de ses activités évènementielles.",
            website: "https://www.auregroup.fr/",
        },
    ];

    const sponsorshipTiers = [
        {
            name: "Sponsor majeur",
            // price: "4 000€",
            logo: "Poitrine",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Collaboration sur un contenu promotionnel",
                "Intervention des champions de France en entreprise",
                "Post de remerciement personnalisé sur nos réseaux",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
                "Logos sur les visuels de communication et nos prints",
                "Mention sur notre site web",
            ],
            featured: true,
        },
        {
            name: "Sponsor officiel",
            // price: "1 000€",
            logo: "Manche",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Intervention des champions de France en entreprise",
                "Post de remerciement personnalisé sur nos réseaux",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
                "Logos sur les visuels de communication et nos prints",
                "Mention sur notre site web",
            ],
            featured: false,
        },
        {
            name: "Partenaire",
            // price: "500€",
            logo: "Dos",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Post de remerciement collectif",
                "Logo sur les prints du club",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
                "Mention sur notre site web",
            ],
            featured: false,
        },
        {
            name: "Mécène",
            // price: "200€",
            logo: "-",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Post de remerciement collectif",
                "Logo sur les prints du club",
                "Mention sur notre site web",
            ],
            featured: false,
        },
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>Sponsors – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Découvrez les sponsors d’Asso-Clash, association de laser game au Havre, et nos partenaires qui soutiennent nos événements, compétitions et équipes."
                />
                <meta property="og:title" content="Sponsors – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Asso-Clash remercie ses sponsors pour leur soutien dans les compétitions et événements de laser game au Havre."
                />
                <meta property="og:url" content="https://asso-clash.fr/sponsors" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        SPONSORS & PARTENAIRES
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Construire l’avenir du Laser Game compétitif grâce à des partenariats de confiances et au
                        soutien de la communauté.
                    </p>
                </div>
            </section>

            {/* Why Sponsorship Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">Pourquoi chercher des Sponsors</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le CLASH est bien plus qu’'un simple club de Laser Game : nous sommes des pionniers du
                                Laser Game compétitif, propulsant cette discipline vers de nouveaux sommets. Nos
                                partenariats de sponsoring nous permettent d’entretenir notre niveau de classe national,
                                de soutenir nos athlètes de haut niveau et de développer la discipline aux niveaux local
                                et national.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Notre objectif : rendre accessible la compétition à chacun en finançant leur parcours
                                grâce à nos partenariats. Permettant d’augmenter la communauté de joueurs et d’initiés,
                                dans le but de créer la prochaine génération de champions !
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-start space-x-3">
                                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Portée communautaire</h4>
                                        <p className="text-gray-400 text-sm">
                                            150+ membres actifs en compétition, soutien de la marque LGE®
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Trophy className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Niveau Championnat</h4>
                                        <p className="text-gray-400 text-sm">
                                            Reconnaissance nationale, visibilité en compétition de haut niveau
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Tech Focus</h4>
                                        <p className="text-gray-400 text-sm">
                                            Touche une communauté jeune et pro, experte en technologie
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Innovation</h4>
                                        <p className="text-gray-400 text-sm">
                                            Une discipline de pointe qui séduit de plus en plus de monde
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg">
                            <ImageWithFallback
                                src={sponsorPhoto}
                                alt="Team'Ajin, champions de France de Laser Game avec sponsor Laser Game Evolution Le Havre"
                                className="w-full h-80 object-cover border border-primary/20 scale-130"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Sponsors Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos partenaires</h2>

                    <div className="space-y-8">
                        {sponsors.map((sponsor) => (
                            <Card
                                key={sponsor.id}
                                className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                                <div className="flex items-start flex-col md:flex-row">
                                    {/* Sponsor Logo */}
                                    <div
                                        className="relative flex flex-shrink-0 w-full md:w-auto"
                                        style={{ height: "-webkit-fill-available" }}>
                                        <div className="w-40 h-full bg-white/5 flex flex-1 items-center justify-center">
                                            <ImageWithFallback
                                                src={sponsor.logo}
                                                alt={`Logo ${sponsor.name}`}
                                                className="w-32 h-32 object-contain group-hover:scale-110 transition-all duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Sponsor Info */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-primary mb-1">{sponsor.name}</h3>
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <Badge
                                                        variant={
                                                            sponsor.tier === "Sponsor majeur" ? "default" : "secondary"
                                                        }
                                                        className={
                                                            sponsor.tier === "Sponsor majeur"
                                                                ? "bg-primary text-black"
                                                                : ""
                                                        }>
                                                        {sponsor.tier}
                                                    </Badge>
                                                    <span className="text-gray-400">•</span>
                                                    <span className="text-white font-medium">
                                                        {sponsor.partnership}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300 mb-4">{sponsor.description}</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">
                                                    Contribution du partenariat
                                                </h4>
                                                <p className="text-gray-400 text-sm mb-3">{sponsor.contribution}</p>
                                                {/* <div className="flex items-center space-x-2">
                                                    <span className="text-primary font-bold">{sponsor.value}</span>
                                                </div> */}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-bold text-white mb-2">Contact</h4>
                                                    <p className="text-gray-400 text-sm">
                                                        <a href={sponsor.website} target="_blank">
                                                            {sponsor.website}
                                                        </a>
                                                    </p>
                                                </div>
                                                {sponsor.tier === "Partenaire majeur" && (
                                                    <div className="hidden sm:flex items-center space-x-1 bg-primary/20 px-3 py-1 rounded-full">
                                                        <Star className="h-4 w-4 text-primary fill-current" />
                                                        <span className="text-primary font-bold text-sm">
                                                            Partenaire majeur
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsorship Opportunities Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6 text-primary">Opportunités de parrainage</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Rejoignez notre communauté de partenaires et contribuez à façonner l’avenir du Laser Game
                            compétitif tout en gagnant en visibilité auprès de notre public.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsorshipTiers.map((tier, index) => (
                            <Card
                                key={index}
                                className={`bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden ${
                                    tier.featured ? "border-primary/40 ring-1 ring-primary/20" : ""
                                }`}>
                                {tier.featured && (
                                    <div className="absolute top-0 right-0 bg-primary text-black px-3 py-1 text-md font-bold rounded-bl-md">
                                        ★
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                                    {/* <div className="text-3xl font-bold text-white mb-4">{tier.price}</div> */}
                                    {/* <p className="text-gray-400 text-sm">Par année</p> */}
                                </div>

                                <div className="text-center flex items-center space-x-3 ">
                                    <LayoutTemplate className="text-primary" />
                                    <p className="text-primary">
                                        Logo : <span className="text-white">{tier.logo}</span>
                                    </p>
                                </div>
                                <div className="space-y-3 mb-6">
                                    {tier.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-start space-x-2">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* <Button className={`w-full mt-auto`} variant={tier.featured ? "default" : "outline"}>
                                    En apprendre plus
                                </Button> */}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Sponsorship Dossier - Eye-catching CTA */}
            <section className="py-4 px-4 relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.15),transparent_50%)]" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    {/* Collapsed State - Eye-catching banner */}
                    {!isDossierExpanded && (
                        <div onClick={() => setIsDossierExpanded(true)} className="relative cursor-pointer group">
                            {/* Main banner bar */}
                            <div className="bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 border-y-4 border-primary py-8 px-8 relative overflow-hidden hover:border-primary/80 transition-all duration-500">
                                {/* Animated scan line effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 ease-linear" />

                                {/* Pulsing edges */}
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary animate-pulse" />
                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary animate-pulse" />

                                {/* Content */}
                                <div className="relative z-10 flex items-center justify-between max-w-6xl mx-auto">
                                    <div className="flex items-center space-x-6">
                                        {/* Icon with glow */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
                                            <div className="relative bg-primary/20 p-4 rounded-lg border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                                                <FileText className="h-10 w-10 text-primary" />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent mb-1 animate-pulse">
                                                TÉLÉCHARGER LE DOSSIER DE PARTENARIAT
                                            </h3>
                                            {/* <p className="text-gray-300 text-sm md:text-base">
                                                11 pages • Mis à jour en novembre 2025
                                            </p> */}
                                        </div>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="hidden md:flex items-center space-x-3">
                                        <span className="text-primary font-bold text-lg animate-pulse">AFFICHER</span>
                                        <div className="bg-primary/20 p-3 rounded-full border-2 border-primary group-hover:bg-primary/30 transition-colors">
                                            <ArrowDown className="h-6 w-6 text-primary group-hover:animate-bounce" />
                                        </div>
                                    </div>
                                </div>

                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary/80" />
                                <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-primary/80" />
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-primary/80" />
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary/80" />
                            </div>
                        </div>
                    )}

                    {/* Expanded State - Full content */}
                    {isDossierExpanded && (
                        <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/40 p-12 relative overflow-hidden group hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                            {/* Close button */}
                            <button
                                onClick={() => setIsDossierExpanded(false)}
                                className="absolute top-4 right-4 bg-primary/20 hover:bg-primary/30 p-2 rounded-lg border border-primary/40 hover:border-primary transition-all duration-300 group/close z-20">
                                <ArrowDown className="h-5 w-5 text-primary rotate-180 group-hover/close:animate-bounce" />
                            </button>

                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/60" />
                            <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-primary/60" />
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-primary/60" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary/60" />

                            {/* Pulsing glow effect */}
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-500" />

                            <div className="relative z-10 text-center">
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
                                        <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 p-6 rounded-2xl border-2 border-primary/50 group-hover:scale-110 transition-transform duration-300">
                                            <FileText className="h-16 w-16 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Title with gradient */}
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-pulse">
                                    DOSSIER DE PARTENARIAT
                                </h2>

                                {/* Subtitle */}
                                <p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto">
                                    Téléchargez notre dossier complet sur le parrainage, qui présente en détail les
                                    possibilités de partenariat, les avantages et les retombées médiatiques.
                                </p>

                                {/* Features list */}
                                <div className="flex flex-wrap justify-center gap-4 mb-8 mt-6">
                                    <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                                        <Star className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-gray-300">Niveaux de partenariat</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                                        <Trophy className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-gray-300">Notre renommée</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                                        <Target className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-gray-300">Notre audience</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                                        <Users className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-gray-300">L'association</span>
                                    </div>
                                </div>

                                {/* CTA Button Group */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button
                                        className="group/btn relative bg-primary hover:bg-primary/90 text-black font-bold py-6 px-10 text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 overflow-hidden"
                                        size="lg"
                                        onClick={() => {
                                            const link = document.createElement("a");
                                            link.href = DossierSponsoring; // votre fichier PDF
                                            link.download = "Dossier_Partenariat_CLASH_2025-2026.pdf";
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}>
                                        {/* Button glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                                        <div className="relative z-10 flex items-center">
                                            <Download className="h-6 w-6 mr-3 group-hover/btn:animate-bounce" />
                                            <span className="relative z-10">TÉLÉCHARGER LE DOSSIER</span>
                                            <ArrowDown className="h-5 w-5 ml-3 group-hover/btn:translate-y-1 transition-transform" />
                                        </div>
                                    </Button>

                                    {/* <Button
                                        variant="outline"
                                        className="border-2 border-primary text-primary hover:bg-primary/10 font-bold py-6 px-10 text-lg transition-all duration-300"
                                        size="lg">
                                        <Mail className="h-5 w-5 mr-2" />
                                        ENVOYEZ PAR MAIL
                                    </Button> */}
                                </div>

                                {/* File info */}
                                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <FileText className="h-4 w-4 text-primary" />
                                        <span>Format PDF</span>
                                    </div>
                                    <span>•</span>
                                    <span>11 Pages</span>
                                    <span>•</span>
                                    <span>Mis à jour en novembre 2025</span>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            </section>

            {/* COMPREHENSIVE SPONSOR/PATRON CONTACT FORM */}
            <section className="py-20 px-4 bg-secondary/30" id="partner-form">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <div className="flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/30">
                                <Handshake className="h-6 w-6 text-primary" />
                                <span className="text-primary font-bold">DEVENIR PARTENAIRE</span>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                            Formulaire de contact
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Que vous soyez une entreprise souhaitant sponsoriser notre club ou un mécène individuel
                            désireux de soutenir notre mission et nos objectifs, nous serions ravis de vous rencontrer.
                            Veuillez remplir ce formulaire détaillé afin que nous puissions établir un partenariat
                            idéal. Et n'hésitez pas à nous contacter directement !
                        </p>
                    </div>

                    {/* Success Message */}
                    {/* {sponsorFormStatus === "success" && (
                        <Card className="mb-8 p-6 bg-primary/10 border-2 border-primary/40">
                            <div className="flex items-start space-x-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
                                    <CheckCircle className="h-8 w-8 text-primary relative" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        Merci pour l'intérêt que vous portez à notre association !
                                    </h3>
                                    <p className="text-gray-300 mb-1">
                                        Vos informations détaillées ont été envoyées avec succès.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Notre équipe chargée des partenariats examinera attentivement votre demande et
                                        vous contactera dans les 24 à 48 heures pour discuter des prochaines étapes et
                                        répondre à vos questions.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    )} */}

                    {/* Form Card */}
                    <Card className="bg-card border-2 border-primary/30 p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary/40" />
                        <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-primary/40" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-primary/40" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary/40" />

                        <form onSubmit={handleSponsorFormSubmit} className="space-y-8 relative z-10">
                            {/* Partner Type Selection */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Star className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">Type de partenariat</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    Choisissez le type de partenariat qui correspond le mieux à vos intérêts.
                                </p>
                                <RadioGroup
                                    value={sponsorFormData.partnerType}
                                    onValueChange={(value) => handleSponsorFormChange("partnerType", value)}
                                    className="grid md:grid-cols-2 gap-4">
                                    <label htmlFor="sponsor-type" className="relative">
                                        <Card
                                            className={`p-6 cursor-pointer transition-all duration-300 border-2 h-full ${
                                                sponsorFormData.partnerType === "sponsor"
                                                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                                                    : "border-primary/20 hover:border-primary/40"
                                            }`}>
                                            <div className="flex items-start space-x-4">
                                                <RadioGroupItem value="sponsor" id="sponsor-type" className="mt-1" />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <Building className="h-5 w-5 text-primary" />
                                                        <h4 className="font-bold text-white">Sponsor</h4>
                                                    </div>
                                                    <p className="text-gray-400 text-sm">
                                                        Entreprise ou personne morale souhaitant établir un partenariat
                                                        contractuel afin de bénéficier d'une collaboration stratégique.
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </label>
                                    <label htmlFor="patron-type" className="relative">
                                        <Card
                                            className={`p-6 cursor-pointer transition-all duration-300 border-2 h-full ${
                                                sponsorFormData.partnerType === "patron"
                                                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                                                    : "border-primary/20 hover:border-primary/40"
                                            }`}>
                                            <div className="flex items-start space-x-4">
                                                <RadioGroupItem value="patron" id="patron-type" className="mt-1" />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <Users className="h-5 w-5 text-primary" />
                                                        <h4 className="font-bold text-white">Mécène</h4>
                                                    </div>
                                                    <p className="text-gray-400 text-sm">
                                                        Particulier ou philanthrope soutenant le club par le biais de
                                                        contributions financières ou de dons en nature
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </label>
                                </RadioGroup>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">Coordonnées</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-firstName" className="text-gray-300">
                                            Prénom *
                                        </Label>
                                        <Input
                                            id="sponsor-firstName"
                                            placeholder="Votre prénom"
                                            value={sponsorFormData.firstName}
                                            onChange={(e) => handleSponsorFormChange("firstName", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-lastName" className="text-gray-300">
                                            Nom *
                                        </Label>
                                        <Input
                                            id="sponsor-lastName"
                                            placeholder="Votre nom"
                                            value={sponsorFormData.lastName}
                                            onChange={(e) => handleSponsorFormChange("lastName", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-email" className="text-gray-300">
                                            Adresse mail *
                                        </Label>
                                        <Input
                                            id="sponsor-email"
                                            type="email"
                                            placeholder="votre.email@exemple.com"
                                            value={sponsorFormData.email}
                                            onChange={(e) => handleSponsorFormChange("email", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-phone" className="text-gray-300">
                                            Numéro de téléphone *
                                        </Label>
                                        <Input
                                            id="sponsor-phone"
                                            type="tel"
                                            placeholder="06 12 34 56 78"
                                            value={sponsorFormData.phone}
                                            onChange={(e) => handleSponsorFormChange("phone", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="sponsor-preferredContact" className="text-gray-300">
                                        Méthode de contact préférée
                                    </Label>
                                    <Select
                                        value={sponsorFormData.preferredContact}
                                        onValueChange={(value) => handleSponsorFormChange("preferredContact", value)}>
                                        <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                            <SelectValue placeholder="Comment devrions-nous vous joindre ?" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-card border-primary/20">
                                            <SelectItem value="email">Email</SelectItem>
                                            <SelectItem value="phone">Appel téléphonique</SelectItem>
                                            <SelectItem value="text">SMS</SelectItem>
                                            <SelectItem value="any">N'importe laquelle</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Company/Organization Details (conditional on partner type) */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Building className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">
                                        {sponsorFormData.partnerType === "sponsor"
                                            ? "Informations sur l'entreprise"
                                            : "Contexte (facultatif)"}
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-companyName" className="text-gray-300">
                                            {sponsorFormData.partnerType === "sponsor"
                                                ? "Nom de l'entreprise/organisation *"
                                                : "Entreprise/Affiliation (facultatif)"}
                                        </Label>
                                        <Input
                                            id="sponsor-companyName"
                                            placeholder={
                                                sponsorFormData.partnerType === "sponsor"
                                                    ? "Nom de votre entreprise"
                                                    : "Le cas échéant"
                                            }
                                            value={sponsorFormData.companyName}
                                            onChange={(e) => handleSponsorFormChange("companyName", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required={sponsorFormData.partnerType === "sponsor"}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-position" className="text-gray-300">
                                            {sponsorFormData.partnerType === "sponsor"
                                                ? "Votre poste/statut *"
                                                : "Statut (facultatif)"}
                                        </Label>
                                        <Input
                                            id="sponsor-position"
                                            placeholder={
                                                sponsorFormData.partnerType === "sponsor"
                                                    ? "PDG, directeur marketing, etc."
                                                    : "Le cas échéant"
                                            }
                                            value={sponsorFormData.position}
                                            onChange={(e) => handleSponsorFormChange("position", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required={sponsorFormData.partnerType === "sponsor"}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-website" className="text-gray-300">
                                            Site internet/LinkedIn (facultatif)
                                        </Label>
                                        <Input
                                            id="sponsor-website"
                                            placeholder="www.votre-entreprise.com ou profile LinkedIn"
                                            value={sponsorFormData.website}
                                            onChange={(e) => handleSponsorFormChange("website", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sponsor-industry" className="text-gray-300">
                                            Industrie/Secteur d'activité
                                        </Label>
                                        <Input
                                            id="sponsor-industry"
                                            placeholder="Technologie, sports, commerce de détail..."
                                            value={sponsorFormData.industry}
                                            onChange={(e) => handleSponsorFormChange("industry", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contribution Details */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Euro className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">Détails de la contribution</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <Label className="text-gray-300 mb-3 block">
                                            Type de contribution (sélectionnez toutes les réponses qui s'appliquent) *
                                        </Label>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                { value: "financial", label: "Financier/Monétaire" },
                                                { value: "equipment", label: "Équipement/Matériel" },
                                                { value: "services", label: "Services" },
                                                { value: "in-kind", label: "Dons en nature" },
                                                { value: "venue", label: "Accès au lieu/aux installations" },
                                                { value: "marketing", label: "Marketing/Promotion" },
                                            ].map((type) => (
                                                <div
                                                    key={type.value}
                                                    className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                                                    <Checkbox
                                                        id={`contribution-${type.value}`}
                                                        checked={sponsorFormData.contributionType.includes(type.value)}
                                                        onCheckedChange={() => handleContributionTypeToggle(type.value)}
                                                        className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                                                    />
                                                    <Label
                                                        htmlFor={`contribution-${type.value}`}
                                                        className="text-gray-300 cursor-pointer flex-1">
                                                        {type.label}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-budgetRange" className="text-gray-300">
                                                Fourchette budgétaire (en cas de contribution financière)
                                            </Label>
                                            <Select
                                                value={sponsorFormData.budgetRange}
                                                onValueChange={(value) =>
                                                    handleSponsorFormChange("budgetRange", value)
                                                }>
                                                <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                    <SelectValue placeholder="Sélectionnez votre fourchette budgétaire" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-card border-primary/20">
                                                    <SelectItem value="under-1k">Moins de 500 €</SelectItem>
                                                    <SelectItem value="1k-5k">500 € - 1 000 €</SelectItem>
                                                    <SelectItem value="5k-15k">1 000 € - 2 000 €</SelectItem>
                                                    <SelectItem value="15k-25k">2 000 € - 5 000 €</SelectItem>
                                                    <SelectItem value="25k-50k">5 000 € et plus</SelectItem>
                                                    <SelectItem value="flexible">Flexible/À discuter</SelectItem>
                                                    <SelectItem value="other">Autre (précisez ci-dessous)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-customBudget" className="text-gray-300">
                                                Montant personnalisé/Détails
                                            </Label>
                                            <Input
                                                id="sponsor-customBudget"
                                                placeholder="Précisez le montant ou décrivez la contribution envisagée"
                                                value={sponsorFormData.customBudget}
                                                onChange={(e) =>
                                                    handleSponsorFormChange("customBudget", e.target.value)
                                                }
                                                className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-partnershipDuration" className="text-gray-300">
                                                Durée souhaitée du partenariat
                                            </Label>
                                            <Select
                                                value={sponsorFormData.partnershipDuration}
                                                onValueChange={(value) =>
                                                    handleSponsorFormChange("partnershipDuration", value)
                                                }>
                                                <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                    <SelectValue placeholder="Sélectionnez la durée" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-card border-primary/20">
                                                    <SelectItem value="one-time">Contribution unique</SelectItem>
                                                    <SelectItem value="event">Spécifique à un événement</SelectItem>
                                                    <SelectItem value="1-season">Une saison</SelectItem>
                                                    <SelectItem value="multi-seasons">Plusieurs saisons</SelectItem>
                                                    <SelectItem value="ongoing">En cours/Ouvert</SelectItem>
                                                    <SelectItem value="to-discuss">Ouvert à la discussion</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-timeline" className="text-gray-300">
                                                Quand souhaitez-vous commencer ?
                                            </Label>
                                            <Select
                                                value={sponsorFormData.timeline}
                                                onValueChange={(value) => handleSponsorFormChange("timeline", value)}>
                                                <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                    <SelectValue placeholder="Sélectionnez la période" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-card border-primary/20">
                                                    <SelectItem value="immediate">Immediatement</SelectItem>
                                                    <SelectItem value="1-month">D'ici 1 mois</SelectItem>
                                                    <SelectItem value="2-3-months">2-3 mois</SelectItem>
                                                    <SelectItem value="6-months">6 Mois</SelectItem>
                                                    <SelectItem value="next-year">Année prochaine</SelectItem>
                                                    <SelectItem value="flexible">Flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Specific Interests & Goals */}
                            <div className="space-y-4">
                                {sponsorFormData.partnerType === "sponsor" && (
                                    <>
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Target className="h-6 w-6 text-primary" />
                                            <h3 className="text-2xl font-bold text-primary">
                                                Intérêts et objectifs du partenariat
                                            </h3>
                                        </div>

                                        <div>
                                            <Label className="text-gray-300 mb-3 block">
                                                Domaines d'intérêt (sélectionnez toutes les réponses qui s'appliquent)
                                            </Label>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {[
                                                    { value: "equipment", label: "Parrainage d'équipement" },
                                                    { value: "uniforms", label: "Tenues/vêtements de l'équipe" },
                                                    { value: "facility", label: "Installation/Lieu" },
                                                    { value: "tournaments", label: "Parrainage de tournoi" },
                                                    { value: "team", label: "Parrainage d'équipe" },
                                                    { value: "travel", label: "Déplacements et logistique" },
                                                    { value: "media", label: "Médias et diffusion" },
                                                    { value: "training", label: "Formation et coaching" },
                                                    { value: "other", label: "Autre" },
                                                ].map((interest) => (
                                                    <div
                                                        key={interest.value}
                                                        className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                                                        <Checkbox
                                                            id={`interest-${interest.value}`}
                                                            checked={sponsorFormData.specificInterests.includes(
                                                                interest.value
                                                            )}
                                                            onCheckedChange={() =>
                                                                handleSpecificInterestsToggle(interest.value)
                                                            }
                                                            className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                                                        />
                                                        <Label
                                                            htmlFor={`interest-${interest.value}`}
                                                            className="text-gray-300 cursor-pointer flex-1 text-sm">
                                                            {interest.label}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-targetAudience" className="text-gray-300">
                                                Public cible (le cas échéant)
                                            </Label>
                                            <Input
                                                id="sponsor-targetAudience"
                                                placeholder="Qui espérez-vous atteindre grâce à ce partenariat ?"
                                                value={sponsorFormData.targetAudience}
                                                onChange={(e) =>
                                                    handleSponsorFormChange("targetAudience", e.target.value)
                                                }
                                                className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-marketingGoals" className="text-gray-300">
                                                Objectifs marketing & promotionnels
                                            </Label>
                                            <Textarea
                                                id="sponsor-marketingGoals"
                                                placeholder="Quels sont vos principaux objectifs marketing ? (notoriété de la marque, engagement communautaire, promotion des produits...)"
                                                value={sponsorFormData.marketingGoals}
                                                onChange={(e) =>
                                                    handleSponsorFormChange("marketingGoals", e.target.value)
                                                }
                                                className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-brandValues" className="text-gray-300">
                                                Valeurs de marque
                                            </Label>
                                            <Textarea
                                                id="sponsor-brandValues"
                                                placeholder="Quelles valeurs votre marque représente-t-elle ? Comment envisagez-vous la collaboration avec le CLASH ?"
                                                value={sponsorFormData.brandValues}
                                                onChange={(e) => handleSponsorFormChange("brandValues", e.target.value)}
                                                className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sponsor-previousSponsorships" className="text-gray-300">
                                                Sponsorings/partenariats antérieurs (le cas échéant)
                                            </Label>
                                            <Textarea
                                                id="sponsor-previousSponsorships"
                                                placeholder="Avez-vous déjà sponsorisé d'autres disciplines, événements ou organisations ? Racontez-nous votre expérience."
                                                value={sponsorFormData.previousSponsorships}
                                                onChange={(e) =>
                                                    handleSponsorFormChange("previousSponsorships", e.target.value)
                                                }
                                                className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                                rows={3}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Additional Message */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">Informations complémentaires</h3>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="sponsor-message" className="text-gray-300">
                                        Parlez-nous davantage de votre vision du partenariat *
                                    </Label>
                                    <Textarea
                                        id="sponsor-message"
                                        placeholder="Partagez toute information supplémentaire concernant ce que vous recherchez dans un partenariat, vos idées spécifiques, vos questions ou tout autre élément que vous souhaitez nous communiquer..."
                                        value={sponsorFormData.message}
                                        onChange={(e) => handleSponsorFormChange("message", e.target.value)}
                                        className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500 min-h-[150px]"
                                        rows={6}
                                        required
                                    />
                                </div>

                                <div className="flex items-start space-x-3 p-4 bg-card/50 rounded-lg border border-primary/20">
                                    <Checkbox
                                        id="sponsor-newsletter"
                                        checked={sponsorFormData.newsletter}
                                        onCheckedChange={(checked) =>
                                            handleSponsorFormChange("newsletter", checked as boolean)
                                        }
                                        className="mt-1 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                                    />
                                    <Label htmlFor="sponsor-newsletter" className="text-gray-300 cursor-pointer flex-1">
                                        Abonnez-vous à notre newsletter pour recevoir des informations sur les
                                        actualités du club, les événements à venir et les opportunités de parrainage.
                                    </Label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={isSponsorFormSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 px-8 text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-[1.02] disabled:opacity-50 group">
                                    {isSponsorFormSubmitting ? (
                                        <>
                                            <Zap className="h-6 w-6 mr-3 animate-spin" />
                                            SOUMISSION DE VOTRE DEMANDE DE PARTENARIAT...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
                                            SOUMETTRE LE FORMULAIRE DE PARTENARIAT
                                            <ArrowDown className="h-5 w-5 ml-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-sm text-gray-400 mt-6 text-center">
                                    * Champs obligatoires. Nos bénévoles dédiés aux partenariats examineront
                                    attentivement votre demande et vous contacteront dans les 24 à 48 heures pour
                                    discuter de la manière dont nous pouvons travailler ensemble pour soutenir le CLASH
                                    et le laser tag compétitif de manière plus générale.
                                </p>
                            </div>
                        </form>
                    </Card>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Envie de devenir notre <span className="text-primary">partenaire</span> cette saison ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Rejoignez l'aventure Laser Game compétitif au Havre en soutennant le CLASH et découvrez notre
                        communauté de joueurs passionnés.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-white mb-2">Envoyez-nous un e-mail</h3>
                            <p className="text-gray-300 mb-4">
                                Discutons ensembles des opportunités de partenariat. Et obtenez des informations
                                détaillées.
                            </p>
                            <Button variant="link" className="">
                                <a href="mail:asso.clash.lh@gmail.com" className="hover:no-underline">
                                    asso.clash.lh@gmail.com
                                </a>
                            </Button>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-white mb-2">Appelez-nous</h3>
                            <p className="text-gray-300 mb-4">
                                Discutez directement avec notre équipe chargée du développement des partenariats.
                            </p>
                            <Button variant="link">
                                <a href="tel:+33674182045">(+33) 6 74 18 20 45</a>
                            </Button>
                        </Card>
                    </div>

                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <Handshake className="h-6 w-6 text-primary" />
                        <span className="text-gray-300">Construisons ensemble la discipline de demain</span>
                    </div>

                    <Button
                        size="lg"
                        onClick={() => navigate("/socials")}
                        className="min-w-100 bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        Retrouvez-nous sur nos réseaux sociaux
                    </Button>
                </div>
            </section>
        </div>
    );
}
