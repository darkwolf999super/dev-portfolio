// @flow strict
import * as React from 'react';
import ProArtisan from './ProArtisan';
import ProCareflow from './ProCareflow';
import ProUserhub from './ProUserhub';
import ProChargingStation from './ProChargingStation';
import ProPickleball from './ProPickleball';
import ProGuarantors from './ProGuarantors';
import ProMariana from './ProMariana';
import ProOrderProtection from './ProOrderProtection';

function ProjectCard({ project }) {
  // Check if this is one of the first 4 real company projects (no images)
  const isRealCompany = project.id <= 4;
  
  return (
    <div className="glass-morphism rounded-2xl w-full h-full flex flex-col overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
      {/* Conditional rendering: gradient header for real companies, image for others */}
      {isRealCompany ? (
        /* Gradient header for real companies */
        <div className="relative h-32 overflow-hidden">
          <div className={`absolute inset-0 ${
            project.id === 1 ? 'bg-gradient-to-br from-coral-500 via-teal-500 to-sky-500' :
            project.id === 2 ? 'bg-gradient-to-br from-sunset-500 via-coral-500 to-mint-500' :
            project.id === 3 ? 'bg-gradient-to-br from-sky-500 via-teal-500 to-coral-500' :
            'bg-gradient-to-br from-mint-500 via-sky-500 to-teal-500'
          } opacity-80`}></div>
          
          {/* Company icon/initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-black text-white">
                {project.name.split(' ')[0].charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-8 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-12 left-6 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      ) : (
        /* Project image for other projects */
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-600/80 to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project title */}
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-coral-300 transition-colors duration-300">
          <a href={project.url} target='_blank' rel='noopener noreferrer' className="hover:underline">
            {project.name}
          </a>
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools?.slice(0, 6).map((tool, index) => (
              <span 
                key={index}
                className="bg-sky-500/20 text-sky-300 text-xs px-2 py-1 rounded-md border border-sky-500/30 hover:bg-sky-500/30 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
            {project.tools?.length > 6 && (
              <span className="text-gray-400 text-xs px-2 py-1">
                +{project.tools.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <a 
            href={project.url} 
            target='_blank' 
            rel='noopener noreferrer'
            className="text-coral-400 hover:text-coral-300 text-sm font-bold flex items-center gap-2 transition-colors duration-200"
          >
            <span>View Live</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="flex items-center gap-3">
            {project.code && (
              <a 
                href={project.code} 
                target='_blank' 
                rel='noopener noreferrer'
                className="text-teal-400 hover:text-teal-300 text-sm font-bold transition-colors duration-200"
              >
                Code
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target='_blank' 
                rel='noopener noreferrer'
                className="text-mint-400 hover:text-mint-300 text-sm font-bold transition-colors duration-200"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;