'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../app/assets/Logo-Big.png';
import { ArrowUpRight, Menu, X } from 'lucide-react';

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute lg:top-12 top-4 w-full flex justify-center z-50 px-6"
    >
      <motion.div
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.9)',
          boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.1)' : '0 2px 6px rgba(0,0,0,0.05)',
        }}
        transition={{ duration: 0.3 }}
        className={`flex items-center max-w-7xl mx-auto justify-between w-full px-6 py-3 rounded-2xl border ${
          isScrolled ? 'border-gray-200 backdrop-blur-xl' : 'border-gray-100 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Mintellect" width={40} height={40} />
          <span className="text-lg font-semibold text-indigo-800">MINTELLECT</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
              <Link
                href={item.href}
                className="text-neutral-900 font-medium hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href=""
              className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md transition-all duration-200"
            >
              Launch App
              <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1">
                <ArrowUpRight size={15} color="white" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] bg-white shadow-lg rounded-xl py-4 flex flex-col items-center space-y-4 border border-gray-200"
          >
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href=""
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md transition-all duration-200"
              >
                Launch App
                <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1">
                  <ArrowUpRight size={15} color="white" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
