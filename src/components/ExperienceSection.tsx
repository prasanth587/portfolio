import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "MG Logistics",
    period: "2023 - Present",
    location: "Chennai, Tamilnadu",
    description: "Developing scalable logistics solutions and optimizing delivery systems. Built comprehensive tracking systems and improved operational efficiency by 40%.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    achievements: [
      "Reduced delivery time by 30% through system optimization",
      "Built real-time tracking system serving 1000+ users",
      "Implemented automated workflow reducing manual work by 50%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "ConnectHub Project",
    period: "2022 - 2023",
    location: "Personal Project",
    description: "Built an innovative campus food delivery platform specifically designed to connect and deliver food and beverages directly to students in their classrooms. Revolutionized campus dining experience through technology innovation.",
    technologies: ["React", "Node.js", "MySQL", "Socket.io", "Stripe"],
    achievements: [
      "Served 500+ users across campus during testing phase",
      "Enabled direct classroom delivery reducing wait times by 70%",
      "Integrated real-time order tracking with classroom location mapping"
    ]
  },
  {
    id: 3,
    title: "Mobile App Developer",
    company: "Worker Hiring Platform",
    period: "2023 - 2024",
    location: "Personal Project",
    description: "Developed a comprehensive mobile application designed to connect workers with employers. Built with cross-platform compatibility and features for profile creation, skill verification, and streamlined hiring workflows.",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    achievements: [
      "Built for both iOS and Android platforms",
      "Implemented secure user authentication and profile management",
      "Created intuitive matching algorithm for worker-employer connections"
    ]
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section id="experience" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            My journey through different roles and projects that shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 sm:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-6 sm:left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 sm:border-4 border-background shadow-lg z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75"></div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <Card 
                  className={`glass-effect border-0 hover:neon-glow transition-all duration-300 cursor-pointer ${
                    selectedExperience === exp.id ? 'neon-glow' : ''
                  }`}
                  onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="text-sm sm:text-base">{exp.company}</span>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-400 transition-colors flex-shrink-0" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mb-4 text-xs sm:text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 border-blue-500/30 text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {selectedExperience === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-600 pt-4"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}