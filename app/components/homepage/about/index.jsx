// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-72 h-72 bg-coral-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/25 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">About</span>{' '}
            <span className="gradient-text-secondary">Me</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-rainbow mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black gradient-text-special">
                Who I am?
              </h3>
              <div className="prose prose-lg text-gray-300 leading-relaxed">
                <p className="text-lg md:text-xl">
                  {personalData.description}
                </p>
              </div>
            </div>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-morphism p-6 text-center hover:scale-110 transition-all duration-300 group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-coral rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-black gradient-text mb-2">10+</div>
                  <div className="text-coral-300 text-sm uppercase tracking-wider font-bold">Years Experience</div>
                </div>
              </div>
              <div className="glass-morphism p-6 text-center hover:scale-110 transition-all duration-300 group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-teal rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-black gradient-text-secondary mb-2">20+</div>
                  <div className="text-teal-300 text-sm uppercase tracking-wider font-bold">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-rainbow rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
              
              {/* Image container */}
              <div className="relative glass-morphism rounded-2xl p-2 overflow-hidden">
                <Image
                  src={personalData.profile}
                  width={400}
                  height={400}
                  alt="Randall Christ"
                  className="rounded-xl transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105 w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-2 bg-gradient-to-t from-dark-600/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;