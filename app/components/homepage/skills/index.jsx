// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-coral-500/25 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-mint-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="gradient-text-accent">My</span>{' '}
            <span className="gradient-text-special">Skills</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-rainbow mx-auto rounded-full animate-pulse-glow"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Animated marquee for additional skills */}
        <div className="w-full">
          <h3 className="text-2xl font-black text-center gradient-text mb-8">And many more magical tools...</h3>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            className="py-4"
          >
            {skillsData.slice(12).map((skill, id) => (
              <div className="mx-6 group" key={id}>
                <div className="unique-card rounded-lg p-4 hover:scale-110 transition-all duration-300 cursor-pointer neon-glow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg"
                      />
                    </div>
                    <span className="text-white text-sm font-bold group-hover:text-teal-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;