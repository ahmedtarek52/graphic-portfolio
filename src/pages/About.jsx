import Banner from "../components/ui/Banner";
import aboutBanner from "../../public/assets/images/about-us.jpg";
import Badge from "../components/ui/Badge";
import { ArrowRight, Zap, Heart, Target, Users } from "lucide-react"
import Stats from "../components/home/Stats";
import ChooseUs from "../components/home/ChooseUs";

export default function About(){
     const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Visionary designer with 8+ years of experience in brand strategy and visual identity.",
      socials: ["twitter", "linkedin", "instagram"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Full-stack engineer passionate about creating seamless digital experiences.",
      socials: ["github", "linkedin", "twitter"],
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      bio: "Growth hacker with proven track record in scaling brands and campaigns.",
      socials: ["linkedin", "twitter"],
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Brand Specialist",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1169b7?w=400&h=400&fit=crop",
      bio: "Creative strategist focused on building authentic brand connections.",
      socials: ["instagram", "linkedin", "twitter"],
    },
  ]


  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push creative boundaries to deliver cutting-edge solutions that stand out.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is fueled by our genuine passion for creating meaningful impact.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in quality and attention to detail.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Teamwork and open communication are at the heart of everything we do.",
    },
  ]


  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "1500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
  ]
return (
<>
<Banner bg={aboutBanner} title={"About Us"} description={"Get matched with the right expert to keep building and marketing your project"}/>
                <section className="py-10 px-6 bg-secondary/50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, our agency was born from a simple belief: great design can change the world. What
                  started as a small team of three passionate designers has grown into a powerhouse of 50+ creative
                  professionals.
                </p>
                <p>
                  We've had the privilege of working with startups, Fortune 500 companies, and everyone in between. Each
                  project taught us something new, shaped our process, and deepened our commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have completed over 1,500 projects, won numerous international awards, and most
                  importantly, built lasting relationships with our clients based on trust and results.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Team collaboration"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </section>

         <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>

            <div className="relative">


              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <div key={idx} className="group text-center">
                      {/* Icon container with animated gradient background */}
                      <div className="relative w-20 h-20 mx-auto mb-6 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200/50 dark:border-purple-800/50 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-all flex items-center justify-center group-hover:scale-110">
                          <Icon className="w-10 h-10 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>

                      {/* Bottom accent line that appears on hover */}
                      <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
<Badge/>
<Stats/>
        {/* Team Section */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Talented individuals united by a common passion for creating outstanding design and digital solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-purple-400/50 transition-all hover:shadow-lg"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="w-8 h-8 rounded-full bg-secondary hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center text-sm"
                        >
                          {social.charAt(0).toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>






        
</>
)
}