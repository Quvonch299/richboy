'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Navbar({ selectedCountry, setSelectedCountry }) {
  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const countries = [
    { key: 'dubai', label: 'Dubai' },
    { key: 'uzbekistan', label: 'Uzbekistan' },
    { key: 'france', label: 'France' },
    { key: 'spain', label: 'Spain' },
  ]

  return (
    <nav className="max-w-7xl text-white relative z-20 pt-4 px-4 md:px-0 m-auto flex items-center justify-between">
    

      <div>
        <Image
          src="/icon/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="md:w-[147px] md:h-[139px] w-[80px] h-[80px]"
        />
      </div>

      <div className="flex gap-4 md:gap-6 items-center relative">
        <a href="" className="hidden md:inline">+971 58 590 7875</a>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer"
          >
            {countries.find(c => c.key == selectedCountry)?.label}
            <MdOutlineKeyboardArrowDown />
          </button>

          {open && (
            <div className="absolute top-full mt-2 right-0 bg-black/80 backdrop-blur-md rounded-lg overflow-hidden">
              {countries.map(country => (
                <button
                  key={country.key}
                  onClick={() => {
                    setSelectedCountry(country.key)
                    setOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10"
                >
                  {country.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <span className="hidden md:flex items-center gap-1 cursor-pointer">
          ENG <MdOutlineKeyboardArrowDown />
        </span>
      </div>

       
    </nav>
  )
}
