// @flow strict
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="gradient-text-special text-2xl md:text-3xl font-black hover:scale-105 transition-all duration-300 neon-glow">
              RANDALL CHRIST
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/#about" className="group relative">
              <span className="text-white hover:text-coral-300 transition-colors duration-300 font-bold">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-coral group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#experience" className="group relative">
              <span className="text-white hover:text-teal-300 transition-colors duration-300 font-bold">Experience</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-teal group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#skills" className="group relative">
              <span className="text-white hover:text-sky-300 transition-colors duration-300 font-bold">Skills</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-sky group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#education" className="group relative">
              <span className="text-white hover:text-mint-300 transition-colors duration-300 font-bold">Education</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-rainbow group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#projects" className="group relative">
              <span className="text-white hover:text-sunset-300 transition-colors duration-300 font-bold">Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-sunset group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Popover className="relative">
              <PopoverButton className="group inline-flex items-center gap-x-1 text-white hover:text-primary-300 transition-colors duration-300 font-medium focus:outline-none">
                <span>Design</span>
                <ChevronDownIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />
              </PopoverButton>
              <PopoverPanel
                className="absolute left-1/2 z-20 mt-3 flex w-screen max-w-sm -translate-x-1/2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="glass-morphism rounded-xl p-4 text-sm leading-6 text-white shadow-2xl ring-1 ring-white/10">
                  <a href="/design/ecommerce" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    E-commerce
                  </a>
                  <a href="/design/twitter" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    Twitter
                  </a>
                  <a href="/design/facebook" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    Facebook
                  </a>
                  <a href="/design/youtube" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    YouTube
                  </a>
                  <a href="/design/booking" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    Booking
                  </a>
                  <a href="/design/whatsapp" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    WhatsApp
                  </a>
                  <a href="/design/paypal" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    PayPal
                  </a>
                  <a href="/design/urlshort" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    URL Shortener
                  </a>
                  <a href="/design/netflix" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    Netflix
                  </a>
                  <a href="/design/uber" className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200 hover:text-accent-300">
                    Uber
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;