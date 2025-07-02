import Image from "next/image"
import { Users, Trophy, Calendar, Star, Globe, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">About Us</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Ophiussa</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            European organization with Portuguese roots, building community through competitive gaming since 2021.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="py-16 bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                Ophiussa Esports is a European organization with Portuguese
                                roots, founded in 2021 by NextFox, Deimo63, Wavey and Jesse.
                                We've evolved into a diverse European team while honoring our
                                Portuguese heritage, creating a competitive environment that
                                brings together talent from across the continent.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                Our team currently competes in the Rocket League community
                                league RSC (Rocket Soccar Confederation), where we strive to
                                build our skills and create a positive competitive environment.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We're looking to expand our presence in more community leagues
                                and potentially branch out into other game titles in the future,
                                always maintaining our focus on community and player
                                development.
                            </p>
                        </div>
                        <div className="relative h-80 rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.webp?height=600&width=800"
                                alt="Team Photo"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                <p className="text-gray-200 mt-2">
                                    Building community through competitive gaming
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Values</h2>
                        <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 text-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Users className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Community First</h3>
                            <p className="text-gray-300">
                                We believe in fostering a supportive and inclusive community where every member can grow and thrive together.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 text-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Target className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Competitive Excellence</h3>
                            <p className="text-gray-300">
                                We strive for excellence in everything we do, constantly pushing ourselves to improve and achieve new heights.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 text-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Globe className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">European Unity</h3>
                            <p className="text-gray-300">
                                Celebrating our European diversity while honoring our Portuguese roots, bringing together talent from across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Journey</h2>
                        <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Star className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">2021 - Foundation</h3>
                                    <p className="text-gray-300">
                                        Ophiussa Esports was founded by NextFox, Deimo63, Wavey, and Jesse with a vision to create
                                        a competitive Portuguese team that could grow into a European organization.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Trophy className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">2022-2023 - Growth</h3>
                                    <p className="text-gray-300">
                                        Expanded our roster to include talented players from across Europe while maintaining our
                                        competitive focus and community values. Established our presence in RSC.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">2024-Present - Evolution</h3>
                                    <p className="text-gray-300">
                                        Continued competing in RSC while building our community infrastructure, developing
                                        our leaderboard systems, and preparing for expansion into additional leagues and game titles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-16 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Leadership</h2>
                        <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-blue-500 font-bold text-xl">NF</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">NextFox</h3>
                            <p className="text-blue-400 text-sm mb-2">Founder / CEO</p>
                            <p className="text-gray-300 text-sm">
                                Visionary leader with over 5 years of competitive Rocket League experience.
                            </p>
                        </div>

                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-blue-500 font-bold text-xl">D63</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Deimo63</h3>
                            <p className="text-blue-400 text-sm mb-2">Co-Founder / COO</p>
                            <p className="text-gray-300 text-sm">
                                Strategic mastermind behind team operations and competitive strategy.
                            </p>
                        </div>

                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-blue-500 font-bold text-xl">WVY</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Wavey</h3>
                            <p className="text-blue-400 text-sm mb-2">Co-Founder / Team Manager</p>
                            <p className="text-gray-300 text-sm">
                                Responsible for player development and team coordination.
                            </p>
                        </div>

                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-blue-500 font-bold text-xl">JSE</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Jesse</h3>
                            <p className="text-blue-400 text-sm mb-2">Co-Founder / Creative Director</p>
                            <p className="text-gray-300 text-sm">
                                Handles brand identity, design, and content strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-900">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                        Join Our Journey
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-8">
                        Interested in being part of Ophiussa Esports? We're always looking for talented players
                        and passionate community members to join our European family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/team">
                            <Button className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-900 transition-colors duration-300">
                                Meet the Team
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-white text-blue-700 hover:bg-white hover:text-blue-900 transition-all duration-300">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
} 