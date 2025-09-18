'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CodeBracketIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Modern Development',
    description:
      'We use cutting-edge technologies like React, Next.js, and modern frameworks to build fast, scalable web applications that stand out.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Performance Optimized',
    description: 'Every project is optimized for speed, SEO, and user experience with industry best practices and modern optimization techniques.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Scalable Solutions',
    description: 'Our applications are built to grow with your business, using cloud infrastructure and scalable architecture patterns.',
    icon: CpuChipIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="lg:pt-4 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-white/80">About WebWizard</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent sm:text-5xl">
                Crafting Digital Excellence
              </p>
              <p className="mt-6 text-lg/8 text-white/70">
                We are passionate developers who transform ideas into stunning digital experiences. 
                Our team combines creativity with technical expertise to deliver exceptional web solutions 
                that drive business growth and user engagement.
              </p>
              <dl className="mt-10 max-w-xl space-y-6 text-base/7 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.name} 
                    className="relative pl-9 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-4 left-4 size-5 text-white/80" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-white/70 mt-2 block">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl"></div>
            <Image
              alt="WebWizard Development Process"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="relative w-3xl max-w-none rounded-2xl shadow-2xl ring-1 ring-white/20 bg-white/5 backdrop-blur-sm sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
