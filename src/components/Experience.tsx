import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Persistent Systems Ltd.",
      location: "Pune, India",
      period: "2024 - Present",
      description: "Engineered a modern, scalable React page with a focus on performance and UI enhancement. Designed and built modular UI components using React and styled-components for a clean, consistent interface. Integrated Ruby-based REST APIs for dynamic data handling and optimized rendering performance using hooks, lazy loading, and code-splitting techniques.",
      technologies: ["React", "TypeScript", "HTML", "CSS", "REST APIs", "Ruby"],
      current: true
    },
    {
      title: "Software Engineer",
      company: "Persistent Systems Ltd.",
      location: "Pune, India",
      period: "2022 - 2024",
      description: "Resolved critical frontend issues by fixing customer-reported bugs related to performance, accessibility, and WCAG compliance. Improved page load speed and responsiveness through code optimizations, and ensured accessibility standards by addressing keyboard navigation, semantic HTML, and ARIA roles—enhancing user experience for all users, including those with disabilities.",
      technologies: ["React", "Typescript", "HTML", "CSS", "WCAG", "Accessibility"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${exp.current
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                        }`}>
                        {exp.current ? 'Current' : 'Past'}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center text-blue-600 font-medium mb-2">
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;