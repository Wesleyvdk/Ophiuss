import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Trophy, Newspaper, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dark background with subtle pattern */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.webp?height=1080&width=1920')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/80"></div>

          {/* Diagonal lines overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #111 25%, transparent 25%, transparent 50%, #111 50%, #111 75%, transparent 75%, transparent)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Accent line */}
          <div className="absolute h-1 w-full top-0 left-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <h2 className="text-blue-500 font-medium mb-2 tracking-wider uppercase">
                European Rocket League Team
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
                OPHIUSSA <span className="text-blue-500">ESPORTS</span>
              </h1>

              <div className="h-1 w-24 bg-blue-500 mb-6"></div>

              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                A European community team with Portuguese heritage competing in
                the Rocket Soccar Confederation league.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg transition-all duration-300"
                >
                  <Link href="/team">Our Team</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-blue-700 hover:bg-gray-800 transition-all duration-300"
                >
                  Watch Us Play
                </Button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-80 h-80">
                {/* Decorative elements */}
                <div className="absolute -inset-4 border-2 border-gray-800 rounded-full rotate-45"></div>
                <div className="absolute -inset-8 border border-gray-800 rounded-full -rotate-12"></div>

                {/* Logo container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800">
                    <Image
                      src="/placeholder.webp?height=300&width=300"
                      alt="Ophiussa Esports Logo"
                      fill
                      className="object-cover"
                    />

                    {/* Overlay with team name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6">
                      <span className="text-xl font-bold text-white">
                        OPHIUSSA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              About Ophiussa
            </h2>
            <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ophiussa Esports is a European organization with Portuguese
                roots, founded in 2021 by NextFox, Deimo63, Wavey and Jesse.
                We've evolved into a diverse European team while honoring our
                Portuguese heritage, creating a competitive environment that
                brings together talent from across the continent.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Our team currently competes in the Rocket League community
                league RSC (Rocket Soccar Confederation), where we strive to
                build our skills and create a positive competitive environment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We're looking to expand our presence in more community leagues
                and potentially branch out into other game titles in the future,
                always maintaining our focus on community and player
                development.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.webp?height=600&width=800"
                alt="Team Photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-200 mt-2">
                  Building community through competitive gaming
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
              <p className="text-gray-400">
                Meet our talented roster of Rocket League players competing in
                the RSC community league.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-400"
              >
                Meet the team <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Achievements
              </h3>
              <p className="text-gray-400">
                Explore our tournament results and competitive achievements in
                community leagues.
              </p>
              <Link
                href="/achievements"
                className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-400"
              >
                View achievements <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border-l-4 border-blue-500 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Latest News</h3>
              <p className="text-gray-400">
                Stay updated with the latest news, match results, and
                announcements.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-400"
              >
                Read news <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Upcoming Matches
            </h2>
            <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((match) => (
              <div
                key={match}
                className="bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-gray-400 text-sm">
                        April 15, 2025
                      </span>
                    </div>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">
                      RSC League
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/placeholder.webp?height=60&width=60"
                        alt="Ophiussa Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <span className="text-white font-medium mt-2">
                        Ophiussa
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">
                        20:00 WEST
                      </div>
                      <div className="text-2xl font-bold text-white">VS</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/placeholder.webp?height=60&width=60"
                        alt="Opponent Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <span className="text-white font-medium mt-2">
                        Opponent
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-blue-500 text-blue-500 hover:bg-blue-950"
                  >
                    Match Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              variant="link"
              className="text-blue-500 hover:text-blue-400"
            >
              View All Matches <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Join the Ophiussa Community
          </h2>
          <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-8">
            Follow us on social media to stay updated with our latest matches,
            events, and announcements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-700 hover:bg-blue-800">Twitter</Button>
            <Button className="bg-blue-700 hover:bg-blue-800">Instagram</Button>
            <Button className="bg-blue-700 hover:bg-blue-800">Twitch</Button>
            <Button className="bg-blue-700 hover:bg-blue-800">Discord</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
