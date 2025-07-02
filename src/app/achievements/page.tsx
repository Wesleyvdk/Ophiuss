import { Trophy, Medal, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AchievementsPage() {
    const achievements = [
        {
            id: 1,
            title: "RSC League Season 1",
            description: "Participated in the Rocket Soccar Confederation's inaugural season",
            date: "2024",
            rank: "Participation",
            icon: Trophy,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            id: 2,
            title: "Team Foundation",
            description: "Established Ophiussa Esports as a European organization",
            date: "2021",
            rank: "Milestone",
            icon: Star,
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
        },
        {
            id: 3,
            title: "Community Growth",
            description: "Expanded to include players from multiple European countries",
            date: "2022-2024",
            rank: "Achievement",
            icon: Medal,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">Our Journey</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Achievements</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Celebrating our milestones and competitive achievements in Rocket League
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((achievement) => {
                            const IconComponent = achievement.icon
                            return (
                                <div
                                    key={achievement.id}
                                    className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                                        <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <Calendar className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-400 text-sm">{achievement.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${achievement.bgColor} ${achievement.color}`}>
                                            {achievement.rank}
                                        </div>
                                        <p className="text-gray-300">{achievement.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Looking Ahead</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Our goals for the future include expanding into more competitive leagues,
                            developing our player roster, and building a stronger community presence.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            Join Our Journey
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 