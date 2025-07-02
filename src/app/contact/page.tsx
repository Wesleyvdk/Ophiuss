"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Gamepad2, MapPin, Phone, Mail, MessageSquare, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-blue-500 font-medium mb-2">Get in Touch</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to join Ophiussa Esports or have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Join Our Team</h3>
              <p className="text-gray-300 mb-4">Interested in playing for Ophiussa?</p>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Apply Now
              </Button>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discord</h3>
              <p className="text-gray-300 mb-4">Join our community server</p>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-950 w-full">
                Join Server
              </Button>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">Send us a direct message</p>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950 w-full">
                Send Email
              </Button>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300 mb-4">European organization</p>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-950 w-full">
                Learn More
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Player Application</option>
                    <option>Partnership Inquiry</option>
                    <option>General Question</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about yourself and what you're interested in..."
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-black rounded-lg border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-2">How can I join Ophiussa Esports?</h3>
                <p className="text-gray-300">We're always looking for talented players. Reach out through our Discord or contact form, and we'll assess your skills and fit with our team culture.</p>
              </div>

              <div className="bg-black rounded-lg border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-2">What leagues do you compete in?</h3>
                <p className="text-gray-300">We primarily compete in the Rocket Soccar Confederation (RSC) and are looking to expand into other European community leagues.</p>
              </div>

              <div className="bg-black rounded-lg border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Do you accept players from all EU countries?</h3>
                <p className="text-gray-300">Yes! While we have Portuguese roots, we welcome talented players from all European countries who share our values and competitive spirit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

