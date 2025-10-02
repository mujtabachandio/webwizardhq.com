'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CodeBracketIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Customized Solutions',
    description:
      'We work closely with you, understand your goals, and deliver tailored solutions to help your brand shine.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Sector-Agnostic',
    description: 'Our services are not sector-specific like those of other agencies. We serve businesses across all industries.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Cost-Effective',
    description: 'Our mission is to maximize your financial resources while delivering concrete results and measurable ROI.',
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
              <h2 className="text-base/7 font-semibold text-white/80">About WebWizard Creative Agency</h2>
              <h3 className="mt-2 text-4xl font-semibold tracking-tight text-pretty bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent sm:text-5xl">
                Why We Are the Leading Creative & Digital Agency
              </h3>
              <p className="mt-6 text-lg/8 text-white/70">
                WebWizard is a premier creative agency specializing in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing. 
                Our expert team delivers comprehensive creative and digital solutions that drive business growth for companies of all sizes. 
                We work closely with you to understand your vision and deliver tailored creative solutions that help your brand stand out in the competitive market.
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
                    <dt className="font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-4 left-4 size-5 text-white/80" />
                      {feature.name}
                    </dt>
                    <dd className="text-white/70 mt-2">{feature.description}</dd>
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
              alt="WebWizard digital marketing agency team working on website design and digital marketing projects"
              src="/website/5.avif"
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
