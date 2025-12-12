

export default function Stats() {
  const stats = [
    {
      metric: "500+",
      description: "Projects Completed",
      company: "Various Industries",
    },
    {
      metric: "98%",
      description: "Client Satisfaction",
      company: "From Our Clients",
    },
    {
      metric: "150%",
      description: "Average ROI Increase",
      company: "For Our Partners",
    },
    {
      metric: "8+ Years",
      description: "Industry Experience",
      company: "Design & Marketing",
    },
  ]



  return (
    
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            The Success Stories
            <span className="block bg-gradient-to-r from-[#a855f7] via-[#9333ea] to-[#7e22ce] bg-clip-text text-transparent">
              Our Clients Achieve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover why leading brands choose us for their design, marketing, and creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl border border-neutral-800 "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9333ea]/0 to-[#0044ff]/0 group-hover:from-[#9333ea]/5 group-hover:to-[#0044ff]/5 transition-all duration-300" />

              <div className="relative">
                <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#a855f7] to-[#0044ff] bg-clip-text text-transparent mb-3">
                  {stat.metric}
                </h3>
                <p className="text-foreground font-semibold mb-2">{stat.description}</p>
                <p className="text-sm text-muted-foreground">{stat.company}</p>
              </div>
            </div>
          ))}
        </div>



        
      </div>
    </section>
  )
}