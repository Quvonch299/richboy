'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Navbar({ selectedCountry, setSelectedCountry }) {
  const [open, setOpen] = useState(false)

  const countries = [
    { key: 'dubai', label: 'Dubai' },
    { key: 'uzbekistan', label: 'Uzbekistan' },
    { key: 'france', label: 'France' },
    { key: 'spain', label: 'Spain' },
  ]

  return (
    <div className="max-w-7xl text-white relative z-20 pt-[40px] m-auto flex items-center justify-between">
      <div className="flex items-center gap-[32px]">
        <Image src="/icon/menu.svg" width={69} height={11} alt="menu" />
        <div className="flex gap-[16px]">
          <a href="">Car List</a>
          <a href="">Yacht list</a>
          <a href="">Chauffeur</a>
        </div>
      </div>

      <Image src="/icon/logo.svg" width={147} height={139} alt="logo" />

      <div className="flex gap-[26px] items-center relative">
        <a href="">+971 58 590 7875</a>
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

        <span className="flex items-center gap-1">
          ENG <MdOutlineKeyboardArrowDown />
        </span>
      </div>
    </div>
  )
}
