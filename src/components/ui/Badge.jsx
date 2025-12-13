import React from 'react'
import { ArrowRight } from "lucide-react"
import Button from './Button'

const Badge = ( {title, description ,btnText , className = ""}) => {
  const baseClasse = "absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 via-transparent to-[#0044ff]/20";
  return (
    <div className="relative ">
          <div className={`${baseClasse} ${className}`} />

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">{title || "Ready to Achieve Your Success Story?"}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description || "Join countless satisfied clients who have transformed their brands with our expert design and marketing services."}
            </p>

            <Button size="lg" className="inline-flex items-center gap-2 space-x-2" to="/contact">
              {btnText || "Get Started Now"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
  )
}

export default Badge