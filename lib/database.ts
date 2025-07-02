import 'server-only';
import { neon } from '@neondatabase/serverless';

// Database interface for TeamMember matching the Prisma schema
interface TeamMember {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  nickname: string;
  role: string;
  country: string;
  bio: string;
  image: string;
  category: string; // "Management", "Players", "Content Creators"
  twitter?: string | null;
  twitch?: string | null;
  instagram?: string | null;
  youtube?: string | null;
  display_order: number;
}

// Neon database connection
const sql = neon(process.env.DATABASE_URL!);

// Helper function to execute queries with proper error handling
export async function query(queryText: string, params: any[] = []) {
  try {
    // For parameterized queries, we'll handle them differently
    // For now, let's use a simpler approach with direct execution
    const result = await sql`${queryText}`;
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Create the table if it doesn't exist (for setup)
export async function createTeamMemberTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS team_members (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      name VARCHAR(255) NOT NULL,
      nickname VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      bio TEXT NOT NULL,
      image VARCHAR(500) NOT NULL,
      category VARCHAR(100) NOT NULL,
      twitter VARCHAR(255),
      twitch VARCHAR(255),
      instagram VARCHAR(255),
      youtube VARCHAR(255),
      display_order INTEGER DEFAULT 0
    );
    
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
    END;
    $$ language 'plpgsql';
    
    DROP TRIGGER IF EXISTS update_team_members_updated_at ON team_members;
    CREATE TRIGGER update_team_members_updated_at
        BEFORE UPDATE ON team_members
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
  `;
}

// Export types for use in components
export type { TeamMember }; 