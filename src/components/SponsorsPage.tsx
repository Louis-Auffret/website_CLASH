import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Handshake, Target, Users, Trophy, Zap, DollarSign, Star, Mail, Phone } from "lucide-react";

export function SponsorsPage() {
    const sponsors = [
        {
            id: 1,
            name: "TechNova Systems",
            tier: "Title Sponsor",
            logo: "https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzU1MjY1MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Leading technology solutions provider specializing in advanced laser systems and electronic equipment.",
            partnership: "2021 - Present",
            contribution: "Primary equipment sponsor providing cutting-edge laser tag systems and technical support.",
            value: "$50,000+ annually",
            website: "www.technova-systems.com",
        },
        {
            id: 2,
            name: "Nexus Gaming Gear",
            tier: "Equipment Partner",
            logo: "https://images.unsplash.com/photo-1581285228660-48add4794ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBnZWFyJTIwYnJhbmR8ZW58MXx8fHwxNzU1MzUxMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Premium gaming accessories and professional esports equipment manufacturer.",
            partnership: "2022 - Present",
            contribution: "Official supplier of team uniforms, protective gear, and training accessories.",
            value: "$25,000+ annually",
            website: "www.nexusgaming.com",
        },
        {
            id: 3,
            name: "Atlas Sports Co.",
            tier: "Official Partner",
            logo: "https://images.unsplash.com/photo-1618411062366-81b4c31657cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBsb2dvfGVufDF8fHx8MTc1NTM1MTAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Sports equipment and facility management company supporting competitive athletics.",
            partnership: "2020 - Present",
            contribution: "Arena facility maintenance, safety equipment, and event coordination support.",
            value: "$15,000+ annually",
            website: "www.atlassports.com",
        },
        {
            id: 4,
            name: "Voltage Energy",
            tier: "Nutrition Partner",
            logo: "https://images.unsplash.com/photo-1704278052498-70de0a66d5ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGJyYW5kfGVufDF8fHx8MTc1NTM1MTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Performance nutrition brand focused on competitive athletes and gamers.",
            partnership: "2023 - Present",
            contribution: "Official energy drinks and nutrition supplements for all team members and events.",
            value: "$10,000+ annually",
            website: "www.voltageenergy.com",
        },
        {
            id: 5,
            name: "Urban Threads",
            tier: "Apparel Sponsor",
            logo: "https://images.unsplash.com/photo-1738458786007-03c0c4b7a804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBhcmVsJTIwYnJhbmQlMjBsb2dvfGVufDF8fHx8MTc1NTM1MTAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Contemporary streetwear brand with a focus on tech-inspired athletic apparel.",
            partnership: "2023 - Present",
            contribution: "Custom team jerseys, casual wear, and merchandise design.",
            value: "$8,000+ annually",
            website: "www.urbanthreads.com",
        },
        {
            id: 6,
            name: "Metro Business Solutions",
            tier: "Community Partner",
            logo: "https://images.unsplash.com/photo-1701518035272-6543c02bd2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzJTIwc3BvbnNvcnxlbnwxfHx8fDE3NTUzNTEwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Local business consulting firm supporting community sports and youth development.",
            partnership: "2022 - Present",
            contribution: "Financial support for youth programs and tournament expenses.",
            value: "$5,000+ annually",
            website: "www.metrobusiness.com",
        },
    ];

    const sponsorshipTiers = [
        {
            name: "Sponsor majeur",
            price: "4 000€",
            benefits: [
                "Logo on all team uniforms and equipment",
                "Naming rights to main arena",
                "VIP access to all tournaments",
                "Featured placement on website and social media",
                "Co-branding opportunities",
                "Player meet & greet events",
            ],
            featured: true,
        },
        {
            name: "Sponsor officiel",
            price: "2 000€",
            benefits: [
                "Logo on team equipment and gear",
                "Featured sponsor recognition",
                "Tournament booth space",
                "Social media mentions",
                "Newsletter inclusion",
                "Player endorsement opportunities",
            ],
            featured: false,
        },
        {
            name: "Partenaire",
            price: "1 000€",
            benefits: [
                "Logo placement on team materials",
                "Website sponsor page listing",
                "Event program inclusion",
                "Social media recognition",
                "Tournament tickets",
            ],
            featured: false,
        },
        {
            name: "Soutien",
            price: "500€",
            benefits: [
                "Website listing",
                "Social media thank you posts",
                "Event program mention",
                "Community recognition",
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
                        Construire l’avenir du Laser Game compétitif grâce à des partenariats stratégiques et au soutien
                        de la communauté.
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
                                laser de compétition, propulsant ce sport vers de nouveaux sommets. Nos partenariats de
                                sponsoring nous permettent d'entretenir notre niveau de classe national, de soutenir nos
                                athlètes d'élite et de développer cette discipline aux niveaux local et national.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Grâce à des partenariats stratégiques, nous créons des relations mutuellement bénéfiques
                                qui aident les marques à atteindre notre communauté tout en fournissant les ressources
                                nécessaires pour développer la prochaine génération de champions compétitifs du Laser
                                Game.
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
                                            Un sport de pointe qui séduit de plus en plus le grand public
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NTM1MTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Business Partnership"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
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
                                className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                                <div className="flex items-start">
                                    {/* Sponsor Logo */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-32 h-32 overflow-hidden bg-white/5 flex items-center justify-center">
                                            <ImageWithFallback
                                                src={sponsor.logo}
                                                alt={`${sponsor.name} Logo`}
                                                className="w-24 h-24 object-contain group-hover:scale-110 transition-all duration-500"
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
                                                            sponsor.tier === "Title Sponsor" ? "default" : "secondary"
                                                        }
                                                        className={
                                                            sponsor.tier === "Title Sponsor"
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
                                                <h4 className="font-bold text-white mb-2">Partnership Contribution</h4>
                                                <p className="text-gray-400 text-sm mb-3">{sponsor.contribution}</p>
                                                <div className="flex items-center space-x-2">
                                                    <DollarSign className="h-4 w-4 text-primary" />
                                                    <span className="text-primary font-bold">{sponsor.value}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-bold text-white mb-2">Contact</h4>
                                                    <p className="text-gray-400 text-sm">{sponsor.website}</p>
                                                </div>
                                                {sponsor.tier === "Title Sponsor" && (
                                                    <div className="flex items-center space-x-1 bg-primary/20 px-3 py-1 rounded-full">
                                                        <Star className="h-4 w-4 text-primary fill-current" />
                                                        <span className="text-primary font-bold text-sm">
                                                            Premium Partner
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
                            Rejoignez notre communauté d'élite de partenaires et contribuez à façonner l'avenir du laser
                            tag compétitif tout en gagnant une précieuse visibilité auprès de notre public engagé.
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
                                    <div className="absolute top-0 right-0 bg-primary text-black px-3 py-1 text-sm font-bold">
                                        FEATURED
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                                    <div className="text-3xl font-bold text-white mb-4">{tier.price}</div>
                                    <p className="text-gray-400 text-sm">Par année</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {tier.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-start space-x-2">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full ${
                                        tier.featured
                                            ? "bg-primary text-black hover:bg-primary/90"
                                            : "border-primary text-primary hover:bg-primary/10"
                                    }`}
                                    variant={tier.featured ? "default" : "outline"}>
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
                        Prêt à devenir nôtre <span className="text-primary">partenaire</span> cette saison ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Rejoignez les marques d'élite qui soutiennent le Laser Game de compétition et rejoignez notre
                        communauté de joueurs passionnés.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-card/50 border-primary/20 p-6">
                            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-white mb-2">Envoyez-nous un e-mail</h3>
                            <p className="text-gray-300 mb-4">
                                Obtenez des informations détaillées sur les formules de parrainage et les opportunités
                                de partenariat.
                            </p>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                asso.clash.lh@gmail.com
                            </Button>
                        </Card>

                        <Card className="bg-card/50 border-primary/20 p-6">
                            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-white mb-2">Appelez-nous</h3>
                            <p className="text-gray-300 mb-4">
                                Discutez directement avec notre équipe chargée du développement des partenariats.
                            </p>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                (+33) 6 74 18 20 45
                            </Button>
                        </Card>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <Handshake className="h-6 w-6 text-primary" />
                        <span className="text-gray-300">Construisons ensemble quelque chose d'extraordinaire</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
