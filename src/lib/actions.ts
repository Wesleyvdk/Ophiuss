"use server"

import { revalidatePath } from "next/cache"
import { neon } from '@neondatabase/serverless'
import type { TeamMember } from '../../lib/database'

const sql = neon(process.env.DATABASE_URL!)

export async function getTeamMembersByCategory(category: string): Promise<TeamMember[]> {
  try {
    const members = await sql`
      SELECT 
        id,
        created_at,
        updated_at,
        name,
        nickname,
        role,
        country,
        bio,
        image,
        category,
        twitter,
        twitch,
        instagram,
        youtube,
        display_order
      FROM team_members 
      WHERE category = ${category}
      ORDER BY display_order ASC, created_at ASC
    `
    
    return members as TeamMember[]
  } catch (error) {
    console.error("Error fetching team members:", error)
    throw new Error("Failed to fetch team members")
  }
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const members = await sql`
      SELECT 
        id,
        created_at,
        updated_at,
        name,
        nickname,
        role,
        country,
        bio,
        image,
        category,
        twitter,
        twitch,
        instagram,
        youtube,
        display_order
      FROM team_members 
      ORDER BY category, display_order ASC, created_at ASC
    `
    
    return members as TeamMember[]
  } catch (error) {
    console.error("Error fetching all team members:", error)
    throw new Error("Failed to fetch team members")
  }
}

export async function createTeamMember(data: {
  name: string
  nickname: string
  role: string
  country: string
  bio: string
  image: string
  category: string
  twitter?: string
  twitch?: string
  instagram?: string
  youtube?: string
  displayOrder?: number
}) {
  try {
    await sql`
      INSERT INTO team_members (
        name, nickname, role, country, bio, image, category, 
        twitter, twitch, instagram, youtube, display_order
      ) VALUES (
        ${data.name}, ${data.nickname}, ${data.role}, ${data.country}, 
        ${data.bio}, ${data.image}, ${data.category}, 
        ${data.twitter || null}, ${data.twitch || null}, 
        ${data.instagram || null}, ${data.youtube || null}, 
        ${data.displayOrder || 0}
      )
    `
    
    revalidatePath("/")
  } catch (error) {
    console.error("Error creating team member:", error)
    throw new Error("Failed to create team member")
  }
}

export async function updateTeamMember(
  id: number,
  data: {
    name?: string
    nickname?: string
    role?: string
    country?: string
    bio?: string
    image?: string
    category?: string
    twitter?: string | null
    twitch?: string | null
    instagram?: string | null
    youtube?: string | null
    displayOrder?: number
  }
) {
  try {
    await sql`
      UPDATE team_members 
      SET 
        name = COALESCE(${data.name}, name),
        nickname = COALESCE(${data.nickname}, nickname),
        role = COALESCE(${data.role}, role),
        country = COALESCE(${data.country}, country),
        bio = COALESCE(${data.bio}, bio),
        image = COALESCE(${data.image}, image),
        category = COALESCE(${data.category}, category),
        twitter = ${data.twitter !== undefined ? data.twitter : null},
        twitch = ${data.twitch !== undefined ? data.twitch : null},
        instagram = ${data.instagram !== undefined ? data.instagram : null},
        youtube = ${data.youtube !== undefined ? data.youtube : null},
        display_order = COALESCE(${data.displayOrder}, display_order),
        updated_at = NOW()
      WHERE id = ${id}
    `
    
    revalidatePath("/")
  } catch (error) {
    console.error("Error updating team member:", error)
    throw new Error("Failed to update team member")
  }
}

export async function deleteTeamMember(id: number) {
  try {
    await sql`DELETE FROM team_members WHERE id = ${id}`
    revalidatePath("/")
  } catch (error) {
    console.error("Error deleting team member:", error)
    throw new Error("Failed to delete team member")
  }
}
