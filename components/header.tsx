'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../app/assets/Logo-Big.png';
import { ArrowUpRight, Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <header className="absolute lg:top-12 top-4 w-full flex justify-center z-50 px-6">
      <div
        className={`flex items-center max-w-7xl mx-auto justify-between w-full  px-6 py-3 rounded-2xl shadow-xl transition-all duration-500
        ${isScrolled ? 'bg-white/90 backdrop-blur-xl border border-gray-200' : 'bg-white/90 backdrop-blur-md border border-gray-100'}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Mintellect" width={40} height={40} />
          <span className="text-lg font-semibold text-indigo-800">MINTELLECT</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-900 font-medium hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Button */}
     <div className="hidden md:block">
  <Link
    href=""
    className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
  >
    Launch App
    <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1 transition-all duration-300">
      <ArrowUpRight size={15} color="white" />
    </span>
  </Link>
</div>


        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 w-[90%] bg-white shadow-lg rounded-xl py-4 flex flex-col items-center space-y-4 border border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 font-medium hover:text-yellow-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
       <Link
  href=""
  onClick={() => setIsMobileMenuOpen(false)}
  className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
>
  Launch App
  <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1 transition-all duration-300">
    <ArrowUpRight size={15} color="white" />
  </span>
</Link>

        </div>
      )}
    </header>
  );
}
