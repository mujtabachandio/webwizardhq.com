'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="relative isolate px-6 w-full max-w-7xl mx-auto lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-white/40 to-white/10 opacity-60 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
         <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-24 text-center">
           <motion.div 
             className="mb-8 flex justify-center"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <motion.div 
               className="relative rounded-full px-4 py-2 text-sm text-white/80 ring-1 ring-white/20 hover:ring-white/40 bg-white/5 backdrop-blur-sm"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
             >
               🚀 New: Get 20% off your first project!{' '}
               <a href="#contact" className="font-semibold text-white hover:text-gray-300 transition-colors">
                 <span aria-hidden="true" className="absolute inset-0" />
                 Contact us <span aria-hidden="true">&rarr;</span>
               </a>
             </motion.div>
           </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1 
              className="text-3xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl leading-tight px-4" 
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #e5e7eb 50%, #9ca3af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Creative Digital Solutions for Your Business Success
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg font-medium text-pretty text-white/80 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Your All-In-One Destination for Creative & Digital Success. We specialize in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing to help your business thrive.
            </motion.p>
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a
                href="#"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 text-base font-semibold shadow-lg hover:from-gray-100 hover:to-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get a Free Quote
              </motion.a>
              <motion.a 
                href="#" 
                className="w-full sm:w-auto text-base font-semibold text-white hover:text-gray-300 transition-colors border border-white/20 rounded-full px-8 py-4 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Start A Project <span aria-hidden="true" className="ml-2">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-white/40 to-white/10 opacity-60 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
