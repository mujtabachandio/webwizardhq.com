'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ServiceGallery() {
  const [activeService, setActiveService] = useState('illustrations')

  const services = [
    {
      key: 'illustrations',
      title: 'Illustration & Graphic Design',
      description: 'Professional illustration and graphic design services',
      images: [
        '/Illustrations/1.jpg',
        '/Illustrations/2.jpg',
        '/Illustrations/3.jpg',
        '/Illustrations/4.jpg',
        '/Illustrations/5.jpg',
        '/Illustrations/6.jpg',
        '/Illustrations/7.jpg',
        '/Illustrations/8.png',
        '/Illustrations/9.jpg',
        '/Illustrations/10.jpg',
        '/Illustrations/11.jpg',
        '/Illustrations/12.jpg'
      ]
    },
    {
      key: 'logos',
      title: 'Logo Design',
      description: 'Creative and memorable brand identity designs',
      images: [
        '/Logos/design1.jpg',
        '/Logos/design2.jpg',
        '/Logos/design3.jpg',
        '/Logos/design4.jpg',
        '/Logos/design5.jpg',
        '/Logos/design6.jpg',
        '/Logos/design7.jpg',
        '/Logos/design8.jpg',
        '/Logos/design9.jpg',
        '/Logos/design10.jpg',
        '/Logos/design11.jpg',
        '/Logos/design12.jpg'
      ]
    },
    {
      key: 'websites',
      title: 'Website Design',
      description: 'Modern and responsive website solutions',
      images: [
        '/website/1.webp',
        '/website/2.webp',
        '/website/3.avif',
        '/website/5.avif',
        '/website/6.webp',
        '/website/7.webp'
      ]
    },
    {
      key: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns',
      images: [
        '/digital-marketing/1.webp',
        '/digital-marketing/2.webp',
        '/digital-marketing/3.avif',
        '/digital-marketing/4.avif',
        '/digital-marketing/5.webp',
        '/digital-marketing/6.avif',
        '/digital-marketing/7.avif'
      ]
    },
    {
      key: 'videos',
      title: '2D & 3D Animation',
      description: 'Creative animation and motion graphics',
      videos: [
        '/videos/1.mp4',
        '/videos/2.mp4',
        '/videos/3.mp4',
        '/videos/4.mp4'
      ]
    }
  ]

  const currentService = services.find(service => service.key === activeService)

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70 max-w-3xl mx-auto">
            Explore our portfolio of creative projects across all our service areas
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service) => (
            <motion.button
              key={service.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveService(service.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeService === service.key
                  ? 'bg-white/20 text-white border-white/30 shadow-lg'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {service.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {currentService?.title}
            </h3>
            <p className="text-white/70">
              {currentService?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentService?.images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image}
                    alt={`${currentService?.title} project ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}

            {currentService?.videos?.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
