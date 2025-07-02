"use client"

import { Button } from "@/components/ui/button"
import { Users, MessageSquare, HelpCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    const discordInviteLink = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK || "https://discord.gg/S8djD63hGx"

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">Get in Touch</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to join Ophiussa Esports or have questions? Connect with us on Discord.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Users className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Join Our Team</h3>
                            <p className="text-gray-300 mb-4">Interested in playing for Ophiussa? Apply through our Discord community.</p>
                            <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                                    Apply Now
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <MessageSquare className="h-8 w-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Discord Community</h3>
                            <p className="text-gray-300 mb-4">Join our community server to chat, get updates, and connect with the team.</p>
                            <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-950 w-full">
                                    Join Server
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                                        <FileText className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Player Application</h3>
                                        <p className="text-gray-400 text-sm">Submit your application to join our roster</p>
                                    </div>
                                </div>
                                <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950 w-full">
                                        Apply Here
                                    </Button>
                                </Link>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4">
                                        <HelpCircle className="h-6 w-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">General Questions</h3>
                                        <p className="text-gray-400 text-sm">Ask questions about the team or organization</p>
                                    </div>
                                </div>
                                <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-950 w-full">
                                        Ask on Discord
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">How can I join Ophiussa Esports?</h3>
                                <p className="text-gray-300">We're always looking for talented players. Join our Discord server and check the application channels to submit your information and showcase your skills.</p>
                            </div>

                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">What leagues do you compete in?</h3>
                                <p className="text-gray-300">We primarily compete in the Rocket Soccar Confederation (RSC) and are looking to expand into other European community leagues.</p>
                            </div>

                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Do you accept players from all EU countries?</h3>
                                <p className="text-gray-300">Yes! While we have Portuguese roots, we welcome talented players from all European countries who share our values and competitive spirit.</p>
                            </div>

                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">What rank should I be to apply?</h3>
                                <p className="text-gray-300">We consider players of various skill levels. What matters most is your dedication, teamwork, and desire to improve. Join our Discord to learn about current openings.</p>
                            </div>

                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">How can I stay updated with team news?</h3>
                                <p className="text-gray-300">Join our Discord server for real-time updates, match announcements, and community discussions. You can also follow our social media channels.</p>
                            </div>

                            <div className="bg-black rounded-lg border border-gray-800 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Do you offer coaching or training programs?</h3>
                                <p className="text-gray-300">We focus on player development within our organization. Discuss training opportunities and mentorship possibilities with our team managers on Discord.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Join Ophiussa?
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-8">
                        Take the first step towards joining our European esports family. Connect with us on Discord and become part of the Ophiussa community.
                    </p>
                    <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3">
                            Join Discord Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
} 