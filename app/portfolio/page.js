'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'saas', label: 'SaaS Platforms' }
  ]

  const projects = [
    {
      id: 1,
      title: "EcoTrack Dashboard",
      description: "A comprehensive environmental monitoring dashboard for tracking carbon footprint and sustainability metrics.",
      longDescription: "EcoTrack Dashboard is a comprehensive environmental monitoring platform that helps businesses track their carbon footprint, monitor sustainability metrics, and make data-driven decisions for environmental impact reduction. The platform features real-time data visualization, automated reporting, and integration with various environmental sensors and APIs.",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "D3.js", "Chart.js"],
      features: ["Real-time Data Visualization", "Automated Reporting", "API Integrations", "Responsive Design"],
      liveUrl: "https://ecotrack-demo.com",
      githubUrl: "https://github.com/webwizard/ecotrack",
      client: "GreenTech Solutions",
      duration: "3 months"
    },
    {
      id: 2,
      title: "FitLife Mobile App",
      description: "A fitness tracking mobile application with workout plans, nutrition tracking, and social features.",
      longDescription: "FitLife is a comprehensive fitness tracking mobile application that helps users achieve their health and fitness goals. The app features personalized workout plans, nutrition tracking, progress monitoring, and social features to keep users motivated and engaged.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      features: ["Workout Plans", "Nutrition Tracking", "Progress Monitoring", "Social Features"],
      liveUrl: "https://fitlife-app.com",
      githubUrl: "https://github.com/webwizard/fitlife",
      client: "HealthFirst Inc.",
      duration: "4 months"
    },
    {
      id: 3,
      title: "StyleHub E-commerce",
      description: "A modern e-commerce platform for fashion and lifestyle products with advanced filtering and personalization.",
      longDescription: "StyleHub is a cutting-edge e-commerce platform specializing in fashion and lifestyle products. The platform features advanced product filtering, personalized recommendations, seamless checkout process, and comprehensive inventory management system.",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
      features: ["Advanced Filtering", "Personalized Recommendations", "Secure Checkout", "Inventory Management"],
      liveUrl: "https://stylehub-store.com",
      githubUrl: "https://github.com/webwizard/stylehub",
      client: "Fashion Forward",
      duration: "5 months"
    },
    {
      id: 4,
      title: "CloudSync SaaS",
      description: "A cloud storage and collaboration platform with real-time editing and team management features.",
      longDescription: "CloudSync is a powerful cloud storage and collaboration platform that enables teams to store, share, and collaborate on files in real-time. The platform features advanced security, version control, team management, and seamless integration with popular productivity tools.",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Node.js", "AWS S3", "WebSocket", "Docker"],
      features: ["Real-time Collaboration", "Version Control", "Team Management", "Advanced Security"],
      liveUrl: "https://cloudsync-saas.com",
      githubUrl: "https://github.com/webwizard/cloudsync",
      client: "TechCorp Global",
      duration: "6 months"
    },
    {
      id: 5,
      title: "FinanceFlow Dashboard",
      description: "A financial management dashboard for small businesses with expense tracking and reporting.",
      longDescription: "FinanceFlow is a comprehensive financial management dashboard designed specifically for small businesses. The platform helps track expenses, manage invoices, generate financial reports, and provides insights for better financial decision-making.",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Angular", "Express.js", "MySQL", "Chart.js", "PDF.js"],
      features: ["Expense Tracking", "Invoice Management", "Financial Reports", "Data Visualization"],
      liveUrl: "https://financeflow-demo.com",
      githubUrl: "https://github.com/webwizard/financeflow",
      client: "SmallBiz Solutions",
      duration: "3 months"
    },
    {
      id: 6,
      title: "EduLearn Platform",
      description: "An online learning management system with video streaming and interactive assessments.",
      longDescription: "EduLearn is a comprehensive online learning management system that provides educational institutions with tools to create, manage, and deliver online courses. The platform features video streaming, interactive assessments, progress tracking, and comprehensive analytics.",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React", "Django", "PostgreSQL", "FFmpeg", "WebRTC"],
      features: ["Video Streaming", "Interactive Assessments", "Progress Tracking", "Analytics Dashboard"],
      liveUrl: "https://edulearn-platform.com",
      githubUrl: "https://github.com/webwizard/edulearn",
      client: "EduTech Academy",
      duration: "7 months"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web App':
        return CodeBracketIcon
      case 'Mobile App':
        return DevicePhoneMobileIcon
      case 'E-commerce':
        return ShoppingCartIcon
      case 'SaaS Platform':
        return CloudIcon
      default:
        return CodeBracketIcon
    }
  }

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || 
    (activeFilter === 'web' && project.category === 'Web App') ||
    (activeFilter === 'mobile' && project.category === 'Mobile App') ||
    (activeFilter === 'ecommerce' && project.category === 'E-commerce') ||
    (activeFilter === 'saas' && project.category === 'SaaS Platform')
  )

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
              Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/70 max-w-3xl mx-auto">
              Explore our collection of successful projects that showcase our expertise in web development, mobile apps, and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                  activeFilter === filter.key
                    ? 'bg-white/20 text-white border-white/30 shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category)
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 h-full">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <CategoryIcon className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">{project.category}</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                          >
                            <EyeIcon className="w-4 h-4 text-white" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/70 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-2 text-sm text-white/60 mb-4">
                          <div className="flex justify-between">
                            <span>Client:</span>
                            <span className="text-white/80">{project.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="text-white/80">{project.duration}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 text-sm font-medium"
                          >
                            View Details
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                          >
                            Live Demo
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss your project requirements and create something amazing together.
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
                  Contact Us
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
