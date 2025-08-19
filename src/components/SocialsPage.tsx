import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Facebook, Music2, ThumbsUp, Calendar, Monitor, Newspaper } from "lucide-react";

export function SocialsPage() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        A PROPOS
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">???</p>
                </div>
            </section>

            {/* Explanation Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-primary">Notre communication</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Pour partager notre passion et dans le but de fédérer les joueurs et les fans, notre
                                association fait tout pour communiquer un maximum autour de notre discipline, ce qui
                                nous offre une belle visibilité. Au niveau local et national, notre club se démarque des
                                autres par sa forte présence dans les médias.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Notre objectif est de faire découvrir le Laser Game, de promouvoir notre club et de
                                partager notre passion avec le plus grand nombre. Nous croyons fermement que la
                                communication est essentielle pour atteindre ces objectifs.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <ThumbsUp className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Réseaux sociaux</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Monitor className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Télévision</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Calendar className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Événements</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Newspaper className="h-8 w-8 text-primary" />
                                    <span className="text-lg">Presse</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ImageWithFallback
                                src="../src/assets/playersCDF.jpg"
                                alt="Futuristic Gaming Arena"
                                className="w-full h-80 object-cover rounded-lg border border-primary/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Socials Network Section */}
            <section className="py-16 px-4 bg-secondary/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos réseaux sociaux</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <div className="flex justify-between mb-4 w-full">
                                <h3 className="text-xl font-bold mb-4 text-primary">Facebook</h3>
                                <Facebook className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-gray-400 mb-4">
                                Notre page Facebook est le lieu idéal pour suivre nos actualités, découvrir nos
                                événements et interagir avec notre communauté.
                            </p>
                            <div className="text-sm text-primary">
                                <a href="https://www.facebook.com/CLASHLGE/" target="_blank">
                                    Cliquez ici pour nous suivre !
                                </a>
                            </div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <div className="flex justify-between mb-4 w-full">
                                <h3 className="text-xl font-bold mb-4 text-primary">Instagram</h3>
                                <Instagram className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-gray-400 mb-4">
                                C'est sur notre compte Instagram que vous trouverez le plus de contenu, informations à
                                venir, résultats des équipes et joueurs, actualités, etc.
                            </p>
                            <div className="text-sm text-primary">
                                <a href="https://www.instagram.com/asso_clash/" target="_blank">
                                    Cliquez ici pour nous suivre !
                                </a>
                            </div>
                        </Card>

                        <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                            <div className="flex justify-between mb-4 w-full">
                                <h3 className="text-xl font-bold mb-4 text-primary">Tik Tok</h3>
                                <Music2 className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-gray-400 mb-4">
                                Sur notre Tik Tok, vous trouverez le contenu le plus divertissant, avec des vidéos
                                permettant de faire découvrir notre discipline au plus grand nombre.
                            </p>
                            <div className="text-sm text-primary ">
                                <a href="https://www.facebook.com/CLASHLGE/" target="_blank">
                                    Cliquez ici pour nous suivre !
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Budget Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="pb-16">
                        <h2 className="text-4xl font-bold text-center mb-12 text-primary">On parle de nous !</h2>
                        <p className="text-xl text-gray-300">
                            Notre association fait tout pour augmenter la visibilité du club et la découverte de la
                            discipline au plus grand nombre ! Pour cela nous avons eu l'occasion de collaborer avec
                            plusieurs médias, journaux, chaînes de télévision, radio, etc.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl">
                    <div className="pb-16">
                        <h3 className="text-xl font-bold mb-4 text-primary">France 3 Normandie</h3>
                        <p className="text-xl text-gray-300">
                            L'équipe de France 3 Normandie est venue nous rendre visite pour découvrir notre discipline
                            et interviewer nos joueurs. Le reportage a été réalisé en début de saison, et notre
                            association à bel et bien confirmer sa présence au championnat de France, puisqu'elle
                            termine championne de France. Vous pouvez retrouver le reportage en vidéo ci-dessous.
                        </p>
                        <iframe
                            width="1008"
                            height="567"
                            src="https://www.youtube.com/embed/lRXZq8snRc0?si=BFzNhqfk9SPEYl1U"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="justify-self-center rounded-xl my-8"></iframe>
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl">
                    <div className="pb-16">
                        <h3 className="text-xl font-bold mb-4 text-primary">BFM Normandie</h3>
                        <p className="text-xl text-gray-300">
                            L'équipe de France 3 Normandie est venue nous rendre visite pour découvrir notre discipline
                            et interviewer nos joueurs. Le reportage a été réalisé en début de saison, et notre
                            association à bel et bien confirmer sa présence au championnat de France, puisqu'elle
                            termine championne de France. Vous pouvez retrouver le reportage en vidéo ci-dessous.
                        </p>
                        <video className="w-full h-auto rounded-xl my-8" controls>
                            <source src="./src/assets/reportage_BFM.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </div>
    );
}
