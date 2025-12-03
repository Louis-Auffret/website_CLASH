import { Helmet } from "react-helmet";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import emailjs from "@emailjs/browser";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clubLogo from "../assets/Cover.webp";
import logo from "../assets/logo-clash.svg";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Users,
    Calendar,
    Zap,
    AlertCircle,
    CheckCircle,
    UserPlus,
    Target,
    GamepadIcon,
    ExternalLink,
} from "lucide-react";

export function ContactPage() {
    const navigate = useNavigate();
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

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            nickname: formData.nickname,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            age: formData.age,
            experience: formData.experience,
            availability: formData.availability,
            motivation: formData.motivation,
        };

        emailjs
            .send(
                "service_vgndb0b", // Remplace par ton service ID EmailJS
                "template_63890pt", // Remplace par ton template ID EmailJS
                templateParams,
                "adnlV6O9Ixksj_ouo" // Remplace par ta clé publique EmailJS
            )
            .then((response) => {
                console.log("Email envoyé !", response.status, response.text);
                alert("Votre formulaire a été envoyé avec succès !");
                setFormData({
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
            })
            .catch((err) => {
                console.error("Erreur lors de l'envoi :", err);
                alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
            });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Téléphone",
            primary: "06 74 18 20 45",
            secondary: "",
            description: "Disponible tous les jours",
        },
        {
            icon: Mail,
            title: "Email",
            primary: "asso.clash.lh@gmail.com",
            secondary: "",
            description: "Nous répondons sous 24 heures",
        },
        {
            icon: MapPin,
            title: "Adresse",
            primary: "61 Rue de Fleurus, Le Havre",
            secondary: "Laser Game Evolution Le Havre",
            description: "Dans les locaux du centre LGE",
        },
        {
            icon: Clock,
            title: "Horaires",
            primary: "Lun-Ven: 13h-20h",
            secondary: "Sam-Dim: 13h-18h",
            description: "Sur place lundi et dimanche : 18h-21h",
        },
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>Contact – Laser Game Evolution Le Havre | CLASH</title>
                <meta
                    name="description"
                    content="Contactez Asso-Clash, association de laser game evolution au Havre, pour rejoindre nos équipes ou obtenir des informations sur les événements."
                />
                <meta property="og:title" content="Contact – Laser Game Evolution Le Havre | CLASH" />
                <meta
                    property="og:description"
                    content="Envoyez-nous un message pour rejoindre Asso-Clash ou participer à nos tournois de laser game au Havre."
                />
                <meta property="og:url" content="https://asso-clash.fr/contact" />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageSquare className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        NOUS CONTACTER
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Envie de rejoindre le club ? Vous voulez essayer la compétition ? Vous avez des questions sur la
                        discipline, l’association ou autre ? Contactez-nous par mail ou téléphone, nous vous répondrons
                        avec précision.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 pb-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <section className="pt-20 pb-10 lg:pb-20 px-4 relative">
                            <div className="container mx-auto max-w-4xl relative z-10">
                                <Card className="bg-card/80 border-primary/30 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-8">
                                            <div className="bg-primary/20 p-3 rounded-lg">
                                                <Send className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white">
                                                    Envoyez nous votre candidature
                                                </h2>
                                                <p className="text-gray-400">Nous vous répondons sous 48 heures</p>
                                            </div>
                                        </div>
                                        {/* Personal Information */}
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2 mb-4">
                                                <GamepadIcon className="h-5 w-5 text-primary" />
                                                <h3 className="text-xl font-bold text-primary">
                                                    Informations du joueur
                                                </h3>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="nickname" className="text-gray-300">
                                                        Pseudo *
                                                    </Label>
                                                    <Input
                                                        id="nickname"
                                                        placeholder="Ton pseudo en jeu"
                                                        value={formData.nickname}
                                                        onChange={(e) => handleInputChange("nickname", e.target.value)}
                                                        className="bg-input border-primary/20 focus:border-primary/50 text-white placeholder:text-gray-500"
                                                        required
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
                                                            <SelectItem value="19-24">19-24 ans</SelectItem>
                                                            <SelectItem value="25-30">25-30 ans</SelectItem>
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
                                                        onValueChange={(value) =>
                                                            handleInputChange("experience", value)
                                                        }>
                                                        <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                            <SelectValue placeholder="Quesl est ton niveau de jeu ?" />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-card border-primary/20">
                                                            <SelectItem value="Débutant">
                                                                Débutant (j’ai déjà joué un peu)
                                                            </SelectItem>
                                                            <SelectItem value="Intermédiaire">
                                                                Intermédiaire (j’ai déjà joué de nombreuses parties)
                                                            </SelectItem>
                                                            <SelectItem value="Expert">
                                                                Expert (je joue régulièrement, je participe aux
                                                                no-limits de mon centre)
                                                            </SelectItem>
                                                            <SelectItem value="Joueur Pro">
                                                                Joueur pro (joueur d’une équipe)
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
                                                        onValueChange={(value) =>
                                                            handleInputChange("availability", value)
                                                        }>
                                                        <SelectTrigger className="bg-input border-primary/20 focus:border-primary/50 text-white">
                                                            <SelectValue placeholder="Quand peux-tu t’entraîner ?" />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-card border-primary/20">
                                                            <SelectItem value="Dimanche">Dimanche</SelectItem>
                                                            <SelectItem value="Lundi">Lundi</SelectItem>
                                                            <SelectItem value="Dimanche et Lundi">
                                                                Dimanche et Lundi
                                                            </SelectItem>
                                                            <SelectItem value="De manière irrégulière">
                                                                De manière irrégulière
                                                            </SelectItem>
                                                            <SelectItem value="Pas de disponibilité le dimanche ou le lundi">
                                                                Pas de disponibilité le dimanche ou le lundi
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="motivation" className="text-gray-300">
                                                    Pourquoi souhaites-tu intégrer le CLASH ?
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
                                                En soumettant ce formulaire, vous acceptez d’être contacté par les
                                                représentants du CLASH au sujet de votre adhésion.
                                            </p>
                                        </div>
                                    </form>
                                </Card>

                                {/* Additional Info */}
                                <div className="mt-12 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-8">
                                        Que se passe-t-il maintenant ?
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-primary font-bold">1</span>
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Examen de ta candidature</h4>
                                            <p className="text-gray-400 text-sm">
                                                Nous examinerons ta candidature dans les 48 heures.
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-primary font-bold">2</span>
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Évaluation des compétences</h4>
                                            <p className="text-gray-400 text-sm">
                                                Rejoins-nous pour une session d’évaluation ludique
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-primary font-bold">3</span>
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Bienvenue au CLASH</h4>
                                            <p className="text-gray-400 text-sm">
                                                Commence ton parcours vers la gloire
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Contact Information Sidebar */}
                    <div className="space-y-6 lg:pt-20">
                        {/* Contact Details */}
                        <Card className="bg-card/80 border-primary/30 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                Nous contacter
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                                                <IconComponent className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-white mb-1">{info.title}</h4>
                                                <p className="text-primary text-sm font-mono">{info.primary}</p>
                                                <p className="text-gray-300 text-sm">{info.secondary}</p>
                                                <p className="text-gray-400 text-xs mt-1">{info.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>

                        {/* Quick Contact Options */}
                        <Card className="bg-card/80 border-primary/30 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                                <Zap className="h-5 w-5 mr-2" />
                                Actions rapides
                            </h3>

                            <div className="space-y-4">
                                <Button
                                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                                    onClick={() => (window.location.href = "tel:0674182045")}>
                                    <Phone className="h-4 w-4 mr-2" />
                                    Appeller maintenant
                                </Button>

                                <Button
                                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                                    onClick={() => (window.location.href = "mailto:asso.clash.lh@gmail.com")}>
                                    <Mail className="h-4 w-4 mr-2" />
                                    Envoyer un email
                                </Button>

                                <Button
                                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                                    onClick={() =>
                                        window.open(
                                            "https://maps.google.com/?q=Laser+Game+Evolution+Le+Havre",
                                            "_blank"
                                        )
                                    }>
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Obtenir l’adresse
                                </Button>
                            </div>
                        </Card>

                        {/* Emergency Contact */}
                        {/* <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm p-6 hover:border-destructive/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center">
                                <AlertCircle className="h-5 w-5 mr-2" />
                                Emergency Contact
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                For urgent matters during tournaments or facility emergencies:
                            </p>
                            <div className="space-y-2">
                                <p className="text-destructive font-mono">Emergency: +1 (555) 911-CLASH</p>
                                <p className="text-gray-400 text-xs">Available 24/7 during events</p>
                            </div>
                        </Card> */}

                        {/* Arena Image */}
                        <div className="relative cursor-pointer overflow-hidden group rounded-lg border border-primary/20">
                            <a onClick={() => navigate("/laser-game")}>
                                <ImageWithFallback
                                    src={clubLogo}
                                    alt="CLASH Gaming Center"
                                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end p-4">
                                    <div className="flex items-center">
                                        <h4 className="font-bold text-primary">Notre club</h4>
                                        <ExternalLink className="h-4 w-4 ml-2" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Press Kit Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Kit de Presse</h2>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            onClick={() => {
                                // Création d'un lien temporaire pour le téléchargement
                                const link = document.createElement("a");
                                link.href = logo; // Remplacez par le chemin réel de votre fichier
                                link.download = "logo-CLASH.svg"; // Nom du fichier téléchargé
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                            Télécharger le logo CLASH
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* <section className="py-16 px-4 bg-secondary/30">
                <div className="container mx-auto max-w-4xl flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Foire aux questions</h2>

                    <div className="grid md:grid-cols-2 gap-8 pb-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="font-bold text-white mb-3">Comment rejoindre le CLASH ?</h3>
                            <p className="text-gray-400 text-sm">
                                Viens faire une session d’essais avec nos équipes le lundi ou dimanche. En fonction de
                                ton niveau, nous te redirigerons vers l’entraînement le plus adapté. Tout en te
                                conseillant par rapport à tes envies.
                            </p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="font-bold text-white mb-3">
                                Puis-je réserver le centre en passant par vous ?
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Non ! Notre association loue les locaux au propriétaire pour pouvoir y jouer. Nous ne
                                sommes pas affiliés à la marque Laser Game Evolution® ou à la direction du centre Laser
                                Game Evolution Le Havre®.
                            </p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="font-bold text-white mb-3">Proposez-vous des cours particuliers ?</h3>
                            <p className="text-gray-400 text-sm">
                                Oui ! Nous proposons des programmes personnalisés pour tous les niveaux, des débutants
                                complets aux compétiteurs professionnels. Pour tes premières sessions, tu seras encadré
                                par un coach, seul ou avec les nouvelles recrues.
                            </p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <h3 className="font-bold text-white mb-3">Ai-je besoins d’équipement ?</h3>
                            <p className="text-gray-400 text-sm">
                                Nous te conseillons de prendre un short et des basquettes (éviter les semelles lisses).
                                De quoi attacher correctement tes cheveux s’ils sont longs. Certains joueurs apprécient
                                jouer avec des coudières ou genouillères souples (type volley).
                            </p>
                        </Card>
                    </div>

                    <Button
                        size="lg"
                        onClick={() => navigate("/laser-game")}
                        className="bg-primary text-black hover:bg-primary/90 text-lg px-12 py-4 mx-auto">
                        En apprendre plus sur notre discipline
                    </Button>
                </div>
            </section> */}
        </div>
    );
}
