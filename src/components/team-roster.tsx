"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, Twitch, Instagram, Youtube } from "lucide-react"
import { getTeamMembers } from "@/lib/actions"
import type { TeamMemberData } from "@/lib/actions"

export default function TeamRoster() {
  // Categories of team members
  const categories = ["Management", "Players", "Content Creators"]
  const [activeCategory, setActiveCategory] = useState("Management")

  // State for team members and featured member
  const [teamMembers, setTeamMembers] = useState<Record<string, TeamMemberData[]>>({
    Management: [],
    Players: [],
    "Content Creators": [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [featuredMember, setFeaturedMember] = useState<TeamMemberData | null>(null)

  // Fetch team members on component mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setIsLoading(true)
        const members = await getTeamMembers()

        // Group members by category
        const groupedMembers = members.reduce(
          (acc: any, member: TeamMemberData) => {
            const category = member.category
            if (!acc[category]) {
              acc[category] = []
            }
            acc[category].push(member)
            return acc
          },
          {} as Record<string, TeamMemberData[]>,
        )

        setTeamMembers(groupedMembers)

        // Set initial featured member
        if (groupedMembers[activeCategory]?.length > 0) {
          setFeaturedMember(groupedMembers[activeCategory][0])
        }
      } catch (error) {
        console.error("Error fetching team members:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamMembers()
  }, [activeCategory])

  // Get country flag emoji
  const getCountryFlag = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (teamMembers[category]?.length > 0) {
      setFeaturedMember(teamMembers[category][0])
    } else {
      setFeaturedMember(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Team Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            variant={activeCategory === category ? "default" : "outline"}
            className={
              activeCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-lg px-8"
                : "border-blue-500 text-blue-500 hover:bg-blue-950 text-lg px-8"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Category Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold uppercase relative inline-block">
          {activeCategory}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
        </h2>
      </div>

      {isLoading ? (
        // Loading skeleton
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-900 rounded-lg p-6 animate-pulse">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-gray-800 rounded-full w-24 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-20 mx-auto mb-4"></div>
              <div className="flex justify-center gap-3">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : teamMembers[activeCategory]?.length > 0 ? (
        // Team Members Grid
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers[activeCategory].map((member) => (
            <div
              key={member.id}
              className={`relative bg-gradient-to-b ${
                member.id === featuredMember?.id ? "from-blue-900/30 to-black" : "from-gray-900 to-black"
              } rounded-lg overflow-hidden border border-gray-800/30 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              onClick={() => setFeaturedMember(member)}
            >
              <div className="p-6 flex flex-col items-center">
                {/* Country Flag */}
                <div className="absolute top-3 right-3 text-xl">
                  <span>{getCountryFlag(member.country)}</span>
                </div>

                {/* Circular Avatar */}
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.webp"} alt={member.name} fill className="object-cover" />
                  </div>
                  {/* Logo Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 opacity-70">
                      <Image
                        src="/placeholder.webp?height=100&width=100"
                        alt="Ophiussa Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Name Pill */}
                <div className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full mb-2 text-center">
                  {member.nickname}
                </div>

                {/* Role */}
                <div className="text-gray-400 text-sm uppercase tracking-wider text-center mb-4">{member.role}</div>

                {/* Social Icons */}
                <div className="flex justify-center gap-3">
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.twitch && (
                    <a
                      href={member.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitch className="h-4 w-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {member.youtube && (
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // No members found
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No team members found in this category.</p>
        </div>
      )}

      {/* Featured Member */}
      {featuredMember && (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[500px]">
                <Image
                  src={featuredMember.image || "/placeholder.webp"}
                  alt={featuredMember.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{getCountryFlag(featuredMember.country)}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl text-blue-400 font-medium">{featuredMember.name}</h3>
                    <h2 className="text-5xl font-bold mb-2">{featuredMember.nickname}</h2>
                    <p className="text-gray-400">{featuredMember.role}</p>
                  </div>
                  <p className="text-gray-300 mb-8">{featuredMember.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {featuredMember.twitter && (
                    <a
                      href={featuredMember.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  )}
                  {featuredMember.twitch && (
                    <a
                      href={featuredMember.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                      <Twitch className="h-6 w-6" />
                      <span className="sr-only">Twitch</span>
                    </a>
                  )}
                  {featuredMember.instagram && (
                    <a
                      href={featuredMember.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  )}
                  {featuredMember.youtube && (
                    <a
                      href={featuredMember.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Youtube className="h-6 w-6" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
