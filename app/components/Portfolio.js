'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="bg-black pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white/80 mb-2 block text-lg font-semibold">
              Our Portfolio
            </span>
            <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              Our Recent Creative & Digital Projects
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              Explore our recent creative and digital projects showcasing our expertise in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ul className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {[
                  { key: "all", label: "All Projects" },
                  { key: "web", label: "Website Design" },
                  { key: "animation", label: "2D & 3D Animation" },
                  { key: "graphic", label: "Illustration & Graphic Design" },
                  { key: "logo", label: "Logo Design" },
                  { key: "marketing", label: "Social Media & Digital Marketing" }
                ].map((item, index) => (
                  <motion.li 
                    key={item.key}
                    className="mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => handleProject(item.key)}
                      className={`inline-block rounded-xl py-3 px-6 text-center text-base font-semibold transition-all duration-300 backdrop-blur-sm border ${
                        showCard === item.key
                          ? "bg-white/20 text-white border-white/30 shadow-lg"
                          : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <PortfolioCard
              ImageHref="/website/2.webp"
              category="Website Design"
              title="Modern E-commerce Website"
              description="Responsive e-commerce platform with modern UI/UX design"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/website/3.avif"
              category="Website Design"
              title="Corporate Business Website"
              description="Professional corporate website with advanced features"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/digital-marketing/2.webp"
              category="Social Media & Digital Marketing"
              title="Social Media Campaign"
              description="Digital marketing strategy with video content"
              button="Watch Video"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/digital-marketing/3.avif"
              category="Social Media & Digital Marketing"
              title="Brand Marketing Strategy"
              description="Multi-channel marketing campaign with video production"
              button="Watch Video"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Illustrations/2.jpg"
              category="Illustration & Graphic Design"
              title="Creative Illustration Series"
              description="Custom illustrations for brand storytelling"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Illustrations/3.jpg"
              category="Illustration & Graphic Design"
              title="Graphic Design Collection"
              description="Modern graphic design elements and layouts"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Logos/design2.jpg"
              category="Logo Design"
              title="Brand Identity Design"
              description="Complete logo and brand identity system"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/Logos/design3.jpg"
              category="Logo Design"
              title="Creative Logo Collection"
              description="Modern and innovative logo designs"
              button="View Project"
              buttonHref="#"
              showCard={showCard}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  button,
  buttonHref,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`${
          showCard === "all" || 
          (showCard === "web" && category === "Website Design") ||
          (showCard === "animation" && category === "2D & 3D Animation") ||
          (showCard === "graphic" && category === "Illustration & Graphic Design") ||
          (showCard === "logo" && category === "Logo Design") ||
          (showCard === "marketing" && category === "Social Media & Digital Marketing")
            ? "block"
            : "hidden"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
      >
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl">
            <motion.div className="w-full h-64 overflow-hidden">
              <Image 
                src={ImageHref} 
                alt={`${title} - ${category} project by WebWizard digital marketing agency`}
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </motion.div>
          </div>
          <motion.div 
            className="relative z-10 mx-4 -mt-20 rounded-2xl bg-white/10 backdrop-blur-xl py-6 px-4 text-center border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white/80 mb-3 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
              {category}
            </span>
            <h3 className="text-white mb-3 text-xl font-bold">{title}</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              {description}
            </p>
            <motion.a
              href={buttonHref}
              className="inline-block rounded-xl bg-white/20 text-white border border-white/30 py-3 px-6 text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:border-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {button}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
