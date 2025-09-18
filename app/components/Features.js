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
            <h2 className="text-center text-base/7 font-semibold text-white/80">WebWizard Features</h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent sm:text-5xl">
              Everything you need for modern web development
            </p>
          </motion.div>
          <motion.div 
            className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2"
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Responsive Design</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Create stunning websites that look perfect on every device, from mobile phones to desktop computers.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <Image
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Lightning Fast</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Optimized for speed with cutting-edge technologies and best practices for maximum performance.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <Image
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    width={300}
                    height={200}
                    className="w-full max-lg:max-w-xs"
                  />
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Secure & Reliable</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Enterprise-grade security with SSL encryption, secure hosting, and regular security updates.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Modern Tech Stack</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white/70 max-lg:text-center">
                    Built with the latest technologies including React, Next.js, and modern development tools.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-white/5 backdrop-blur-sm outline outline-white/20">
                    <div className="flex bg-white/10 outline outline-white/10">
                      <div className="-mb-px flex text-sm/6 font-medium text-white/80">
                        <div className="border-r border-b border-r-white/20 border-b-white/30 bg-white/10 px-4 py-2 text-white">
                          components/Header.js
                        </div>
                        <div className="border-r border-white/10 px-4 py-2">app/page.js</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14 text-white/70 text-sm">
                      <div className="space-y-2">
                        <div><span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-green-400">&apos;react&apos;</span></div>
                        <div><span className="text-blue-400">import</span> <span className="text-yellow-400">{'{'}</span> motion <span className="text-yellow-400">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">&apos;framer-motion&apos;</span></div>
                        <div className="pt-2"><span className="text-purple-400">const</span> Header <span className="text-yellow-400">=</span> <span className="text-purple-400">()</span> <span className="text-yellow-400">=&gt;</span> <span className="text-yellow-400">{'{'}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-lg outline outline-white/20 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }