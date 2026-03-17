import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code2, Layers, Smartphone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './Projects';

const codeSnippets: Record<string, { file: string, code: string }> = {
  "React": { file: "App.tsx", code: "function App() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className=\"app\">\n      <h1>Hello React!</h1>\n    </div>\n  );\n}" },
  "Node.js": { file: "server.js", code: "const express = require('express');\nconst app = express();\n\napp.listen(3000, () => {\n  console.log('Server is running');\n});" },
  "Flutter": { file: "main.dart", code: "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  // ...\n}" },
  "Python": { file: "main.py", code: "def calculate_metrics(data):\n    result = [x * 2 for x in data]\n    return sum(result)\n\nprint(calculate_metrics([1, 2, 3]))" },
  "TypeScript": { file: "types.ts", code: "interface User {\n  id: string;\n  role: 'admin' | 'user';\n}\n\nconst checkAccess = (u: User) => {\n  return u.role === 'admin';\n};" },
  "Next.js": { file: "page.tsx", code: "import { Suspense } from 'react';\nimport Loading from './loading';\n\nexport default function Page() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <Data />\n    </Suspense>\n  );\n}" },
  "Firebase": { file: "db.ts", code: "import { initializeApp } from 'firebase/app';\nimport { getFirestore } from 'firebase/firestore';\n\nconst app = initializeApp(config);\nconst db = getFirestore(app);" },
  "Tailwind": { file: "styles.css", code: "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.btn-primary {\n  @apply px-4 py-2 bg-blue-600;\n}" }
};

const SkillBadge = ({ skill, isHovered, targetX, targetY, delay, onClick }: { skill: string, isHovered: boolean, targetX: number, targetY: number, delay: number, onClick: () => void }) => (
  <motion.div
    className={`absolute top-1/2 left-1/2 z-30 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
    initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.5 }}
    animate={{
      opacity: isHovered ? 1 : 0,
      x: isHovered ? `calc(-50% + ${targetX}px)` : "-50%",
      y: isHovered ? `calc(-50% + ${targetY}px)` : "-50%",
      scale: isHovered ? 1 : 0.5,
    }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: isHovered ? delay : 0
    }}
  >
    <div 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="cursor-pointer px-4 py-2 glass bg-[#111]/80 backdrop-blur-xl rounded-full border border-white/20 text-sm font-medium whitespace-nowrap shadow-[0_0_20px_rgba(59,130,246,0.2)] text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all"
    >
      {skill}
    </div>
  </motion.div>
);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [carouselRotation, setCarouselRotation] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    if (!selectedSkill) return;
    const fullCode = codeSnippets[selectedSkill]?.code || "// No code available";
    setDisplayedCode("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [selectedSkill]);

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselRotation(prev => prev - 90);
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselRotation(prev => prev + 90);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for freelance projects worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            Hi, I'm <br />
            <span className="text-gradient">Goverdhan Khichar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Full-Stack Web & App Developer | Specializing in UI Design & Backend Architecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.upwork.com/freelancers/~010321d61133038471"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] flex items-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Hire Me on Upwork</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#projects');
                if (target) {
                  setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
              className="px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors duration-300 flex items-center space-x-2 backdrop-blur-md"
            >
              <span>View My Projects</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - 3D Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] hidden lg:block perspective-1000"
        >
          {/* Wrapper for hover detection */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 z-20 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Main floating card */}
            <motion.div
              animate={{
                rotateX: isHovered ? 0 : [5, -5, 5],
                rotateY: isHovered ? 0 : [-5, 5, -5],
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: isHovered ? 0.3 : 6, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" }}
              className="w-full h-full glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 shadow-2xl relative z-10 bg-[#111]/80 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <Code2 className="text-gray-400 w-5 h-5" />
              </div>
              
              <div className="space-y-4 flex-1 py-6 overflow-hidden">
                {selectedSkill ? (
                  <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap text-left">
                    <code>{displayedCode}</code>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2 h-3 bg-green-400 ml-1 align-middle"
                    />
                  </pre>
                ) : (
                  <>
                    <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-blue-500/20 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-purple-500/20 rounded animate-pulse" />
                    <div className="h-4 w-4/5 bg-white/10 rounded animate-pulse" />
                  </>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-500 font-mono">
                  {selectedSkill ? codeSnippets[selectedSkill]?.file : "index.tsx"}
                </span>
                <span className="text-xs text-blue-400 font-mono">Saved</span>
              </div>
            </motion.div>

            {/* Floating Skills that appear on hover */}
            <SkillBadge skill="React" isHovered={isHovered} targetX={-180} targetY={-120} delay={0} onClick={() => setSelectedSkill("React")} />
            <SkillBadge skill="Node.js" isHovered={isHovered} targetX={180} targetY={-100} delay={0.05} onClick={() => setSelectedSkill("Node.js")} />
            <SkillBadge skill="Flutter" isHovered={isHovered} targetX={-190} targetY={60} delay={0.1} onClick={() => setSelectedSkill("Flutter")} />
            <SkillBadge skill="Python" isHovered={isHovered} targetX={190} targetY={80} delay={0.15} onClick={() => setSelectedSkill("Python")} />
            <SkillBadge skill="TypeScript" isHovered={isHovered} targetX={-100} targetY={-220} delay={0.2} onClick={() => setSelectedSkill("TypeScript")} />
            <SkillBadge skill="Next.js" isHovered={isHovered} targetX={100} targetY={-210} delay={0.25} onClick={() => setSelectedSkill("Next.js")} />
            <SkillBadge skill="Firebase" isHovered={isHovered} targetX={-80} targetY={220} delay={0.3} onClick={() => setSelectedSkill("Firebase")} />
            <SkillBadge skill="Tailwind" isHovered={isHovered} targetX={100} targetY={210} delay={0.35} onClick={() => setSelectedSkill("Tailwind")} />
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            onClick={() => setShowProjectsModal(true)}
            whileHover={{ scale: 1.1 }}
            className="absolute top-20 -right-4 w-24 h-24 glass rounded-xl flex items-center justify-center border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] cursor-pointer hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all z-30"
          >
            <Layers className="text-purple-400 w-10 h-10" />
          </motion.div>

          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 left-10 w-20 h-20 glass rounded-full flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <Smartphone className="text-blue-400 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Projects Modal */}
      <AnimatePresence>
        {showProjectsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md perspective-1000"
            onClick={() => setShowProjectsModal(false)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white z-50 p-2 glass rounded-full transition-colors"
              onClick={() => setShowProjectsModal(false)}
            >
              <X size={24} />
            </button>

            <button 
              onClick={prevProject} 
              className="absolute left-4 md:left-10 text-white/50 hover:text-white z-50 p-4 glass rounded-full transition-colors hover:bg-white/10"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={nextProject} 
              className="absolute right-4 md:right-10 text-white/50 hover:text-white z-50 p-4 glass rounded-full transition-colors hover:bg-white/10"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              className="relative w-72 h-[450px] md:w-96 md:h-[500px]"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: carouselRotation }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {projects.map((project, index) => {
                const rotateY = index * 90;
                return (
                  <div
                    key={project.id}
                    className="absolute inset-0 glass-card rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center overflow-hidden bg-[#111]/90"
                    style={{
                      transform: `rotateY(${rotateY}deg) translateZ(300px)`,
                      backfaceVisibility: 'hidden'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-40 object-cover rounded-xl mb-4" 
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-6 flex-grow">{project.description}</p>
                    <div className="mt-auto flex gap-2 flex-wrap justify-center w-full">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-xs px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
