'use client'
import { motion } from 'framer-motion'
import { 
  LightBulbIcon, 
  PencilIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Process() {
  const processes = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your vision, goals, and requirements through detailed consultation and research.",
      icon: LightBulbIcon,
      features: ["Project Analysis", "Requirement Gathering", "Timeline Planning", "Budget Estimation"],
      duration: "1-2 weeks"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Our design team creates stunning mockups and prototypes that bring your vision to life.",
      icon: PencilIcon,
      features: ["UI/UX Design", "Wireframing", "Prototyping", "Design Approval"],
      duration: "2-3 weeks"
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "We build your project using cutting-edge technologies with rigorous testing at every step.",
      icon: CodeBracketIcon,
      features: ["Frontend Development", "Backend Development", "Quality Assurance", "Performance Optimization"],
      duration: "4-8 weeks"
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure everything runs smoothly.",
      icon: RocketLaunchIcon,
      features: ["Deployment", "Go-Live Support", "Training", "Maintenance"],
      duration: "Ongoing"
    }
  ]

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
            Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results. Here's how we bring your ideas to life.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Process Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full hover:bg-white/15 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg group-hover:bg-white/30 transition-all duration-300">
                      {process.id}
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {process.duration}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <process.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {process.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < processes.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRightIcon className="w-6 h-6 text-white/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our proven process can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg font-medium"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
