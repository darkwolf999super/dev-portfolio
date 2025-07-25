// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Dynamic geometric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-coral-400 rotate-45 animate-float opacity-70"></div>
        <div className="absolute top-60 right-20 w-6 h-6 bg-teal-400 rounded-full animate-float opacity-50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-16 w-5 h-5 bg-sky-400 rotate-12 animate-float opacity-60" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-60 right-16 w-3 h-8 bg-mint-400 rounded-full animate-float opacity-80" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-sunset-400 rounded-full animate-float opacity-90" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main content container with unique layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central hero content */}
        <div className="text-center space-y-12">
          {/* Unique animated title */}
          <div className="space-y-6 animate-slide-up">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                <span className="block gradient-text-special mb-4">
                  {personalData.name}
                </span>
              </h1>
              
              {/* Decorative elements around name */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-coral-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 border-4 border-teal-400 rotate-45 animate-float opacity-70" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div> */}

          {/* Unique action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link href="#contact" className="group relative">
              <div className="absolute -inset-2 bg-gradient-coral rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative unique-card px-10 py-5 text-white font-bold text-lg transition-all duration-300 hover:scale-110 neon-glow hover:text-coral-300">
                <span className="flex items-center gap-3">
                  <RiContactsFill size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  Let's Connect
                </span>
              </button>
            </Link>

            <Link 
              href={personalData.resume}
              target="_blank"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-teal rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative unique-card px-10 py-5 text-white font-bold text-lg transition-all duration-300 hover:scale-110 neon-glow hover:text-teal-300">
                <span className="flex items-center gap-3">
                  <MdDownload size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
                  View Resume
                </span>
              </button>
            </Link>
          </div>


        </div>
        
        {/* Floating code terminal - positioned differently */}
        <div className="absolute top-20 right-8 w-80 animate-fade-in hidden lg:block" style={{animationDelay: '1.5s'}}>
          <div className="unique-card p-1 relative overflow-hidden">
            {/* Animated rainbow border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-rainbow opacity-30 animate-pulse-glow"></div>
            
            {/* Terminal header */}
            <div className="bg-dark-600 rounded-t-xl px-4 py-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral-500 hover:bg-coral-400 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-sunset-500 hover:bg-sunset-400 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-mint-500 hover:bg-mint-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono">magic.js</div>
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="bg-dark-600/90 rounded-b-xl px-4 py-4 font-mono text-xs overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-900/10 to-teal-900/10"></div>
              <div className="relative z-10">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-3 mr-2 text-white">skills:</span>
                <span className="text-gray-400">[</span>
                <span className="text-teal-300">'JS'</span>
                <span className="text-gray-400">, </span>
                <span className="text-sky-300">'React'</span>
                <span className="text-gray-400">, </span>
                <span className="text-coral-300">'Next'</span>
                <span className="text-gray-400">, </span>
                <span className="text-mint-300">'Python'</span>
                <span className="text-gray-400">],</span>
              </div>
              <div>
                <span className="ml-3 mr-2 text-white">hardWorker:</span>
                <span className="text-pink-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-3 mr-2 text-white">quickLearner:</span>
                <span className="text-pink-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-3 mr-2 text-white">problemSolver:</span>
                <span className="text-pink-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-3 mr-2 text-white">hireable:</span>
                <span className="text-pink-400">function</span>
                <span className="text-gray-400">() {'{'}</span>
              </div>
              <div>
                <span className="ml-6 mr-2 text-pink-400">return</span>
                <span className="text-gray-400">(</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-white">this.</span>
                <span className="text-teal-300">hardWorker</span>
                <span className="text-gray-400"> &&</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-white">this.</span>
                <span className="text-sky-300">problemSolver</span>
                <span className="text-gray-400"> &&</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-white">this.</span>
                <span className="text-coral-300">skills.length</span>
                <span className="text-gray-400"> {'>'}= </span>
                <span className="text-mint-400">5</span>
              </div>
              <div>
                <span className="ml-6 mr-2 text-gray-400">);</span>
              </div>
              <div><span className="ml-3 text-gray-400">{'}'}</span></div>
              <div><span className="text-gray-400">{'}'};</span></div>
            </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;