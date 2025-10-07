import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileNavigation } from './components/MobileNavigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ContactsAdmin } from './components/ContactsAdmin';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Easter egg: typing "hello" triggers a fun animation
    // Admin access: typing "admin" opens the contacts admin panel
    let typedSequence = '';
    const handleKeyPress = (e: KeyboardEvent) => {
      typedSequence += e.key.toLowerCase();
      if (typedSequence.includes('hello')) {
        triggerEasterEgg();
        typedSequence = '';
      }
      if (typedSequence.includes('admin')) {
        setShowAdmin(true);
        typedSequence = '';
      }
      if (typedSequence.length > 10) {
        typedSequence = typedSequence.slice(-5);
      }
    };

    const triggerEasterEgg = () => {
      // Create floating hearts animation
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.innerHTML = '💫';
          heart.style.position = 'fixed';
          heart.style.left = Math.random() * window.innerWidth + 'px';
          heart.style.top = window.innerHeight + 'px';
          heart.style.fontSize = '2rem';
          heart.style.zIndex = '9999';
          heart.style.pointerEvents = 'none';
          heart.style.animation = 'float-up 3s ease-out forwards';
          
          document.body.appendChild(heart);
          
          setTimeout(() => {
            document.body.removeChild(heart);
          }, 3000);
        }, i * 100);
      }
      
      // Add the keyframe animation
      if (!document.getElementById('easter-egg-styles')) {
        const style = document.createElement('style');
        style.id = 'easter-egg-styles';
        style.textContent = `
          @keyframes float-up {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, []);

  // Show admin panel if requested
  if (showAdmin) {
    return <ContactsAdmin onBack={() => setShowAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Navigation Dots - Desktop Only */}
      <motion.nav 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed right-4 xl:right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        aria-label="Page navigation"
      >
        <div className="space-y-4">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <div key={section.id} className="group relative">
              <button
                onClick={() => {
                  const element = document.getElementById(section.id === 'hero' ? '' : section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-400 transition-all duration-300 hover:scale-125 group-hover:neon-glow"
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </div>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            © 2024 PrasanthMudaliyar. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Built with React, TypeScript, and lots of ☕ | Try typing "hello" for a surprise! 
          </p>
        </div>
      </motion.footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}