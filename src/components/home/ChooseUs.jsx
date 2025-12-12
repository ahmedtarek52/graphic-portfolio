import React from 'react'

const ChooseUs = () => {
      const benefits = [
    {
      title: "Best Quality Assurance",
      description:
        "Every project undergoes rigorous quality checks to ensure pixel-perfect deliverables that exceed industry standards.",
      icon: "✓",
      highlight: "Zero Compromise",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "We respect your timeline. Projects are delivered on schedule without compromising on quality or attention to detail.",
      icon: "⚡",
      highlight: "On-Time Guarantee",
    },
    {
      title: "Accessibility First",
      description:
        "All our designs and developments follow WCAG guidelines, ensuring your products are accessible to everyone.",
      icon: "♿",
      highlight: "Inclusive Design",
    },
    {
      title: "Expert & Professional Team",
      description:
        "Our award-winning designers and developers have 8+ years of experience across diverse industries and markets.",
      icon: "👥",
      highlight: "Industry Veterans",
    },
    {
      title: "Affordable & Transparent Pricing",
      description:
        "No hidden fees. We offer flexible packages tailored to your budget with complete cost transparency upfront.",
      icon: "💰",
      highlight: "Clear Pricing",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is always available to assist you with questions, revisions, and technical support.",
      icon: "🎯",
      highlight: "Always Available",
    },
  ]
  return (
          
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-semibold text-foreground mb-12 text-center">Why Choose Us</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-neutral-800  flex flex-col"
              >
                <div className="absolute inset-0 rounded-2xl transition-all duration-300" />

                <div className="relative flex-1">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{benefit.description}</p>

                  <div className="bg-gradient-to-r from-[#9333ea]/10 to-[#0044ff]/10 rounded-lg p-3 text-center">
                    <p className="text-sm font-bold bg-gradient-to-r from-[#a855f7] to-[#0044ff] bg-clip-text text-transparent">
                      {benefit.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default ChooseUs