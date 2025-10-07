import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, MapPin, Calendar, Languages, Briefcase, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:neon-glow transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Prasanth Mudaliyar</h3>
                  <p className="text-blue-400">21 years old • Software Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                A passionate Software Engineer and Computer Science specialist from St. Joseph University, Chennai, Tamilnadu, 
                with a strong foundation in creating innovative digital solutions. My journey began 
                during university when I built ConnectHub, an innovative campus platform that 
                delivered food and beverages directly to students in their classrooms, 
                which sparked my love for solving real-world problems through technology.
              </p>
              
              {/* Freelancer availability banner */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-6 border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-green-400" />
                  <p className="text-green-400 font-medium">Available for Freelance Projects</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Ready to build your next web application, mobile app, or custom software solution
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">Chennai, Tamilnadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">21 years old</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-pink-400" />
                  <span className="text-gray-300">Tamil, English, Hindi</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass-effect border-0 hover:neon-glow transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-64 md:h-80">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570649243616-238b814943e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlJTIwbWluaW1hbHxlbnwxfHx8fDE3NTkyMjgwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Software Engineer Workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">My Journey</h4>
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                      From building ConnectHub, which revolutionized campus dining by 
                      delivering food directly to classrooms, to working as a Software 
                      Engineer at MG Logistics, I've been constantly evolving and learning 
                      new technologies to create impactful solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 sm:p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 sm:p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Projects Built</div>
              </motion.div>
            </div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            >
              <Button
                onClick={() => {
                  const resumeUrl = '/prasanth.pdf'; // Place file in /public
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Prasanth_Mudaliyar_Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 neon-glow transition-all duration-300 py-3 px-6 group"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
