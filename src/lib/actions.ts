"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"
import { unstable_cache } from "next/cache"

// Cache duration in seconds (5 minutes)
const CACHE_DURATION = 60 * 5

// Get all team members with caching
export const getTeamMembers = unstable_cache(
    async () => {
        try {
            const members = await prisma.teamMember.findMany({
                orderBy: {
                    displayOrder: "asc",
                },
            })

            return members
        } catch (error) {
            console.error("Error fetching team members:", error)
            return []
        }
    },
    ["team-members"],
    { revalidate: CACHE_DURATION },
)

// Get team members by category with caching
export const getTeamMembersByCategory = unstable_cache(
    async (category: string) => {
        try {
            const members = await prisma.teamMember.findMany({
                where: {
                    category,
                },
                orderBy: {
                    displayOrder: "asc",
                },
            })

            return members
        } catch (error) {
            console.error(`Error fetching ${category} members:`, error)
            return []
        }
    },
    ["team-members-by-category"],
    { revalidate: CACHE_DURATION },
)

// Add a new team member
export async function addTeamMember(data: Omit<TeamMemberData, "id">) {
    try {
        await prisma.teamMember.create({
            data,
        })

        // Revalidate the team page to show the new member
        revalidatePath("/team")
        return { success: true }
    } catch (error) {
        console.error("Error adding team member:", error)
        return { success: false, error }
    }
}

// Update an existing team member
export async function updateTeamMember(id: number, data: Partial<TeamMemberData>) {
    try {
        await prisma.teamMember.update({
            where: { id },
            data,
        })

        // Revalidate the team page to show the updated member
        revalidatePath("/team")
        return { success: true }
    } catch (error) {
        console.error("Error updating team member:", error)
        return { success: false, error }
    }
}

// Delete a team member
export async function deleteTeamMember(id: number) {
    try {
        await prisma.teamMember.delete({
            where: { id },
        })

        // Revalidate the team page to show the changes
        revalidatePath("/team")
        return { success: true }
    } catch (error) {
        console.error("Error deleting team member:", error)
        return { success: false, error }
    }
}

// Type for team member data
export type TeamMemberData = {
    id: number
    name: string
    nickname: string
    role: string
    country: string
    bio: string
    image: string
    category: string
    twitter?: string | null
    twitch?: string | null
    instagram?: string | null
    youtube?: string | null
    displayOrder: number
}
