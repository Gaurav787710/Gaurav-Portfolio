import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-0"
        >
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter">
            GK<span className="text-blue-500">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Goverdhan Khichar. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-6"
        >
          <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
        </motion.div>
      </div>
    </footer>
  );
}
