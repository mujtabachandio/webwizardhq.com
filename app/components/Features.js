'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-base/7 font-semibold text-white/80">Our Services</h2>
            <h3 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent sm:text-5xl">
              Creative & Digital Services
            </h3>
          </motion.div>
          <motion.div 
            className="mt-10 grid gap-4 sm:gap-6 sm:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative lg:row-span-2"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-px rounded-2xl bg-white/10 backdrop-blur-xl lg:rounded-l-4xl border border-white/20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-4xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Illustration & Graphic Design</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Professional illustration and graphic design services to create stunning visuals, custom artwork, and memorable brand graphics that capture attention.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <Image
                      alt="Professional illustration and graphic design services showcasing custom artwork and brand graphics"
                      src="/Illustrations/1.jpg"
                      width={400}
                      height={300}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg outline outline-white/20 lg:rounded-l-4xl" />
            </motion.div>
            <motion.div 
              className="relative max-lg:row-start-1"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-px rounded-2xl bg-white/10 backdrop-blur-xl max-lg:rounded-t-4xl border border-white/20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-4xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">2D & 3D Animation</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Creative 2D and 3D animation services including logo animations, explainer videos, and motion graphics that bring your ideas to life.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-lg:max-w-xs rounded-lg"
                  >
                    <source src="/videos/1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg outline outline-white/20 max-lg:rounded-t-4xl" />
            </motion.div>
            <motion.div 
              className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-px rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Website Design</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Custom website development services to create engaging online experiences that convert visitors into customers and establish your digital presence.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    alt="Custom website design and development services for engaging online experiences"
                    src="/website/1.webp"
                    width={200}
                    height={152}
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg outline outline-white/20" />
            </motion.div>
            <motion.div 
              className="relative lg:row-span-2"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-px rounded-2xl bg-white/10 backdrop-blur-xl max-lg:rounded-b-4xl lg:rounded-r-4xl border border-white/20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-b-4xl lg:rounded-r-4xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Logo Design</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Professional logo design services to create memorable brand identities that capture your companys essence and make a lasting impression.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-white/5 backdrop-blur-sm outline outline-white/20">
                    <Image
                      alt="Professional logo design services showcasing brand identity and creative logo designs"
                      src="/Logos/design1.jpg"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg outline outline-white/20 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </motion.div>
          </motion.div>
          
          {/* Additional Service - Social Media & Digital Marketing */}
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative max-w-md w-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-px rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8">
                <div className="text-center mb-4">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Social Media & Digital Marketing</p>
                  <p className="mt-2 text-sm/6 text-white/70">
                    Comprehensive social media management and digital marketing strategies to boost your online presence and drive measurable results.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    alt="Social media and digital marketing services showcasing campaign strategies and online presence"
                    src="/digital-marketing/1.webp"
                    width={200}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }