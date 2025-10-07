import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';
import { Button } from './ui/button';

const navigationItems = [
  { id: 'hero', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
  { id: 'projects', label: 'Projects', icon: <Code className="h-5 w-5" /> },
  { id: 'skills', label: 'Skills', icon: <Award className="h-5 w-5" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> }
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'hero' ? '' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Hamburger (left side) */}
      {!isOpen && (
        <motion.div
          className="fixed top-4 left-4 z-50 lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            className="glass-effect hover:neon-glow transition-all duration-300 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md border border-white/20 touch-feedback"
            aria-label="Open navigation menu"
          >
            <motion.div
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu className="h-6 w-6 text-white" />
            </motion.div>
          </Button>
        </motion.div>
      )}

      {/* Close Button - X (right side when menu is open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-4 right-4 z-50 lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="glass-effect neon-glow bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md border border-white/20 touch-feedback"
              aria-label="Close navigation menu"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed left-0 top-0 h-full w-80 max-w-[85vw] glass-effect border-r border-white/10 z-50 lg:hidden bg-gradient-to-b from-black/90 to-black/95 backdrop-blur-xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="mb-8 mt-16">
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-gray-400 text-sm"
                  >
                    Explore my portfolio
                  </motion.p>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-4 p-4 rounded-lg text-left hover:bg-white/10 transition-all duration-300 group active:scale-95 touch-manipulation"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:neon-glow transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Footer */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-gray-400 text-xs text-center">
                    Prasanth Mudaliyar
                  </p>
                  <p className="text-gray-500 text-xs text-center mt-1">
                    Software Engineer
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}