"use client"

import { Suspense, useState } from "react"
import { Button } from "@/components/ui/button"
import TeamRoster from "@/components/team-roster"
import TeamPageSkeleton from "@/components/team-page-skeleton"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Twitch, Instagram, Youtube, ExternalLink, Users, Crown, Gamepad2, Video, Settings } from "lucide-react"

// Type definitions
type ManagementMember = {
    id: number
    name: string
    nickname?: string
    role: string
    country: string
    image: string
    description: string
    socials: Record<string, string>
}

type PlayerMember = {
    id: number
    name: string
    rosterName: string
    role: string
    country: string
    image: string
    socials: Record<string, string>
}

type ContentCreatorMember = {
    id: number
    name: string
    nickname?: string
    role: string
    country: string
    image: string
    socials: Record<string, string>
}

export default function TeamPage() {
    const discordInviteLink = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK || "https://discord.gg/S8djD63hGx"

    // Team members data
    const teamMembers = {
        Management: [
            {
                id: 1,
                name: "NextFox",
                nickname: "NF",
                role: "Founder / CEO",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                description: "Founder of Ophiussa Esports and veteran Rocket League player with over 5 years of competitive experience.",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    instagram: "#",
                    youtube: "#",
                },
            },
            {
                id: 2,
                name: "Deimo63",
                nickname: "D63",
                role: "Co-Founder / COO",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                description: "Co-founder and strategic mastermind behind the team's operations and competitive strategy.",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 3,
                name: "Wavey",
                nickname: "WVY",
                role: "Co-Founder / Team Manager",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                description: "Co-founder and team manager responsible for player development and team coordination.",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    instagram: "#",
                },
            },
            {
                id: 4,
                name: "Jesse",
                nickname: "JSE",
                role: "Co-Founder / Creative Director",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                description: "Co-founder and creative director handling brand identity, design, and content strategy.",
                socials: {
                    twitter: "#",
                    instagram: "#",
                },
            },
        ] as ManagementMember[],
        Players: [
            {
                id: 5,
                name: "Player One",
                rosterName: "Cobra",
                role: "Main",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 6,
                name: "Player Two",
                rosterName: "Cobra",
                role: "Main",
                country: "DE", // Germany
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    youtube: "#",
                },
            },
            {
                id: 7,
                name: "Player Three",
                rosterName: "Cobra",
                role: "Main",
                country: "FR", // France
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 8,
                name: "Player Four",
                rosterName: "Viper",
                role: "Main",
                country: "ES", // Spain
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 9,
                name: "Player Five",
                rosterName: "Viper",
                role: "Main",
                country: "UK", // United Kingdom
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 10,
                name: "Player Six",
                rosterName: "Viper",
                role: "Sub",
                country: "SE", // Sweden
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    instagram: "#",
                },
            },
            {
                id: 11,
                name: "Player Seven",
                rosterName: "Mamba",
                role: "Main",
                country: "IT", // Italy
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                },
            },
            {
                id: 12,
                name: "Player Eight",
                rosterName: "Mamba",
                role: "Coach",
                country: "NL", // Netherlands
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    youtube: "#",
                },
            },
        ] as PlayerMember[],
        "Content Creators": [
            {
                id: 13,
                name: "Creator One",
                nickname: "C1",
                role: "Video Producer",
                country: "UK", // United Kingdom
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    youtube: "#",
                    instagram: "#",
                },
            },
            {
                id: 14,
                name: "Creator Two",
                nickname: "C2",
                role: "Streamer",
                country: "PT", // Portugal
                image: "/placeholder.webp?height=400&width=400",
                socials: {
                    twitter: "#",
                    twitch: "#",
                    instagram: "#",
                },
            },
        ] as ContentCreatorMember[],
    }

    // Get country flag emoji
    const getCountryFlag = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt(0))
        return String.fromCodePoint(...codePoints)
    }

    // Get icon for category
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Management":
                return <Crown className="h-5 w-5" />
            case "Players":
                return <Gamepad2 className="h-5 w-5" />
            case "Content Creators":
                return <Video className="h-5 w-5" />
            default:
                return <Users className="h-5 w-5" />
        }
    }

    // Get social icon
    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "twitter":
                return <Twitter className="h-4 w-4" />
            case "twitch":
                return <Twitch className="h-4 w-4" />
            case "instagram":
                return <Instagram className="h-4 w-4" />
            case "youtube":
                return <Youtube className="h-4 w-4" />
            default:
                return <ExternalLink className="h-4 w-4" />
        }
    }

    // Get role color
    const getRoleColor = (role: string) => {
        switch (role.toLowerCase()) {
            case "main":
                return "text-green-400"
            case "sub":
                return "text-yellow-400"
            case "coach":
                return "text-purple-400"
            default:
                return "text-blue-400"
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">Team</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Team!</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            These are all of our wonderful members that are currently part of Ophiussa Esports.
                        </p>
                        <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-900/30 transition-all duration-300 text-lg px-8 py-3">
                                APPLY HERE! →
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {Object.entries(teamMembers).map(([category, members], categoryIndex) => (
                        <div key={category} className={`mb-20 ${categoryIndex !== 0 ? 'mt-32' : ''}`}>
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        {getCategoryIcon(category)}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                                            {category}
                                        </h2>
                                        <div className="h-1 w-16 bg-blue-500 mt-2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Team Members Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {members.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        {/* Member Image */}
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Country Flag */}
                                            <div className="absolute -top-1 -right-1 text-lg">
                                                {getCountryFlag(member.country)}
                                            </div>
                                        </div>

                                        {/* Member Info */}
                                        <div className="text-center mb-4">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                                {"nickname" in member && member.nickname && (
                                                    <span className="text-sm text-blue-400 font-medium">
                                                        {member.nickname}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Different layout for Management vs Players/Content Creators */}
                                            {category === "Management" ? (
                                                <>
                                                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">
                                                        {member.role}
                                                    </p>
                                                    <p className="text-gray-400 text-sm leading-relaxed">
                                                        {"description" in member ? member.description : ""}
                                                    </p>
                                                </>
                                            ) : category === "Players" ? (
                                                <>
                                                    <div className="flex items-center justify-center gap-2 mb-2">
                                                        <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                                                            {"rosterName" in member ? member.rosterName : ""}
                                                        </span>
                                                        <span className="text-gray-500">•</span>
                                                        <span className={`text-sm font-medium uppercase tracking-wider ${getRoleColor(member.role)}`}>
                                                            {member.role}
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">
                                                    {member.role}
                                                </p>
                                            )}
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex justify-center gap-3">
                                            {Object.entries(member.socials).map(([platform, url]) => (
                                                <a
                                                    key={platform}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                                >
                                                    {getSocialIcon(platform)}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-16 bg-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Want to Join Our Team?
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-8">
                        We're always looking for talented players, content creators, and passionate individuals
                        to join our growing European esports family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={discordInviteLink} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-900 transition-colors duration-300 text-lg px-8 py-3">
                                Apply Now
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-white text-blue-700 hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg px-8 py-3">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
