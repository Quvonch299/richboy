'use client'
import React, { useState } from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const countries = {
  dubai: {
    title: 'Dubai',
    subtitle: 'Luxury Yachts Rental',
    bg: '/header.png',
  },
  uzbekistan: {
    title: 'Uzbekistan',
    subtitle: 'Premium Travel Services',
    bg: '/uzbekistan.jpg',
  },
  france: {
    title: 'France',
    subtitle: 'Luxury Yachts Rental',
    bg: '/france.webp',
  },
  spain: {
    title: 'Spain',
    subtitle: 'Elite Yacht Experience',
    bg: '/spain.avif',
  },
}

export default function HeaderBox() {
  const [selectedCountry, setSelectedCountry] = useState('dubai')
  const current = countries[selectedCountry]

  return (
    <div className="relative overflow-hidden min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <Navbar
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <div className="absolute inset-0 z-0">
        <Image
          src="/headerdark.png"
          alt="dark overlay"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-[10rem] pb-[10rem] px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#FFFF]"
          >
            <h2 className="font-medium text-[60px] md:text-[120px] leading-[60px] md:leading-[90px]">
              {current.title}
            </h2>
            <p className="text-[20px] md:text-[32px] leading-[32px] md:leading-[90px] mt-4">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
