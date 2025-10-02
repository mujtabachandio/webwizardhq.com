'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'logo', label: 'Logo Design' },
    { key: 'marketing', label: 'Digital Marketing' },
    { key: 'graphic', label: 'Illustrations' },
    { key: 'video', label: 'Videos' }
  ]

  // Generate projects from actual images
  const generateProjects = () => {
    const projects = []
    let id = 1

    // Logo Design Projects (26 logos)
    const logoFiles = [
      'design1.jpg', 'design2.jpg', 'design3.jpg', 'design4.jpg', 'design5.jpg',
      'design6.jpg', 'design7.jpg', 'design8.jpg', 'design9.jpg', 'design10.jpg',
      'design11.jpg', 'design12.jpg', 'design13.jpg', 'design14.jpg', 'design15.jpg',
      'design16.jpg', 'design17.jpg', 'design18.jpg', 'design19.jpg', 'design20.jpg',
      'design21.jpg', 'design22.jpg', 'design23.jpg', 'design25.jpg', 'design26.jpg',
      'slider5.jpg'
    ]
    
    logoFiles.forEach((file, index) => {
      projects.push({
        id: id++,
        title: `Logo Design ${index + 1}`,
        description: "Professional logo design",
        longDescription: "Custom logo design created with attention to detail and brand identity.",
        category: "Logo Design",
        image: `/Logos/${file}`,
        technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
        features: ["Logo Design", "Brand Guidelines", "Vector Graphics"],
        liveUrl: "#",
        githubUrl: "#",
        client: "Various Clients",
        duration: "1 week"
      })
    })

    // Website Design Projects (6 websites)
    const websiteFiles = ['1.webp', '2.webp', '3.avif', '5.avif', '6.webp', '7.webp']
    
    websiteFiles.forEach((file, index) => {
      projects.push({
        id: id++,
        title: `Website Design ${index + 1}`,
        description: "Modern responsive website",
        longDescription: "Professional website design with modern UI/UX and responsive layout.",
        category: "Web App",
        image: `/website/${file}`,
        technologies: ["Next.js", "React", "Tailwind CSS"],
        features: ["Responsive Design", "Modern UI", "Fast Loading"],
        liveUrl: "#",
        githubUrl: "#",
        client: "Various Clients",
        duration: "2 weeks"
      })
    })

    // Digital Marketing Projects (7 marketing images)
    const marketingFiles = ['1.webp', '2.webp', '3.avif', '4.avif', '5.webp', '6.avif', '7.avif']
    
    marketingFiles.forEach((file, index) => {
      projects.push({
        id: id++,
        title: `Digital Marketing ${index + 1}`,
        description: "Social media marketing campaign",
        longDescription: "Comprehensive digital marketing campaign with custom graphics and content strategy.",
        category: "Digital Marketing",
        image: `/digital-marketing/${file}`,
        technologies: ["After Effects", "Premiere Pro", "Canva"],
        features: ["Social Media", "Ad Campaigns", "Content Creation"],
        liveUrl: "#",
        githubUrl: "#",
        client: "Various Clients",
        duration: "2 weeks"
      })
    })

    // Illustration Projects (18 illustrations)
    const illustrationFiles = [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.png',
      '9.jpg', '10.jpg', '11.jpg', '12.jpg', '14.jpg', '16.jpg', '17.jpg', '18.jpg',
      '19.jpg', '20.jpg'
    ]
    
    illustrationFiles.forEach((file, index) => {
      projects.push({
        id: id++,
        title: `Illustration ${index + 1}`,
        description: "Creative illustration design",
        longDescription: "Custom illustration created with artistic vision and creative flair.",
        category: "Graphic Design",
        image: `/Illustrations/${file}`,
        technologies: ["Adobe Illustrator", "Photoshop", "Procreate"],
        features: ["Custom Artwork", "Vector Graphics", "Creative Design"],
        liveUrl: "#",
        githubUrl: "#",
        client: "Various Clients",
        duration: "1 week"
      })
    })

    // Video Projects (4 videos)
    const videoFiles = ['1.mp4', '2.mp4', '3.mp4', '4.mp4']
    
    videoFiles.forEach((file, index) => {
      projects.push({
        id: id++,
        title: `Video Production ${index + 1}`,
        description: "Professional video content",
        longDescription: "High-quality video production with professional editing and motion graphics.",
        category: "Video Production",
        image: `/videos/${file}`,
        technologies: ["After Effects", "Premiere Pro", "Cinema 4D"],
        features: ["Video Editing", "Motion Graphics", "Animation"],
        liveUrl: "#",
        githubUrl: "#",
        client: "Various Clients",
        duration: "3 weeks"
      })
    })

    return projects
  }

  const projects = generateProjects()

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web App':
        return CodeBracketIcon
      case 'Logo Design':
        return PaintBrushIcon
      case 'Digital Marketing':
        return CloudIcon
      case 'Graphic Design':
        return PaintBrushIcon
      case 'Video Production':
        return DevicePhoneMobileIcon
      default:
        return CodeBracketIcon
    }
  }

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' ||
    (activeFilter === 'web' && project.category === 'Web App') ||
    (activeFilter === 'logo' && project.category === 'Logo Design') ||
    (activeFilter === 'marketing' && project.category === 'Digital Marketing') ||
    (activeFilter === 'graphic' && project.category === 'Graphic Design') ||
    (activeFilter === 'video' && project.category === 'Video Production')
  )

  const handleFilterChange = (filterKey) => {
    setActiveFilter(filterKey)
    setCurrentIndex(0)
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  const openProject = (project, index) => {
    setSelectedProject(project)
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % filteredProjects.length
    setCurrentIndex(nextIndex)
    setSelectedProject(filteredProjects[nextIndex])
  }

  const prevProject = () => {
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedProject(filteredProjects[prevIndex])
  }

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
                onClick={() => handleFilterChange(filter.key)}
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

          {/* All Projects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openProject(project, index)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    {project.image.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <EyeIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Project Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                    {/* Project Image/Video */}
                    <div className="relative h-64 md:h-80">
                      {selectedProject.image.endsWith('.mp4') ? (
                        <video
                          src={selectedProject.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {React.createElement(getCategoryIcon(selectedProject.category), { className: "w-4 h-4 text-white" })}
                          <span className="text-white text-sm font-medium">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                      <div className="space-y-2 text-white/70">
                        <div className="flex justify-between">
                          <span>Client:</span>
                          <span className="text-white">{selectedProject.client}</span>
                          </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="text-white">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span className="text-white">{selectedProject.category}</span>
                        </div>
                        </div>
                      </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                              <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                      </div>
                          </div>
                        </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/70">
                          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                        </div>

                        {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 font-medium"
                          >
                      View Live Demo
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
                          >
                      Contact Us
                          </motion.button>
                        </div>
                      </div>
                    </div>

              {/* Project Counter */}
              {filteredProjects.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {currentIndex + 1} of {filteredProjects.length}
                </div>
              )}
            </motion.div>
                  </motion.div>
        )}
            </AnimatePresence>

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
                Let&apos;s discuss your project requirements and create something amazing together.
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
