'use client'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  CheckCircleIcon,
  UserGroupIcon,
  TrophyIcon,
  ClockIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "150+", icon: CheckCircleIcon },
    { label: "Happy Clients", value: "120+", icon: UserGroupIcon },
    { label: "Years Experience", value: "5+", icon: ClockIcon },
    { label: "Awards Won", value: "12", icon: TrophyIcon }
  ]

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every project is built with attention to detail and best practices.",
      icon: ShieldCheckIcon
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
      icon: CodeBracketIcon
    },
    {
      title: "Design Excellence",
      description: "Beautiful, functional designs that create memorable user experiences.",
      icon: PaintBrushIcon
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations.",
      icon: RocketLaunchIcon
    }
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      description: "Full-stack developer with 8+ years of experience in modern web technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      description: "Creative designer passionate about creating intuitive and beautiful user experiences.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Developer",
      description: "Backend specialist focused on scalable architecture and performance optimization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">WebWizard</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/70 max-w-3xl mx-auto">
              We're a passionate team of developers and designers dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  WebWizard was born from a simple belief: every business deserves a digital presence that truly represents their vision and drives real results. Founded in 2019, we started as a small team of passionate developers who were frustrated with the cookie-cutter solutions dominating the market.
                </p>
                <p>
                  Today, we've grown into a full-service digital agency, but we've never lost sight of our core mission: to create websites and applications that don't just look good, but work brilliantly for our clients' specific needs.
                </p>
                <p>
                  We believe in the power of technology to transform businesses, and we're here to make that transformation as smooth and successful as possible for every client we work with.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Our team working"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <value.icon className="w-10 h-10 text-white/80 group-hover:text-white transition-colors duration-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The talented individuals behind WebWizard's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/80 mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss your project and see how our team can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg font-medium"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  View Our Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
