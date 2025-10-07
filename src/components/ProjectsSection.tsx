import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Database, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import connectHubImage from "figma:asset/f305bc3f6cb4145227f9bb636b82f91f75ca79bb.png";

const projects = [
  {
    id: 1,
    title: "ConnectHub",
    subtitle: "Campus Food & Beverage Delivery",
    description: "An innovative campus delivery platform connecting users with food and beverages delivered directly to their classrooms.",
    longDescription: "ConnectHub was my flagship personal project - a specialized platform designed to deliver food and beverages directly to students in their classrooms. Built with React Native for cross-platform mobile experience and Firebase for real-time data synchronization. This innovative approach eliminated the need for students to leave their classes for meals, serving over 500+ users during the testing phase. The platform featured classroom location mapping, real-time delivery tracking, and integrated payment systems tailored for the campus environment.",
    image: connectHubImage,
    technologies: ["React Native", "Firebase", "Node.js", "Socket.io", "Stripe"],
    type: "Mobile Application",
    icon: <Smartphone className="h-6 w-6" />,
    github: "https://github.com/prasanth587/Construction-App.git",
    live: "https://connecthub-demo.com",
    features: [
      "Cross-platform mobile app built with React Native",
      "Real-time Firebase integration for live order tracking",
      "Classroom-specific delivery with location mapping system",
      "Campus vendor integration for food and beverage options",
      "User authentication and secure payment processing",
      "Push notifications for order status and delivery arrival"
    ]
  },
  {
    id: 2,
    title: "MG Logistics Dashboard",
    subtitle: "Logistics Management System",
    description: "Scalable logistics solution for tracking deliveries, managing inventory, and optimizing routes.",
    longDescription: "A comprehensive logistics management system designed for MG Logistics to streamline their operations. The system includes route optimization, real-time package tracking, inventory management, and analytics dashboard. Built to handle high-volume operations with robust security and scalability features.",
    image: "https://images.unsplash.com/photo-1603702607501-a0e27733e2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Docker"],
    type: "Enterprise Application",
    icon: <Database className="h-6 w-6" />,
    github: "https://github.com/prasanth",
    live: "https://mg-logistics-demo.com",
    features: [
      "Route optimization algorithm reducing delivery time by 30%",
      "Real-time GPS tracking for fleet management",
      "Automated inventory alerts and restocking",
      "Analytics dashboard with performance metrics",
      "Multi-role access control system"
    ]
  },
  {
    id: 3,
    title: "Worker Hiring Platform",
    subtitle: "Mobile & Web Application",
    description: "Developed a comprehensive platform for connecting skilled workers with employers.",
    longDescription: "A complete platform designed to bridge the gap between skilled workers and potential employers. The application features detailed worker profiles, skill showcasing capabilities, and employer browsing functionality. Built with modern technologies including user authentication, profile management, and intelligent matching algorithms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    type: "Mobile Application",
    icon: <Smartphone className="h-6 w-6" />,
    github: "https://github.com/prasanth",
    live: "https://worker-platform-demo.com",
    features: [
      "Built for cross-platform deployment (iOS & Android)",
      "Implemented skill verification system with portfolio uploads",
      "Developed in-app messaging and communication features",
      "Created geolocation-based worker discovery algorithm",
      "Integrated secure payment processing architecture"
    ]
  },
  {
    id: 4,
    title: "ThriftStore",
    subtitle: "Sustainable Shopping Platform",
    description: "A modern e-commerce platform for buying and selling pre-owned items.",
    longDescription: "ThriftStore is a comprehensive e-commerce platform designed to promote sustainable shopping through the buying and selling of pre-owned items. Built with modern web technologies including Firebase for real-time data management.",
    image: "https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase"],
    type: "E-commerce Platform",
    icon: <ShoppingBag className="h-6 w-6" />,
    github: "https://github.com/prasanth",
    live: "https://thriftstore-demo.com",
    features: [
      "Modern responsive design optimized for all devices",
      "Advanced search and filtering with category browsing",
      "Secure user authentication and profile management",
      "Seller dashboard with inventory and sales analytics"
    ]
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A showcase of innovative solutions I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={{ perspective: '1000px' }}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 15 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card className="glass-effect border-0 hover:neon-glow transition-all duration-300 h-full cursor-pointer overflow-hidden group">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <div className="h-4 w-4 sm:h-6 sm:w-6">{project.icon}</div>
                      </div>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white border-white/20 text-xs">
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 text-xs sm:text-sm mb-2">{project.subtitle}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-blue-500/30 text-blue-300">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 glass-effect hover:neon-glow transition-all duration-300 text-xs sm:text-sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 glass-effect hover:neon-glow transition-all duration-300 text-xs sm:text-sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       {/* Project Detail Modal */}
<Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
  <DialogContent className="max-w-5xl glass-effect border-0 text-white max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-lg">
    {selectedProject && (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            {selectedProject.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left - Project Image */}
          <div className="md:w-1/2 flex-shrink-0">
            <ImageWithFallback
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>

              <div>
                <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 max-h-48 overflow-y-auto">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap md:flex-nowrap">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                onClick={() => window.open(selectedProject.github, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> View Code
              </Button>
              <Button
                variant="outline"
                className="glass-effect hover:neon-glow flex-1"
                onClick={() => window.open(selectedProject.live, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Button>
            </div>
          </div>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>

      </div>
    </section>
  );
}
