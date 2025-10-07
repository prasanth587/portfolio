import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Turning Ideas into Scalable Digital Products";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-3 sm:space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">Prasanth</span>
            <br />
            <span className="text-white">Mudaliyar</span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 space-y-2 sm:space-y-3">
            <p>Software Engineer | Web & App Developer</p>
            <div className="inline-flex items-center gap-2 text-green-400 text-base sm:text-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for Freelance Projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-12 sm:h-16 flex items-center justify-center px-4"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 min-h-[2rem] flex items-center text-center">
            {displayText}
            {showCursor && <span className="ml-1 animate-pulse text-blue-400">|</span>}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 w-full px-4"
        >
          <Button
            onClick={scrollToNext}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 neon-glow transition-all duration-300 px-6 sm:px-8 py-3 w-full sm:w-auto"
          >
            Explore My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass-effect hover:neon-glow transition-all duration-300 px-6 sm:px-8 py-3 w-full sm:w-auto"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          className="glass-effect hover:neon-glow transition-all duration-300 floating-animation group relative"
          onClick={() => {
            // TODO: Replace with actual resume PDF URL when available
            const resumeUrl = '/resume/Prasanth_Mudaliyar_Resume.pdf'; // You'll add your PDF file here
            
            // For now, show a message that resume will be available soon
            if (resumeUrl === '/resume/Prasanth_Mudaliyar_Resume.pdf') {
              // Create a temporary notification
              const notification = document.createElement('div');
              notification.innerHTML = `
                <div style="
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background: rgba(0, 0, 0, 0.9);
                  color: white;
                  padding: 16px 20px;
                  border-radius: 8px;
                  backdrop-filter: blur(10px);
                  border: 1px solid rgba(0, 212, 255, 0.3);
                  z-index: 9999;
                  font-size: 14px;
                  max-width: 300px;
                  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
                ">
                  📄 Resume will be available soon!<br>
                  <small style="color: #00d4ff;">Coming in the next update...</small>
                </div>
              `;
              document.body.appendChild(notification);
              
              // Remove notification after 3 seconds
              setTimeout(() => {
                document.body.removeChild(notification);
              }, 3000);
              return;
            }
            
            // When you add your actual resume, this will download it
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = '/public/prasanth.pdf'; // Place file in /public
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          title="Download Resume"
        >
          <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
        </Button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Download Resume
        </div>
      </motion.div>
    </section>
  );
}