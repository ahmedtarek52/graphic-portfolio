"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

// interface Service {
//   id: number
//   name: string
//   description: string
//   icon: string
//   color: string
// }

const services = [
  {
    id: 1,
    name: "Logo Design",
    description: "Craft unique and memorable brand identities",
    icon: "🎨",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 2,
    name: "Graphics",
    description: "Eye-catching visual content creation",
    icon: "✨",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    name: "Marketing",
    description: "Strategic campaigns that drive results",
    icon: "📈",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 4,
    name: "Branding",
    description: "Complete brand experience design",
    icon: "🎯",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 5,
    name: "UI/UX Design",
    description: "User-centered digital experiences",
    icon: "🖼️",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 6,
    name: "Content Creation",
    description: "Engaging stories and visuals",
    icon: "📸",
    color: "from-pink-500 to-orange-500",
  },
]

export default function ServicesShowcase() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-purple-600 mb-2">Our Services</p>
          <h2 className="text-5xl font-bold text-foreground mb-4">Creative Solutions for Your Brand</h2>
          <p className="text-xl text-muted-foreground">Transform your vision with our comprehensive design services</p>
        </div>

        {/* Services Grid with Center Focus */}
        <div className="relative h-[800px] flex items-center justify-center">
          {/* Center Showcase Card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
              <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 p-8 flex flex-col justify-between items-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-3xl font-bold mb-2">Premium Services</h3>
                  <p className="text-purple-100">Elevate your brand with world-class design</p>
                </div>
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all">
                  Explore All
                </button>
              </div>
            </div>
          </div>

          {/* Service Cards in Circle */}

          <div className="w-full h-full relative">
            {services.map((service, index) => {
              const angle = (index / services.length) * Math.PI * 2
              const radius = 400
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={service.id}
                  className="absolute left-1/2 top-1/2  transition-all duration-300"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  onMouseEnter={() => setSelectedService(service.id)}
                  onMouseLeave={() => setSelectedService(null)}
                >
                  <div
                    className={`relative w-48 h-56 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer transform ${
                      selectedService === service.id ? "scale-110 shadow-2xl" : "hover:scale-105"
                    }`}
                  >
                    {/* Card Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />

                    {/* Card Content */}
                    <div className="relative w-full h-full p-6 flex flex-col justify-between text-white z-10">
                      <div>
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      </div>

                      <div>
                        <p className="text-sm text-white/80 mb-4">{service.description}</p>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          Learn More <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}