import { NextRequest, NextResponse } from "next/server"
import { neon } from '@neondatabase/serverless'
import { createTeamMemberTable } from '../../../../lib/database'

const sql = neon(process.env.DATABASE_URL!)

// This is a simple API route to seed your database with initial team members
// You should protect this in production or remove it after initial setup
export async function POST(request: NextRequest) {
    try {
        // First, ensure the table exists
        await createTeamMemberTable()

        // Check if we already have data
        const existingCount = await sql`SELECT COUNT(*) as count FROM team_members`
        
        if (existingCount[0].count > 0) {
            return NextResponse.json(
                { message: "Database already seeded" },
                { status: 200 }
            )
        }

        // Sample team data
        const teamMembers = [
            // Management
            {
                name: "João Silva",
                nickname: "NextFox",
                role: "Team Manager",
                country: "Portugal",
                bio: "Experienced team manager with a passion for competitive Rocket League. Leads our strategic initiatives and player development programs.",
                image: "/team/placeholder.webp",
                category: "Management",
                twitter: "https://twitter.com/nextfox",
                twitch: null,
                instagram: null,
                youtube: null,
                displayOrder: 1
            },
            {
                name: "Maria Santos",
                nickname: "Deimo63",
                role: "Operations Director",
                country: "Portugal",
                bio: "Oversees daily operations and ensures smooth coordination between all team divisions. Former competitive player with deep game knowledge.",
                image: "/team/placeholder.webp",
                category: "Management",
                twitter: null,
                twitch: "https://twitch.tv/deimo63",
                instagram: null,
                youtube: null,
                displayOrder: 2
            },

            // Players
            {
                name: "Carlos Rodriguez",
                nickname: "Wavey",
                role: "Captain",
                country: "Spain",
                bio: "Team captain and primary striker. Known for incredible aerial plays and clutch performances in crucial matches.",
                image: "/team/placeholder.webp",
                category: "Players",
                twitter: null,
                twitch: "https://twitch.tv/wavey_rl",
                instagram: null,
                youtube: null,
                displayOrder: 1
            },
            {
                name: "Alessandro Rossi",
                nickname: "ShadowStrike",
                role: "Midfielder",
                country: "Italy",
                bio: "Versatile midfielder with exceptional game sense. Specializes in both offensive plays and defensive rotations.",
                image: "/team/placeholder.webp",
                category: "Players",
                twitter: "https://twitter.com/shadowstrike_rl",
                twitch: null,
                instagram: null,
                youtube: null,
                displayOrder: 2
            },
            {
                name: "Pierre Dubois",
                nickname: "Fortress",
                role: "Goalkeeper",
                country: "France",
                bio: "Reliable goalkeeper with incredible save consistency. The backbone of our defensive strategies.",
                image: "/team/placeholder.webp",
                category: "Players",
                twitter: null,
                twitch: null,
                instagram: "https://instagram.com/fortress_rl",
                youtube: null,
                displayOrder: 3
            },

            // Content Creators
            {
                name: "Ana Costa",
                nickname: "StreamQueen",
                role: "Content Creator",
                country: "Portugal",
                bio: "Creative content producer specializing in highlight reels and educational Rocket League content for our community.",
                image: "/team/placeholder.webp",
                category: "Content Creators",
                twitter: "https://twitter.com/streamqueen",
                twitch: "https://twitch.tv/streamqueen",
                instagram: "https://instagram.com/streamqueen_rl",
                youtube: "https://youtube.com/c/streamqueen",
                displayOrder: 1
            }
        ]

        // Insert all team members
        for (const member of teamMembers) {
            await sql`
                INSERT INTO team_members (
                    name, nickname, role, country, bio, image, category, 
                    twitter, twitch, instagram, youtube, display_order
                ) VALUES (
                    ${member.name}, ${member.nickname}, ${member.role}, ${member.country}, 
                    ${member.bio}, ${member.image}, ${member.category}, 
                    ${member.twitter}, ${member.twitch}, ${member.instagram}, 
                    ${member.youtube}, ${member.displayOrder}
                )
            `
        }

        return NextResponse.json(
            { 
                message: "Database seeded successfully", 
                count: teamMembers.length 
            },
            { status: 200 }
        )
    } catch (error) {
        console.error("Seeding error:", error)
        return NextResponse.json(
            { error: "Failed to seed database" },
            { status: 500 }
        )
    }
}
