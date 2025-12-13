import React, { useState } from 'react'
import Button from '../ui/Button'
export const HeroText = () => {
  const [activeCard, setActiveCard] = useState(1); // 1 for first card, 2 for second card

  const toggleCards = () => {
    setActiveCard(prev => prev === 1 ? 2 : 1);
  };

  return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
      {/* Background gradient accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-3">
                Create with ease
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Make an incredible{" "}
                <span className="purple-text">
                  experience
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
              Pre-designed by top talent. Just add your personal touch and transform your vision into reality.
            </p>

            
              <Button to="/contact" >
                Get Started
              </Button>
            

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">10K+ Users</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Trusted worldwide</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">4.9★ Rating</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">5000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {/* Gradient cards with glass effect */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main card with gradient */}
              <div 
                className={`absolute p-1 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500 rounded-3xl shadow-2xl transform transition-all duration-300 cursor-pointer ${
                  activeCard === 1 
                    ? '-rotate-6 hover:rotate-0 z-10' 
                    : 'rotate-12 scale-90 opacity-70 z-0'
                }`}
                onClick={toggleCards}
              >
                <div className='fkex justify-center items-center rounded-3xl overflow-hidden '>

               <img src="https://www.unisender.com/ru/blog/wp-content/uploads/2025/06/6-soda.png" alt="Design showcase example 1"  className='w-full h-full object-cover' />
                </div>
              </div>

              {/* Secondary card */}
              <div 
                className={`absolute p-1 bg-gradient-to-br from-blue-500 to-purple-700 rounded-3xl shadow-2xl transform transition-all duration-300 cursor-pointer ${
                  activeCard === 2 
                    ? 'rotate-6 hover:rotate-0 z-10' 
                    : '-rotate-12 scale-90 opacity-70 z-0'
                }`}
                onClick={toggleCards}
              >
                               <div className='fkex justify-center items-center rounded-3xl overflow-hidden '>

               <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlOV9oYW5kX2hvbGRfdXBfd2hpdGVfY2FuX3BhY2thZ2luZ193aXRoX21hdHRfdGV4dF8zZWFmOGRlMC1lZDRiLTQ4ZDktODZhYS01MTE2Y2MwODQ0MzQtcm03MTUtbW9ja3VwXzEuanBn.jpg" alt="Design showcase example 2"  className='w-full h-full object-cover' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}