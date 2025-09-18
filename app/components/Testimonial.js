'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const testimonials = [
    {
      id: 1,
      text: "WebWizard transformed our digital presence completely. Their team delivered exactly what we needed and more.",
      name: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      id: 2,
      text: "I was hesitant to try WebWizard at first, but I'm so glad I did - it's exceeded all of my expectations.",
      name: "Michael Chen",
      role: "Product Designer"
    },
    {
      id: 3,
      text: "WebWizard stands out as the most user-friendly and effective solution I've ever used for web development.",
      name: "Alex Rodriguez",
      role: "Design Lead"
    },
    {
      id: 4,
      text: "The level of professionalism and attention to detail from WebWizard is unmatched in the industry.",
      name: "Emily Davis",
      role: "Marketing Director"
    },
    {
      id: 5,
      text: "Working with WebWizard was a game-changer for our business. Highly recommend their services!",
      name: "David Wilson",
      role: "Founder, StartupXYZ"
    },
    {
      id: 6,
      text: "WebWizard's expertise in modern web technologies helped us achieve our goals faster than expected.",
      name: "Lisa Thompson",
      role: "CTO, InnovateCorp"
    }
  ]

  return (
    <>
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-center font-bold text-white lg:text-left" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #e5e7eb 50%, #9ca3af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>What Our Clients Say</h2>
            {/* Slider controls */}
            <div className="flex items-center gap-8">
              <button 
                onClick={prevSlide}
                className="group flex justify-center items-center border border-solid border-white/30 w-12 h-12 transition-all duration-500 rounded-full hover:bg-white/20 backdrop-blur-sm hover:border-white/50"
              >
                <svg className="h-6 w-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
              <button 
                onClick={nextSlide}
                className="group flex justify-center items-center border border-solid border-white/30 w-12 h-12 transition-all duration-500 rounded-full hover:bg-white/20 backdrop-blur-sm hover:border-white/50"
              >
                <svg className="h-6 w-6 text-white group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
          </motion.div>
          
          {/* Carousel wrapper */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="group bg-white/10 backdrop-blur-xl border border-solid h-auto border-white/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-white/40 max-w-4xl mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-9 gap-2 text-yellow-400 transition-all duration-500 group-hover:text-white justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                      ))}
                        </div>
                    <p className="text-lg text-white/80 leading-8 mb-9 group-hover:text-white text-center">
                      "{testimonial.text}"
                    </p>
                    <div className="flex flex-col items-center justify-center">
                      <h5 className="text-white font-medium transition-all duration-500 group-hover:text-white text-center text-lg">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm leading-6 text-white/70 text-center">{testimonial.role}</span>
                            </div>
                  </motion.div>
                        </div>
              ))}
                    </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
                </div>
            </div>
        </div>
    </section>
  
  </>
  )
}

