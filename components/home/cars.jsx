'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cars() {
  const [activeTab, setActiveTab] = useState('New Car')
  const [modalCar, setModalCar] = useState(null) // modal uchun state

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
    <div className='bg-[#161516] min-h-screen px-4 md:px-8'>
      {/* Tabs */}
      <div className='font-stolzl font-medium text-[32px] md:text-[40px] leading-[90px] md:leading-[130px] tracking-[0] text-center flex flex-wrap items-center justify-center gap-[20px] md:gap-[42px] py-[60px]'>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center'>
        <AnimatePresence mode='wait'>
          {carsData[activeTab].map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className='relative w-full h-[400px] md:h-[550px] rounded-lg overflow-hidden'
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
              <div className='absolute bottom-[20px] md:bottom-[40px] left-[20px] md:left-[80px] z-20 flex justify-between items-center w-[90%] md:w-[600px] text-white'>
                <h2 className='font-bold text-[24px] md:text-[40px] leading-[36px] md:leading-[60px] tracking-[0]'>
                  {car.name}
                </h2>
                <button
                  className='w-[108px] h-[48px] md:h-[54px] border-2 border-[#33B7BC] rounded-[8px]'
                  onClick={() => setModalCar(car)}
                >
                  Rent
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      {modalCar && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='bg-white rounded-lg p-6 max-w-md w-full text-black'
          >
            <h3 className='text-2xl font-bold mb-4'>{modalCar.name}</h3>
            <p className='mb-6'>Here you can put details about renting {modalCar.name}.</p>
            <button
              className='px-4 py-2 bg-[#33B7BC] text-white rounded'
              onClick={() => setModalCar(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
