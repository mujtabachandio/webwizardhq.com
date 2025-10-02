'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
        <>
                                                        <footer className="w-full bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href="https://webwizardhq.com/" className="flex justify-center lg:justify-start">
                        <h2 className="text-2xl font-bold text-white">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">WebWizard</span>
                        </h2>
                    </a>
                    <p className="py-8 text-sm text-white/70 lg:max-w-xs text-center lg:text-left">Your All-In-One Destination for Digital Success. We help businesses thrive in the digital landscape with innovative solutions.</p>
                    <a href="/contact"  className="py-2.5 px-5 h-9 block w-fit bg-white/20 backdrop-blur-sm rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-white/30 border border-white/30 hover:border-white/50 lg:mx-0">
                        Get Started
                    </a>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-white font-medium mb-7">Company</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><Link href="/"  className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                        <li className="mb-6"><a href="/about"  className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                        <li className="mb-6"><a href="/portfolio"  className="text-white/70 hover:text-white transition-colors">Portfolio</a></li>
                        <li><a href="/contact"  className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-white font-medium mb-7">Services</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><a href="/services/illustration-graphic-design"  className="text-white/70 hover:text-white transition-colors">Illustration & Graphic Design</a></li>
                        <li className="mb-6"><a href="/services/2d-3d-animation"  className="text-white/70 hover:text-white transition-colors">2D & 3D Animation</a></li>
                        <li className="mb-6"><a href="/services/website-design"  className="text-white/70 hover:text-white transition-colors">Website Design</a></li>
                        <li className="mb-6"><a href="/services/logo-design"  className="text-white/70 hover:text-white transition-colors">Logo Design</a></li>
                        <li><a href="/services/social-media-marketing"  className="text-white/70 hover:text-white transition-colors">Social Media & Digital Marketing</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-white font-medium mb-7">Contact Information</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><span className="text-white/70">Phone: (850) 801-5002</span></li>
                        <li className="mb-6"><span className="text-white/70">Email: support@webwizardhq.com</span></li>
                        <li className="mb-6"><span className="text-white/70">Support: support@webwizardhq.com</span></li>
                        <li><a href="https://www.facebook.com/WebWizardHQ/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Follow us on Facebook</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-white font-medium mb-7">Legal</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><a href="/privacy-policy"  className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li className="mb-6"><a href="/terms-of-service"  className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
                        <li className="mb-6"><a href="/cookie-policy"  className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="/careers"  className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-7 border-t border-white/20">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-white/70">©<a href="https://webwizardhq.com/" className="hover:text-white transition-colors">WebWizard</a> 2024 - All Rights Reserved</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                        <a href="https://www.facebook.com/WebWizardHQ/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300" aria-label="Follow us on Facebook">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
  )
}