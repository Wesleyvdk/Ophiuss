import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NewsPage() {
    const news = [
        {
            id: 1,
            title: "New Season, New Opportunities",
            excerpt: "Ophiussa Esports prepares for the upcoming RSC season with renewed focus and team improvements.",
            content: "As we gear up for another exciting season in the Rocket Soccar Confederation...",
            author: "NextFox",
            date: "2024-12-15",
            readTime: "3 min read",
            image: "/placeholder.webp?height=400&width=600",
            category: "Team News"
        },
        {
            id: 2,
            title: "Team Roster Updates",
            excerpt: "Welcome our newest team members and see who's returning for the new season.",
            content: "We're excited to announce several updates to our competitive roster...",
            author: "Deimo63",
            date: "2024-12-10",
            readTime: "2 min read",
            image: "/placeholder.webp?height=400&width=600",
            category: "Roster"
        },
        {
            id: 3,
            title: "Community Growth Milestone",
            excerpt: "Celebrating our growing European community and the bonds we've built together.",
            content: "Since our founding in 2021, we've grown from a small Portuguese team...",
            author: "Wavey",
            date: "2024-12-05",
            readTime: "4 min read",
            image: "/placeholder.webp?height=400&width=600",
            category: "Community"
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-500 font-medium mb-2">Stay Updated</h2>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Keep up with the latest updates, announcements, and stories from Ophiussa Esports
                        </p>
                    </div>
                </div>
            </section>

            {/* News Articles */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {news.map((article) => (
                            <article
                                key={article.id}
                                className="bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(article.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            <span>{article.author}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                                    <p className="text-gray-300 mb-4">{article.excerpt}</p>

                                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
                                        Read More
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 bg-blue-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
                        <p className="text-blue-200 mb-8">
                            Get the latest news and updates delivered directly to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg border border-blue-600 bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <Button className="bg-blue-700 hover:bg-blue-600 whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 