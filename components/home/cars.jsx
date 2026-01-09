'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cars() {
  const [activeTab, setActiveTab] = useState('New Car')

  const carsData = {
    'Special Offer': [
      { name: 'Lamborghini Urus', img: '/sec2.png' },
      { name: 'Ferrari Roma', img: '/sec3.png' },
    ],
    'New Car': [
      { name: 'Rolls-Royce Ghost', img: '/sec3.png' },
      { name: 'Porsche 911 Turbo S', img: '/sec4.png' },
    ],
    'Most popular': [
      { name: 'Ferrari Roma', img: '/sec3.png' },
      { name: 'Porsche 911 Turbo S', img: '/sec4.png' },
    ],
    'Daily': [
      { name: 'Lamborghini Urus', img: '/sec2.png' },
      { name: 'Rolls-Royce Ghost', img: '/sec3.png' },
    ],
  }

  const tabs = ['Special Offer', 'New Car', 'Most popular', 'Daily']

  return (
    <div className='bg-[#161516] min-h-screen'>
      {/* Tabs */}
      <div className='font-stolzl font-medium text-[40px] leading-[130px] tracking-[0] text-center flex items-center justify-center gap-[42px] pb-[60px] pt-[260px]'>
        {tabs.map((tab) => (
          <motion.p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className='cursor-pointer transition-colors duration-300'
            animate={{ color: activeTab === tab ? '#33B7BC' : '#FFFFFF80' }}
          >
            {tab}
          </motion.p>
        ))}
      </div>

      {/* Cars Grid */}
      <div className='grid grid-cols-2  justify-center px-[20px]'>
        <AnimatePresence mode='wait'>
          {carsData[activeTab].map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className='relative w-[760px] h-[550px] rounded-lg overflow-hidden'
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-[url(${car.img})] bg-center bg-cover`}
              ></div>
              {/* Dark overlay */}
              <Image
                src={'/dark.png'}
                alt='Dark overlay'
                fill
                className='object-cover z-10'
              />
              {/* Text + button */}
              <div className='absolute bottom-[40px] left-[80px] z-20 flex justify-between items-center w-[600px] text-white'>
                <h2 className='font-bold text-[40px] leading-[60px] tracking-[0] align-middle'>
                  {car.name}
                </h2>
                <button className='w-[108px] h-[54px] border-2 border-[#33B7BC] rounded-[8px]'>
                  Rent
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
