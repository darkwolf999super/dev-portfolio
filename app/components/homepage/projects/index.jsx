import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section id='projects' className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 right-10 w-72 h-72 bg-coral-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Featured</span>{' '}
            <span className="gradient-text-secondary">Projects</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-rainbow mx-auto rounded-full animate-pulse-glow"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Showcasing impactful solutions across AI, healthcare, fintech, and enterprise software
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="unique-card h-full hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-rainbow rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <ProjectCard project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;