import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Server, 
  Palette,
  Brain,
  Zap
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "🟨" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "C++", level: 85, icon: "⚡" },
      { name: "C", level: 80, icon: "🔧" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "Firebase", level: 90, icon: "🔥" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Redis", level: 70, icon: "⚡" }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Flutter", level: 75, icon: "🐦" },
      { name: "iOS Development", level: 70, icon: "🍎" },
      { name: "Android Development", level: 72, icon: "🤖" },
      { name: "Cross-platform", level: 88, icon: "🔄" }
    ]
  }
];

const softSkills = [
  { name: "Problem Solving", icon: <Brain className="h-6 w-6" />, level: 95 },
  { name: "Team Leadership", icon: <Zap className="h-6 w-6" />, level: 88 },
  { name: "Project Management", icon: <Palette className="h-6 w-6" />, level: 85 },
  { name: "Communication", icon: <Globe className="h-6 w-6" />, level: 90 }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass-effect border-0 hover:neon-glow transition-all duration-300 h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      <div className="h-6 w-6 sm:h-8 sm:w-8">{category.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg">{skill.icon}</span>
                            <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                          </div>
                          <span className="text-blue-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            <span className="gradient-text">Professional Skills</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 sm:p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="h-5 w-5 sm:h-6 sm:w-6">{skill.icon}</div>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">{skill.name}</h4>
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                    <svg className="transform -rotate-90 w-12 h-12 sm:w-16 sm:h-16">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        className="text-gray-700 sm:hidden"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-gray-700 hidden sm:block"
                      />
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: 125.66, strokeDashoffset: 125.66 }}
                        animate={isInView ? {
                          strokeDashoffset: 125.66 - (125.66 * skill.level) / 100
                        } : {
                          strokeDashoffset: 125.66
                        }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                        className="sm:hidden"
                      />
                      <motion.circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: 175.92, strokeDashoffset: 175.92 }}
                        animate={isInView ? {
                          strokeDashoffset: 175.92 - (175.92 * skill.level) / 100
                        } : {
                          strokeDashoffset: 175.92
                        }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                        className="hidden sm:block"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-blue-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications/Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Achievements</span>
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { number: "500+", label: "Users Served", icon: "👥" },
              { number: "10+", label: "Projects Completed", icon: "🚀" },
              { number: "40%", label: "Efficiency Improvement", icon: "📈" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass-effect rounded-xl p-4 sm:p-6 hover:neon-glow transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}