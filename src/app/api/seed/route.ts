import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

// This is a simple API route to seed your database with initial team members
// You should protect this in production or remove it after initial setup
export async function GET() {
    try {
        // Check if we already have team members to avoid duplicates
        const existingCount = await prisma.teamMember.count()

        if (existingCount > 0) {
            return NextResponse.json({
                message: "Database already seeded",
                count: existingCount,
            })
        }

        // Sample team members data
        const teamMembers = [
            {
                name: "NextFox",
                nickname: "Fox",
                role: "Founder",
                country: "PT",
                bio: "Founder of Ophiussa Esports and veteran Rocket League player with over 5 years of competitive experience.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Management",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                instagram: "https://instagram.com",
                displayOrder: 1,
            },
            {
                name: "Deimo63",
                nickname: "Deimo",
                role: "Co-Founder",
                country: "PT",
                bio: "Co-founder and strategic mastermind behind the team's operations and competitive strategy.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Management",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                displayOrder: 2,
            },
            {
                name: "ehzgodd",
                nickname: "ehz",
                role: "Manager",
                country: "NL",
                bio: "Manager of Ophiussa Esports and veteran Rocket League player with over 5 years of competitive experience.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Management",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                instagram: "https://instagram.com",
                displayOrder: 3,
            },
            {
                name: "Bale",
                nickname: "Bale",
                role: "Manager",
                country: "PT",
                bio: "Manager and strategic mastermind behind the team's operations and competitive strategy.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Management",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                displayOrder: 4,
            },
            // Add more team members here
            {
                name: "Player One",
                nickname: "P1",
                role: "Team Captain",
                country: "PT",
                bio: "Team captain with exceptional game sense and leadership skills. Specializes in strategic plays.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Players",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                displayOrder: 1,
            },
            {
                name: "Player Two",
                nickname: "P2",
                role: "Offensive Specialist",
                country: "DE",
                bio: "Mechanical genius with a knack for scoring incredible goals. Known for aerial precision.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Players",
                twitter: "https://twitter.com",
                twitch: "https://twitch.tv",
                youtube: "https://youtube.com",
                displayOrder: 2,
            },
            {
                name: "Creator One",
                nickname: "C1",
                role: "Video Producer",
                country: "UK",
                bio: "Creates highlight reels and match recaps. Expert in video editing and storytelling.",
                image: "/placeholder.webp?height=400&width=400",
                category: "Content Creators",
                twitter: "https://twitter.com",
                youtube: "https://youtube.com",
                instagram: "https://instagram.com",
                displayOrder: 1,
            },
        ]

        // Insert the team members
        const result = await prisma.teamMember.createMany({
            data: teamMembers,
        })

        return NextResponse.json({
            message: "Database seeded successfully",
            count: result.count,
        })
    } catch (error) {
        console.error("Error seeding database:", error)
        return NextResponse.json({ error: "Failed to seed database" }, { status: 500 })
    }
}
