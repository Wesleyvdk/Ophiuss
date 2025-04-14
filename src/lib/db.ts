import { neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '../../generated/prisma'
import ws from 'ws'

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
}

if (typeof window === "undefined") {
    const { neonConfig } = require('@neondatabase/serverless')
    neonConfig.webSocketConstructor = ws
}

// Initialize Prisma with Neon adapter
const adapter = new PrismaNeon({ connectionString })
export const prisma = new PrismaClient({ adapter })