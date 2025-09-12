'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from '../app/assets/Logo-White-Text-Big.png';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '/about' },
  { name: 'Solution', href: '#solution' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white relative overflow-hidden">
      {/* Grid Background */}
          <div className="fixed inset-0 z-0">
              <Image
          src="/hero-bg.jpg"
                alt="Abstract blockchain background"
                fill
                className="object-cover scale-100"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
         
     

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative">
        <div className="py-12 md:py-16 flex flex-col lg:flex-row justify-between gap-12 px-6">
          {/* Left Section - Logo + Tagline + Socials */}
          <div className="flex flex-col max-w-sm space-y-6">
            {/* Logo + Name */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={Logo}
                alt="Mintellect"
                width={150}
                height={150}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              />
       
            </Link>

            {/* Tagline */}
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Tokenizing Patent Potential. Accelerating Innovation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 rounded-2xl px-4 sm:px-6 py-6 text-gray-400 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
            <div>© 2025 Mintellect. All rights reserved.</div>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <Link
                href="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
