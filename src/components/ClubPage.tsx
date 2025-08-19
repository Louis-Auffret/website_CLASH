import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Users, Calendar, MapPin, Target, Star, UserPlus, Mail, Phone, GamepadIcon } from "lucide-react";

export function ClubPage() {
    const [formData, setFormData] = useState({
        nickname: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        experience: "",
        availability: "",
        motivation: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You would typically send this data to your backend
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const achievements = [
        { year: "2025", title: "Champions de France", description: "Championnat de France - Angoulême", star: 5 },
        { year: "2024", title: "Quatrième place CDF", description: "Championnat de France - Roanne", star: 3 },
        { year: "2023", title: "Quatrième place CDF", description: "Championnat de France - Le Mans", star: 3 },
        { year: "2022", title: "Vice-Champions de France", description: "Championnat de France - Poitiers", star: 4 },
        { year: "2022", title: "Champions de ligue Nord", description: "Championnat régionnal - Ligue Nord", star: 2 },
        {
            year: "2021",
            title: "Champions de ligue Ouest",
            description: "Championnat régionnal - Ligue Ouest",
            star: 2,
        },
    ];

    const facilities = [
        {
            name: "Briefing",
            description:
                "C'est le lieu ou les joueurs s'équipent. Très bon terrain d'entraînement, parfait pour s'entrainer à quelques joueurs.",
            capacity: "6 joueurs en entrainement",
        },
        {
            name: "Salle 1",
            description: "Labyrinthe carré sans étage, avec deux mezzanines opposées, le rêve de tout raptor.",
            capacity: "2 équipes ou 12 joueurs en entrainement",
        },
        {
            name: "Salle 2",
            description:
                "Salle à double hauteur, très stratégique. Force les joueurs des équipes à jouer ensembles pour réussir leurs reprises.",
            capacity: "2 équipes ou 18 joueurs en entrainement",
        },
        {
            name: "Salle 3",
            description:
                "Salle à double hauteur, parfaite pour s'entrainer en petits groupes. Elle n'est pas utilisée en compétition.",
            capacity: "2 équipes ou 8 joueurs en entrainement",
        },
        {
            name: "Salle 2+3",
            description:
                "Ouverture de sas entre les salles 2 et 3 pour créer un immense labyrinthe. Pour varier les salles en entrainement.",
            capacity: "4 équipes",
        },
        {
            name: "Salle de repos",
            description:
                "Lieu de repos des joueurs, avec les plans des salles aux murs, parfait pour établir ses stratégies, se reposer et s'équiper.",
            capacity: "30 joueurs",
        },
    ];

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        NOTRE CLUB
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Fondé en 2016, le CLASH -
                        <i className="text-gray-400"> Club de Laser Associatif et Sportif Havrais</i> - est un des clubs
                        les plus expérimentés et prestigieux de France. Actuel champion de France !
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">À propos du CLASH</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Le CLASH a été fondé avec l'objectif de faire du laser game une discipline de
                                compétition, passant du simple loisir à la compétition. Notre expérience et nos joueurs
                                expérimentés offrent l'environnement idéal pour que les joueurs développent leurs
                                compétences et concourent au plus haut niveau.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Nous pensons que le Laser Game est plus qu'un simple jeu : c'est une discipline qui
                                développe le caractère, l'esprit d'équipe, la réflexion stratégique et les réflexes.
                                Notre club a formé de nombreuses équipes dont une équipe championne de France et des
                                joueurs individuels figurant parmis les meilleurs joueurs.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                <div className="flex items-start space-x-3">
                                    <Calendar className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Date de création</h4>
                                        <p className="text-gray-400">2016</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Users className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Membres</h4>
                                        <p className="text-gray-400">25+ actifs</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Trophy className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Classement</h4>
                                        <p className="text-gray-400">Champions de France</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white">Adresse</h4>
                                        <p className="text-gray-400">61 Rue de Fleurus, Le Havre</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                // src="https://images.unsplash.com/photo-1675310854573-c5c8e4089426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZyUyMHRlYW18ZW58MXx8fHwxNzU1MzQ1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                // src="../src/assets/Pour le site 2.jpg"
                                src="../src/assets/Cover.jpg"
                                alt="Competitive Gaming Team"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos qualifications</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                                        <Trophy className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-primary font-bold text-lg">{achievement.year}</span>
                                            <div className="flex space-x-1">
                                                {[...Array(achievement.star)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            {/* <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos salles</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {facilities.map((facility, index) => (
                            <Card
                                key={index}
                                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                                        <Target className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-primary">{facility.name}</h3>
                                        <p className="text-gray-300 mb-3">{facility.description}</p>
                                        <div className="text-sm text-primary">Capacité: {facility.capacity}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="relative">
                        <ImageWithFallback
                            // src="https://images.unsplash.com/photo-1620705914357-a9d11009e068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZ2FtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTUzNDU5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            src="../src/assets/Pour le site 2.jpg"
                            alt="Neon Gaming Technology"
                            className="w-full h-60 object-cover rounded-lg border border-primary/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg flex items-end p-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Technologie de pointe</h3>
                                <p className="text-gray-300">Entraînements avec suivi et analyse des performances !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Budget Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="pb-16">
                        <h1 className="text-4xl font-bold mb-6 text-primary">Cotisations à l'année</h1>
                        <p className="text-xl text-gray-300">
                            Une saison d'entraînement s'étend de Septembre à Juin. Les entraînement ont lieux les lundi
                            et dimanche soir. En début de semaine, plus axé sur le loisir, et le dimanche plus axé sur
                            la compétition.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">
                                Cotisation Loisir <span className="text-white">[400€]</span>
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Sans engagement</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Possibilité de payer au mois</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Pas de compétition, donc pas intégré à une équipe du club
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Encadré par des joueurs compétitifs expérimentés</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">[400€] dédié aux frais de location du matériel</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">
                                Cotisation Compétition <span className="text-white">[600€]</span>
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Engagement à l'année</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">Obligation de payer à l'année</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Participation à la compétition régionale, intégré à une équipe officielle
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        En plus des frais de location du matériel s'ajoute [200€] dédié aux frais de la
                                        marque pour organiser les compétitions
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                    <p className="text-gray-300">
                                        Le club, strucuté sous forme d'association, réclame également une participation
                                        financière [~50€] pour les déplacements de la saison
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slots Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos créneaux</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Pros</h3>
                            <p className="text-gray-400 mb-4">
                                Pour tout les joueurs suffisament expérimentés pour jouer en compétition, le club
                                propose un créneau le dimanche soir. Les pros peuvent venir s'entraîner librement sur le
                                créneau du lundi soir dans un cadre plus détendu.
                            </p>
                            <div className="text-sm text-primary">Dimanche 18h-21h + Lundi 18h-21h</div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary">Jeunes</h3>
                            <p className="text-gray-400 mb-4">
                                Pour les joueurs moins expérimentés, le club propose un créneau le lundi soir encadré
                                par les pros, entraîneurs du club. L'objectif est de découvrir la discipline et ses
                                règles, pour ensuite devenir un pro et rejoindre le créneau du dimanche.
                            </p>
                            <div className="text-sm text-primary">Lundi 18h-21h</div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Join Our Club Section */}
            <section className="py-20 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="text-center mb-12">
                        <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <UserPlus className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                            REJOINS NOTRE CLUB
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Prêt à rejoindre le club de Laser Game le plus compétitif de France ? Remplis le formulaire
                            ci-dessous et deviens le meilleur.
                        </p>
                    </div>

                    <Card className="bg-card/80 border-primary/30 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <GamepadIcon className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-bold text-primary">Informations du joueur</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="nickname" className="text-gray-300">
                                            Pseudo
                                        </Label>
                                        <Input
                                            id="nickname"
                                            placeholder="Ton pseudo en jeu"
                                            value={formData.nickname}
                                            onChange={(e) => handleInputChange("nickname", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="age" className="text-gray-300">
                                            Âge *
                                        </Label>
                                        <Select
                                            value={formData.age}
                                            onValueChange={(value) => handleInputChange("age", value)}>
                                            <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                <SelectValue placeholder="Sélectionne ta tranche d'âge" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-primary/20">
                                                <SelectItem value="-10">-10 ans</SelectItem>
                                                <SelectItem value="10-18">10-18 ans</SelectItem>
                                                <SelectItem value="19-24">19-24 years</SelectItem>
                                                <SelectItem value="25-30">25-30 years</SelectItem>
                                                <SelectItem value="31+">+31 ans</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-gray-300">
                                            Prénom *
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Ton prénom"
                                            value={formData.firstName}
                                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-gray-300">
                                            Nom *
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Ton nom"
                                            value={formData.lastName}
                                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-bold text-primary">Coordonnées</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">
                                            Adresse mail *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="mon.email@exemple.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-gray-300">
                                            Numéro de téléphone *
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="(+33) 6 12 34 56 78"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Gaming Information */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Target className="h-5 w-5 text-primary" />
                                    <h3 className="text-xl font-bold text-primary">Éxpérience de jeu</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="experience" className="text-gray-300">
                                            Niveau de jeu
                                        </Label>
                                        <Select
                                            value={formData.experience}
                                            onValueChange={(value) => handleInputChange("experience", value)}>
                                            <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                <SelectValue placeholder="Quesl est ton niveau de jeu ?" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-primary/20">
                                                <SelectItem value="beginner">
                                                    Débutant (j'ai déjà joué un peu)
                                                </SelectItem>
                                                <SelectItem value="intermediate">
                                                    Intermédiaire (j'ai déjà joué de nombreuses parties)
                                                </SelectItem>
                                                <SelectItem value="expert">
                                                    Expert (je joue régulièrement, je participe aux no-limits de mon
                                                    centre)
                                                </SelectItem>
                                                <SelectItem value="professional">
                                                    Joueur pro (joueur d'une équipe)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="availability" className="text-gray-300">
                                            Disponibilités
                                        </Label>
                                        <Select
                                            value={formData.availability}
                                            onValueChange={(value) => handleInputChange("availability", value)}>
                                            <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                <SelectValue placeholder="Quand peux-tu t'entraîner ?" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-primary/20">
                                                <SelectItem value="Sunday">Dimanche</SelectItem>
                                                <SelectItem value="monday">Lundi</SelectItem>
                                                <SelectItem value="flexible">Dimanche et Lundi</SelectItem>
                                                <SelectItem value="irregular">De manière irrégulière</SelectItem>
                                                <SelectItem value="limited">
                                                    Pas de disponibilité le dimanche ou le lundi
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="motivation" className="text-gray-300">
                                        Pourquoi souhaites-tu intégrer le CLASH ?
                                    </Label>
                                    <Textarea
                                        id="motivation"
                                        placeholder="Parlez-nous de votre motivation, de vos objectifs et de ce que vous espérez accomplir avec notre club..."
                                        value={formData.motivation}
                                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                                        className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500 min-h-[120px]"
                                        rows={5}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                                    <UserPlus className="h-5 w-5 mr-2" />
                                    REJOINS NOS ÉQUIPES
                                </Button>
                                <p className="text-sm text-gray-400 mt-4 text-center">
                                    En soumettant ce formulaire, vous acceptez d'être contacté par les représentants du
                                    CLASH au sujet de votre adhésion.
                                </p>
                            </div>
                        </form>
                    </Card>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Que se passe-t-il maintenant ?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Examen de ta candidature</h4>
                                <p className="text-gray-400 text-sm">
                                    Nous examinerons ta candidature dans les 72 heures.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Évaluation des compétences</h4>
                                <p className="text-gray-400 text-sm">
                                    Rejoins-nous pour une session d'évaluation ludique
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Bienvenue au CLASH</h4>
                                <p className="text-gray-400 text-sm">Commence ton parcours vers la gloire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Notre <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Offrir une expérience de laser game compétitive de classe nationale qui développe des athlètes,
                        forge le caractère et crée des souvenirs inoubliables. Nous nous efforçons d'être la destination
                        de choix pour les joueurs passionnés de Laser Game souhaitant se mesurer aux meilleurs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Excellence</h4>
                            <p className="text-gray-400">Viser le sommet en matière d'entraînement et de compétition</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Communauté</h4>
                            <p className="text-gray-400">Construire des relations solides et des amitiés durables</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Succès</h4>
                            <p className="text-gray-400">
                                Atteindre la victoire grâce au dévouement et au travail d'équipe
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
