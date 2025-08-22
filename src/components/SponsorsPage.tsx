import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Handshake, Target, Users, Trophy, Zap, Star, Mail, Phone, LayoutTemplate } from "lucide-react";
import sponsorPhoto from "../assets/TeamAjin_avec_sponsor_Laser_Game_Evolution_Le_Havre.webp";

export function SponsorsPage() {
    const sponsors = [
        {
            id: 1,
            name: "Laser Game Evolution Le Havre",
            tier: "Partenaire majeur",
            logo: "https://le-havre.lasergame-evolution.fr/wp-content/uploads/sites/145/2025/08/logo-CMJN-200x50-1.webp",
            description:
                "Le centre Laser Game Evolution du Havre nous accorde sa confiance depuis une décénie, et désormais il nous apporte également son soutien financier pour faire briller la renommée du Havre. Et conserver le titre de champion de France.",
            partnership: "2024 - Présent",
            contribution:
                "Financement des cotisations individuelles des joueurs compétitifs pour faciliter le recrutement.",
            website: "https://le-havre.lasergame-evolution.fr/",
        },
    ];

    const sponsorshipTiers = [
        {
            name: "Sponsor majeur",
            price: "8 000€",
            logo: "Poitrine",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Collaboration sur un contenu promotionnel",
                "Intervention des champions de France en entreprise",
                "Post de remerciement personnalisé sur nos réseaux",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
                "Logos sur les visuels de communication et nos prints",
            ],
            featured: true,
        },
        {
            name: "Sponsor officiel",
            price: "2 000€",
            logo: "Manche",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Intervention des champions de France en entreprise",
                "Post de remerciement personnalisé sur nos réseaux",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
                "Logos sur les visuels de communication et nos prints",
            ],
            featured: false,
        },
        {
            name: "Partenaire",
            price: "1 000€",
            logo: "Dos",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Post de remerciement collectif",
                "Logo sur les prints du club",
                "Mentions sur les posts et stories",
                "Accès à notre banque d'images et vidéos",
            ],
            featured: false,
        },
        {
            name: "Soutien",
            price: "500€",
            logo: "-",
            benefits: [
                "Invitation à la soirée de remerciement",
                "Post de remerciement collectif",
                "Logo sur les prints du club",
            ],
            featured: false,
        },
    ];

    return (
        <div className="pt-20">
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
                                Le CLASH est bien plus qu'un simple club de Laser Game : nous sommes des pionniers du
                                Laser Game compétitif, propulsant cette discipline vers de nouveaux sommets. Nos
                                partenariats de sponsoring nous permettent d'entretenir notre niveau de classe national,
                                de soutenir nos athlètes de haut niveau et de développer la discipline aux niveaux local
                                et national.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Notre objectif : rendre accessible la compétition à chacun en finançant leur parcours
                                grâce à nos partenariats. Permettant d'augmenter la communauté de joueurs et d'initiés,
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
                                                            sponsor.tier === "Partenaire majeur"
                                                                ? "default"
                                                                : "secondary"
                                                        }
                                                        className={
                                                            sponsor.tier === "Partenaire majeur"
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
                            Rejoignez notre communauté de partenaires et contribuez à façonner l'avenir du Laser Game
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
                                    <div className="text-3xl font-bold text-white mb-4">{tier.price}</div>
                                    <p className="text-gray-400 text-sm">Par année</p>
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

                                <Button className={`w-full mt-auto`} variant={tier.featured ? "default" : "outline"}>
                                    En apprendre plus
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Envie de devenir notre <span className="text-primary">partenaire</span> cette saison ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Rejoignez l'aventure Laser Game compétitif en soutennant le CLASH et découvrez notre communauté
                        de joueurs passionnés.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-card/50 border-primary/20 p-6">
                            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-white mb-2">Envoyez-nous un e-mail</h3>
                            <p className="text-gray-300 mb-4">
                                Obtenez des informations détaillées sur les formules de parrainage et les opportunités
                                de partenariat.
                            </p>
                            <Button variant="link" className="">
                                <a href="mail:asso.clash.lh@gmail.com" className="hover:no-underline">
                                    asso.clash.lh@gmail.com
                                </a>
                            </Button>
                        </Card>

                        <Card className="bg-card/50 border-primary/20 p-6">
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

                    <div className="flex items-center justify-center space-x-4">
                        <Handshake className="h-6 w-6 text-primary" />
                        <span className="text-gray-300">Construisons ensemble la discipline de demain</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
