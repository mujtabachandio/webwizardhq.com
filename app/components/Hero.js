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
    <div className="bg-black h-screen flex items-center justify-center">

      <div className="relative isolate px-6 w-full lg:px-8">
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
         <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
           <motion.div 
             className="hidden sm:mb-8 sm:flex sm:justify-center"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <motion.div 
               className="relative rounded-full px-3 py-1 text-sm/6 text-white/80 ring-1 ring-white/20 hover:ring-white/40"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
             >
               Announcing our next round of funding.{' '}
               <a href="#" className="font-semibold text-white">
                 <span aria-hidden="true" className="absolute inset-0" />
                 Read more <span aria-hidden="true">&rarr;</span>
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
              className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl" 
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
              Data to enrich your online business
            </motion.h1>
            <motion.p 
              className="mt-8 text-lg font-medium text-pretty text-white/80 sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a
                href="#"
                className="rounded-md bg-gradient-to-r from-white to-gray-200 text-black px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:from-gray-100 hover:to-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get started
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn more <span aria-hidden="true">→</span>
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
