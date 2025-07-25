import { experiences } from '@/utils/data/experience';

const ExperienceShowcase = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sunset-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-coral-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="gradient-text-special">Professional</span>{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-rainbow mx-auto rounded-full animate-pulse-glow"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Full-time positions at leading technology companies across AI, consulting, and enterprise software
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coral-500 via-teal-500 to-sky-500 rounded-full opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`flex items-center justify-center animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Experience card */}
                <div className="w-5/12">
                  <div className="group unique-card p-8 hover:scale-105 transition-all duration-300 relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-rainbow rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                    
                    <div className="relative">
                      {/* Company name */}
                      <h3 className="text-2xl font-black gradient-text mb-2">
                        {experience.company}
                      </h3>
                      
                      {/* Position */}
                      <h4 className="text-lg font-bold text-coral-300 mb-3">
                        {experience.title}
                      </h4>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-teal-300 text-sm font-medium">
                          {experience.duration}
                        </span>
                      </div>
                      
                      {/* Industry badge */}
                      <div className="inline-block">
                        <span className="bg-gradient-to-r from-sky-500/20 to-mint-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30">
                          {getIndustryTag(experience.company)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-gradient-rainbow rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get industry tags
const getIndustryTag = (company) => {
  const industryMap = {
    "TrueLetter.ai": "AI/ML",
    "BigRio": "Consulting",
    "Revaluate": "PropTech",
    "XpertDox": "HealthTech"
  };
  return industryMap[company] || "Technology";
};

export default ExperienceShowcase;
