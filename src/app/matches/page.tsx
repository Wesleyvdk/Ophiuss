import Image from "next/image"
import { Calendar, Clock, MapPin, Trophy, Users, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MatchesPage() {
    const upcomingMatches = [
        {
            id: 1,
            opponent: "Team Alpha",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-15",
            time: "20:00 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "upcoming"
        },
        {
            id: 2,
            opponent: "Beta Esports",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-18",
            time: "19:30 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "upcoming"
        },
        {
            id: 3,
            opponent: "Gamma Gaming",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-22",
            time: "21:00 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "upcoming"
        }
    ]

    const recentMatches = [
        {
            id: 4,
            opponent: "Delta Force",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-08",
            time: "20:00 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "completed",
            result: "W",
            score: "3-1"
        },
        {
            id: 5,
            opponent: "Epsilon Elite",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-05",
            time: "19:00 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "completed",
            result: "L",
            score: "1-3"
        },
        {
            id: 6,
            opponent: "Zeta Warriors",
            opponentLogo: "/placeholder.webp?height=60&width=60",
            date: "2025-01-02",
            time: "20:30 WEST",
            league: "RSC League",
            stage: "Group Stage",
            location: "Online",
            status: "completed",
            result: "W",
            score: "3-0"
        }
    ]

    const getResultColor = (result: string) => {
        if (result === "W") return "text-green-500 bg-green-500/10"
        if (result === "L") return "text-red-500 bg-red-500/10"
        return "text-yellow-500 bg-yellow-500/10"
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">Competition</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Matches</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Follow Ophiussa Esports through our competitive journey in RSC and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Matches */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Matches</h2>
                            <div className="h-1 w-24 bg-blue-500"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {upcomingMatches.map((match) => (
                                <div
                                    key={match.id}
                                    className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                            {match.league}
                                        </span>
                                        <span className="text-gray-400 text-sm">{match.stage}</span>
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/placeholder.webp?height=50&width=50"
                                                alt="Ophiussa Logo"
                                                width={50}
                                                height={50}
                                                className="rounded-full mb-2"
                                            />
                                            <span className="text-white font-medium text-sm">Ophiussa</span>
                                        </div>

                                        <div className="text-center flex-1 mx-6">
                                            <div className="text-3xl font-bold text-white mb-1">VS</div>
                                            <div className="text-yellow-500 text-sm font-medium">UPCOMING</div>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <Image
                                                src={match.opponentLogo}
                                                alt={`${match.opponent} Logo`}
                                                width={50}
                                                height={50}
                                                className="rounded-full mb-2"
                                            />
                                            <span className="text-white font-medium text-sm">{match.opponent}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(match.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{match.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{match.location}</span>
                                        </div>
                                    </div>

                                    <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-950">
                                        Match Details
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Matches */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Recent Results</h2>
                            <div className="h-1 w-24 bg-blue-500"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {recentMatches.map((match) => (
                                <div
                                    key={match.id}
                                    className="bg-gradient-to-b from-black to-gray-900 rounded-lg border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                                            {match.league}
                                        </span>
                                        <span className="text-gray-400 text-sm">{match.stage}</span>
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/placeholder.webp?height=50&width=50"
                                                alt="Ophiussa Logo"
                                                width={50}
                                                height={50}
                                                className="rounded-full mb-2"
                                            />
                                            <span className="text-white font-medium text-sm">Ophiussa</span>
                                        </div>

                                        <div className="text-center flex-1 mx-6">
                                            <div className="text-2xl font-bold text-white mb-1">{match.score}</div>
                                            <div className={`text-xs font-medium px-2 py-1 rounded ${getResultColor(match.result!)}`}>
                                                {match.result === "W" ? "VICTORY" : match.result === "L" ? "DEFEAT" : "DRAW"}
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <Image
                                                src={match.opponentLogo}
                                                alt={`${match.opponent} Logo`}
                                                width={50}
                                                height={50}
                                                className="rounded-full mb-2"
                                            />
                                            <span className="text-white font-medium text-sm">{match.opponent}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(match.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{match.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{match.location}</span>
                                        </div>
                                    </div>

                                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Highlights
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">Season Statistics</h2>
                            <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Trophy className="h-6 w-6 text-blue-500" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">8</div>
                                <div className="text-gray-400 text-sm">Matches Played</div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Trophy className="h-6 w-6 text-green-500" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">5</div>
                                <div className="text-gray-400 text-sm">Wins</div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Trophy className="h-6 w-6 text-red-500" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">3</div>
                                <div className="text-gray-400 text-sm">Losses</div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-6 text-center">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Users className="h-6 w-6 text-blue-500" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">62.5%</div>
                                <div className="text-gray-400 text-sm">Win Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Follow Our Journey
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-8">
                        Join our Discord community to get live match updates, discuss strategies,
                        and celebrate victories with fellow Ophiussa supporters.
                    </p>
                    <Button className="bg-white text-blue-900 hover:bg-gray-100">
                        Join Discord Community
                    </Button>
                </div>
            </section>
        </div>
    )
} 