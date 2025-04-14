"use client"

import { Suspense } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import TeamRoster from "@/components/team-roster"
import TeamPageSkeleton from "@/components/team-page-skeleton"

export default function TeamPage() {
  // Categories of team members
  const categories = ["Management", "Players", "Content Creators"]
  const [activeCategory, setActiveCategory] = useState("Management")

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
        bio: "Founder of Ophiussa Esports and veteran Rocket League player with over 5 years of competitive experience.",
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
        bio: "Co-founder and strategic mastermind behind the team's operations and competitive strategy.",
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
        bio: "Co-founder and team manager responsible for player development and team coordination.",
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
        bio: "Co-founder and creative director handling brand identity, design, and content strategy.",
        socials: {
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    Players: [
      {
        id: 5,
        name: "Player One",
        nickname: "P1",
        role: "Team Captain",
        country: "PT", // Portugal
        image: "/placeholder.webp?height=400&width=400",
        bio: "Team captain with exceptional game sense and leadership skills. Specializes in strategic plays.",
        socials: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        id: 6,
        name: "Player Two",
        nickname: "P2",
        role: "Offensive Specialist",
        country: "DE", // Germany
        image: "/placeholder.webp?height=400&width=400",
        bio: "Mechanical genius with a knack for scoring incredible goals. Known for aerial precision.",
        socials: {
          twitter: "#",
          twitch: "#",
          youtube: "#",
        },
      },
      {
        id: 7,
        name: "Player Three",
        nickname: "P3",
        role: "Defensive Anchor",
        country: "FR", // France
        image: "/placeholder.webp?height=400&width=400",
        bio: "Rock-solid defender with impeccable positioning. The last line of defense for the team.",
        socials: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        id: 8,
        name: "Player Four",
        nickname: "P4",
        role: "Substitute / Coach",
        country: "ES", // Spain
        image: "/placeholder.webp?height=400&width=400",
        bio: "Versatile player who can fill any role. Also serves as tactical coach during matches.",
        socials: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        id: 9,
        name: "Player Five",
        nickname: "P5",
        role: "Substitute",
        country: "UK", // United Kingdom
        image: "/placeholder.webp?height=400&width=400",
        bio: "Up-and-coming talent with incredible mechanical skills and game awareness.",
        socials: {
          twitter: "#",
          twitch: "#",
        },
      },
      {
        id: 10,
        name: "Player Six",
        nickname: "P6",
        role: "Substitute",
        country: "SE", // Sweden
        image: "/placeholder.webp?height=400&width=400",
        bio: "Promising rookie with a bright future. Known for clutch plays in high-pressure situations.",
        socials: {
          twitter: "#",
          twitch: "#",
          instagram: "#",
        },
      },
    ],
    "Content Creators": [
      {
        id: 11,
        name: "Creator One",
        nickname: "C1",
        role: "Video Producer",
        country: "UK", // United Kingdom
        image: "/placeholder.webp?height=400&width=400",
        bio: "Creates highlight reels and match recaps. Expert in video editing and storytelling.",
        socials: {
          twitter: "#",
          youtube: "#",
          instagram: "#",
        },
      },
      {
        id: 12,
        name: "Creator Two",
        nickname: "C2",
        role: "Streamer",
        country: "PT", // Portugal
        image: "/placeholder.webp?height=400&width=400",
        bio: "Full-time streamer representing Ophiussa. Known for entertaining gameplay and community engagement.",
        socials: {
          twitter: "#",
          twitch: "#",
          instagram: "#",
        },
      },
    ],
  }

  // State for featured member
  const [featuredMember, setFeaturedMember] = useState(teamMembers[activeCategory as keyof typeof teamMembers][0])

  // Get country flag emoji
  const getCountryFlag = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-blue-500 font-medium mb-2">Team</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the team!</h1>
            <p className="text-xl text-gray-300 mb-8">
              These are all of our wonderful members that are currently part of Ophiussa Esports.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-900/30 transition-all duration-300">
              APPLY HERE! →
            </Button>
          </div>
        </div>
      </div>

      {/* Team Roster with Suspense for loading state */}
      <Suspense fallback={<TeamPageSkeleton />}>
        <TeamRoster />
      </Suspense>
    </div>
  )
}
