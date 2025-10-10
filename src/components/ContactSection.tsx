import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Star, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Import Supabase info for API endpoint
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-baa08b7c/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success("Thank you for your message! I'll get back to you soon. 🚀");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Try to get more specific error information
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        toast.error(`Failed to submit message: ${error.message}. Please try again or email me directly.`);
      } else {
        toast.error("Failed to submit message. Please try again or email me directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "prazanthmudalicar@gmail.com",
      link: "mailto:prazanthmudalicar@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tamilnadu, Chennai - Kavangarai",
      
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />, 
      label: "GitHub",
      username: "@prasanthmudaliyar",
      link: "https://github.com/prasanth587"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      username: "prasanth-mudaliyar",
      link: "www.linkedin.com/in/prasanth-mudaliyar-89574a282"
    },
     {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      username: "__mudaliyar_",
      link: "https://www.instagram.com/____mudaliyar_?igsh=MW4yaXpnNmZjN2NzZA=="
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-effect border-0 hover:neon-glow transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-effect border-white/10 focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass-effect border-white/10 focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass-effect border-white/10 focus:border-blue-400 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="glass-effect border-white/10 focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 neon-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{social.label}</p>
                      <p className="text-white font-medium">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Freelance Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Freelance Services Available
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-blue-400">•</span>
                  <span>Custom Web Application</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">•</span>
                  <span>Mobile App Development</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-purple-400">•</span>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-pink-400">•</span>
                  <span>E-commerce & Business Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial/Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Passionate about creating innovative solutions that make a real difference. 
                Let's build something extraordinary together!"
              </blockquote>
              <p className="text-blue-400 font-medium">- Prasanth Mudaliyar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}