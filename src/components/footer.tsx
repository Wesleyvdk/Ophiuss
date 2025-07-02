import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Twitch, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-blue-950/30 border-t border-gray-800/50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-50 blur-sm"></div>
                <Image
                  src="/placeholder.webp?height=50&width=50"
                  alt="Ophiussa Esports Logo"
                  width={50}
                  height={50}
                  className="rounded-full relative z-10"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                OPHIUSSA
              </span>
            </div>
            <p className="max-w-xs text-gray-400">
              A European esports organization with Portuguese heritage,
              competing in the RSC Rocket League community league.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/matches"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Matches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://discord.gg/S8djD63hGx"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ophiussa Esports. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
