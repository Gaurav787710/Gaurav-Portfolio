import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github, X, MonitorPlay, ArrowLeft, Maximize2 } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  isPrivate?: boolean;
  hideLinks?: boolean;
  caseStudy?: {
    paragraphs: string[];
    screenshots: string[];
    video: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dudh Passbook: Multi-Role Access & Dairy Management",
    description: "Dudh Passbook is an end-to-end, offline-first dairy management platform built with Flutter, local SQLite, and Firebase for real-time cloud synchronization. It automates complex milk rate calculations, billing, and PDF reporting, backed by a highly secure, multi-role (Admin/Staff) custom authentication architecture.",
    role: "Lead Mobile Developer & Architect",
    tech: ["Flutter", "SQLite", "Firebase", "Dart"],
    image: "/Dudh Passbook/Frame.png",
    liveLink: "https://my-diray-83de8.web.app",
    githubLink: "https://github.com/Gaurav787710/dudh-passbook-flutter",
    isPrivate: false,
    caseStudy: {
      paragraphs: [
        "Dudh Passbook was engineered to solve the core challenges of rural dairy management, where internet connectivity is often unreliable. We implemented an offline-first architecture using local SQLite databases that seamlessly synchronize with Firebase Cloud Firestore whenever a connection is established.",
        "A major technical achievement in this project was the custom multi-role authentication system. It strictly separates Admin and Staff privileges, ensuring that sensitive financial data and rate configurations are protected while allowing staff to perform daily milk collection entries efficiently.",
        "The application also features a robust automated billing engine that handles complex, dynamic milk rate calculations based on FAT/SNF parameters. It generates professional PDF reports and invoices on the fly, significantly reducing manual administrative work for dairy owners."
      ],
      screenshots: [
        "/Dudh Passbook/flutter_01.png",
        "/Dudh Passbook/flutter_02.png",
        "/Dudh Passbook/flutter_03.png",
        "/Dudh Passbook/flutter_04.png",
        "/Dudh Passbook/flutter_05.png",
        "/Dudh Passbook/flutter_06.png",
        "/Dudh Passbook/flutter_07.png",
        "/Dudh Passbook/flutter_08.png",
        "/Dudh Passbook/flutter_09.png",
        "/Dudh Passbook/flutter_10.png",
        "/Dudh Passbook/flutter_11.png"
      ]
    }
  },
  {
    id: 2,
    title: "SwiftRoute - P2P Parcel Delivery App",
    description: "A Secure Peer-to-Peer Logistics Platform with AI-KYC, Escrow Payments, & Offline TOTP Verification.",
    role: "Lead Mobile Developer & Architect",
    tech: ["Flutter", "Firebase", "Dart", "Kotlin", "YAML", "XML"],
    image: "/Swfitp2p/swfitp2p.png",
    liveLink: "coming_soon",
    githubLink: "#",
    isPrivate: true,
    caseStudy: {
      paragraphs: [
        "SwiftRoute is a peer-to-peer logistics platform designed to connect senders with travelers. The primary UI/UX challenge was designing a dual-role interface that allows users to seamlessly switch between 'Sender' and 'Traveler' modes without cognitive overload. We focused heavily on building a trustworthy, transparent, and accessible user journey.",
        "For the design system, we adopted a modern, mobile-first approach using Flutter's Material 3 guidelines. The interface features a clean, high-contrast color palette to emphasize security and reliability. We incorporated fluid micro-interactions, such as animated role-switching pills, interactive map overlays, and dynamic status tracking timelines to keep users engaged.",
        "The frontend architecture spans over 35 meticulously crafted screens. Key UI highlights include an intuitive 4-step KYC verification flow with real-time visual feedback, a comprehensive digital wallet dashboard, and an interactive live-tracking map. The UI was prototyped in Figma and brought to life using Flutter, ensuring a buttery-smooth, responsive experience across all devices."
      ],
      screenshots: [
        "/Swfitp2p/flutter_01.png",
        "/Swfitp2p/flutter_02.png",
        "/Swfitp2p/flutter_03.png",
        "/Swfitp2p/flutter_04.png",
        "/Swfitp2p/flutter_05.png",
        "/Swfitp2p/flutter_06.png",
        "/Swfitp2p/flutter_07.png",
        "/Swfitp2p/flutter_08.png",
        "/Swfitp2p/flutter_09.png",
        "/Swfitp2p/flutter_10.png",
        "/Swfitp2p/flutter_11.png",
        "/Swfitp2p/flutter_12.png",
        "/Swfitp2p/flutter_13.png",
        "/Swfitp2p/flutter_14.png",
        "/Swfitp2p/flutter_15.png",
        "/Swfitp2p/flutter_16.png",
        "/Swfitp2p/flutter_17.png"
      ]
    }
  },
  {
    id: 3,
    title: "Interactive Developer Portfolio",
    description: "A modern, highly interactive personal portfolio website designed and developed from scratch to showcase my projects, skills, and professional journey. Features smooth animations, responsive design, and a custom glassmorphism UI.",
    role: "Frontend Developer & UI/UX Designer",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    liveLink: "#",
    githubLink: "https://github.com/Gaurav787710/Gaurav-Portfolio",
    isPrivate: false,
    caseStudy: {
      paragraphs: [
        "I built this portfolio to serve as a dynamic resume and a playground for experimenting with modern web technologies. The goal was to create an immersive experience that reflects my design sensibilities and technical capabilities.",
        "The architecture is built on React and TypeScript for robust component management, styled entirely with Tailwind CSS for a sleek, custom design system. I heavily utilized Framer Motion to orchestrate complex, fluid animations that guide the user's attention without being overwhelming.",
        "Key features include a custom glassmorphism UI, interactive project modals with deep-dive case studies, and a fully responsive layout that ensures a premium experience across all devices."
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
      ]
    }
  },
  {
    id: 4,
    title: "AI-Assisted App & Website Themes",
    description: "Exploring the power of AI to generate stunning, conceptual themes for mobile apps and websites, accelerating the initial design and ideation phase.",
    role: "Prompt Engineer & UI Designer",
    tech: ["Midjourney", "DALL-E", "Figma", "Prompt Engineering"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    liveLink: "#",
    githubLink: "#",
    hideLinks: true,
    caseStudy: {
      paragraphs: [
        "I leverage advanced AI image generation tools to rapidly prototype and ideate visual themes for mobile applications and websites. This allows for quick exploration of various color palettes, layouts, and aesthetic directions.",
        "By crafting precise prompts, I can generate highly specific UI concepts—ranging from sleek, minimalist dashboard interfaces to vibrant, engaging e-commerce app themes. This AI-assisted workflow significantly accelerates the creative process and helps visualize ideas instantly.",
        "It is important to note that while AI is incredibly powerful for generating visual concepts, layouts, and theme ideas, it does not write the final production code. The actual development and implementation of the user interface are meticulously hand-crafted by me to ensure accessibility, performance, and pixel-perfect responsiveness."
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
      ]
    }
  }
];

type ProjectRouteState = {
  projectId: number;
  caseStudyOpen: boolean;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getProjectPath = (project: Project, caseStudyOpen = false) => {
  const basePath = `/project/${project.id}-${slugify(project.title)}`;
  return caseStudyOpen ? `${basePath}/case-study` : basePath;
};

const parseProjectRoute = (pathname: string): ProjectRouteState | null => {
  const decodedPathname = decodeURIComponent(pathname);
  const routeMatch = decodedPathname.match(/^\/project\/([^/]+?)(?:\/(case-study))?\/?$/i);

  if (!routeMatch) {
    return null;
  }

  const segment = routeMatch[1].trim();
  const caseStudyOpen = Boolean(routeMatch[2]);

  const idWithSlugMatch = segment.match(/^(\d+)-(.+)$/);
  if (idWithSlugMatch) {
    const routeId = Number(idWithSlugMatch[1]);
    const projectById = projects.find((project) => project.id === routeId);
    if (projectById) {
      return { projectId: projectById.id, caseStudyOpen };
    }
  }

  const segmentSlug = slugify(segment);
  const projectBySlug = projects.find((project) => slugify(project.title) === segmentSlug);
  if (projectBySlug) {
    return { projectId: projectBySlug.id, caseStudyOpen };
  }

  const projectByLegacySuffix = projects.find((project) => {
    const projectSlug = slugify(project.title);
    return segmentSlug.startsWith(projectSlug) && segmentSlug.endsWith(String(project.id));
  });
  if (projectByLegacySuffix) {
    return { projectId: projectByLegacySuffix.id, caseStudyOpen };
  }

  return null;
};

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const syncStateFromPath = () => {
      const routeState = parseProjectRoute(window.location.pathname);

      if (!routeState) {
        setSelectedId(null);
        setCaseStudyOpen(false);
        return;
      }

      setSelectedId(routeState.projectId);
      setCaseStudyOpen(routeState.caseStudyOpen);
    };

    syncStateFromPath();
    window.addEventListener('popstate', syncStateFromPath);

    return () => {
      window.removeEventListener('popstate', syncStateFromPath);
    };
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: true }));
    } else {
      document.body.style.overflow = 'auto';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: false }));
      setCaseStudyOpen(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: false }));
    };
  }, [selectedId]);

  useEffect(() => {
    const currentPath = decodeURIComponent(window.location.pathname);

    if (selectedId === null) {
      if (currentPath.startsWith('/project/')) {
        window.history.replaceState({}, '', '/#projects');
      }
      return;
    }

    const selectedProjectForPath = projects.find((project) => project.id === selectedId);
    if (!selectedProjectForPath) {
      return;
    }

    const targetPath = getProjectPath(selectedProjectForPath, caseStudyOpen);
    if (currentPath !== targetPath) {
      window.history.replaceState({ projectId: selectedId, caseStudyOpen }, '', targetPath);
    }
  }, [selectedId, caseStudyOpen]);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">A selection of my recent work, showcasing full-stack capabilities and modern design principles.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <motion.div 
                  layoutId={`project-container-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group border border-white/10 hover:border-blue-500/30 transition-colors duration-300 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 md:h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <motion.img
                      layoutId={`project-image-${project.id}`}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</motion.h3>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">Description</span>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-500">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto text-blue-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details <span className="text-lg">→</span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 flex flex-col pointer-events-auto shadow-2xl"
              >
                <div className="relative h-48 sm:h-64 md:h-[450px] shrink-0 overflow-hidden bg-black/50 flex items-center justify-center">
                  {/* Blurred Background Image */}
                  <img
                    src={selectedProject.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Main Image */}
                  <motion.img
                    layoutId={`project-image-${selectedProject.id}`}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors z-20"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 md:p-12 flex flex-col gap-4 md:gap-6 relative z-10">
                  <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 border border-white/20 text-gray-200 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-8 mt-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-blue-500"></span>
                        Overview
                      </h4>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-blue-500"></span>
                        My Role
                      </h4>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedProject.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                    <button
                      onClick={(e) => { e.stopPropagation(); setCaseStudyOpen(true); }}
                      className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                    >
                      <MonitorPlay size={20} />
                      <span>Case Study</span>
                    </button>
                    
                    {!selectedProject.hideLinks && (
                      <>
                        {selectedProject.liveLink === 'coming_soon' ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setToastMessage("This website is currently under development and will be available soon.");
                              setTimeout(() => setToastMessage(null), 3000);
                            }}
                            className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                          >
                            <ExternalLink size={20} />
                            <span>Live Website</span>
                          </button>
                        ) : (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                          >
                            <ExternalLink size={20} />
                            <span>Live Website</span>
                          </a>
                        )}
                        
                        {selectedProject.isPrivate ? (
                          <div className="relative group flex-1 md:flex-none">
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="w-full h-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-500 font-medium cursor-not-allowed"
                            >
                              <Github size={20} />
                              <span>Source Code</span>
                            </button>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 p-4 bg-gray-900 border border-white/10 rounded-xl text-sm text-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-50 pointer-events-none">
                              <p>Source code is unavailable for this project. As a proprietary startup application, the codebase is confidential and cannot be shared publicly. Please feel free to explore the source code of my other projects.</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        ) : (
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300"
                          >
                            <Github size={20} />
                            <span>Source Code</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Case Study Full Screen Modal */}
            <AnimatePresence>
              {caseStudyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="fixed inset-0 bg-[#050505] z-[120] overflow-y-auto"
                >
                  {/* Header */}
                  <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 p-4 md:p-6 flex items-center justify-between z-50">
                    <button onClick={() => setCaseStudyOpen(false)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <ArrowLeft size={24} />
                      <span className="font-medium">Back to Project</span>
                    </button>
                    <h2 className="text-xl font-bold text-white hidden md:block">{selectedProject.title} - Case Study</h2>
                    <div className="w-24"></div> {/* Spacer for centering */}
                  </div>

                  {/* Content */}
                  <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{selectedProject.title}</h1>
                    
                    {/* Hero / Theme Section */}
                    <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video shadow-2xl relative group">
                      {selectedProject.caseStudy?.video ? (
                        <video 
                          src={selectedProject.caseStudy.video} 
                          controls 
                          className="w-full h-full object-cover"
                          poster={selectedProject.image}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20"></div>
                        </>
                      )}
                    </div>

                    {/* Detailed Description */}
                    <div className="prose prose-invert max-w-none mb-16">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-purple-500"></span>
                        Project Deep Dive
                      </h3>
                      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        {selectedProject.caseStudy?.paragraphs?.map((p, i) => (
                          <p key={i}>{p}</p>
                        )) || (
                          <>
                            <p>This project involved building a scalable architecture from the ground up. We focused on performance, security, and user experience.</p>
                            <p>Key challenges included managing real-time data synchronization and ensuring offline capabilities for mobile users. We utilized modern frameworks to achieve a seamless experience across all devices.</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Screenshots Gallery */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-purple-500"></span>
                        Gallery & Screenshots
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {(selectedProject.caseStudy?.screenshots || [selectedProject.image, selectedProject.image]).map((img, i) => (
                          <div 
                            key={i} 
                            className="relative mx-auto w-full max-w-[260px] aspect-[9/19.5] rounded-3xl border border-white/20 shadow-xl overflow-hidden group bg-[#050505] cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img 
                              src={img} 
                              alt={`Screenshot ${i+1}`} 
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="bg-black/60 p-3 rounded-full text-white backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                <Maximize2 size={24} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                >
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-50"
                  >
                    <X size={24} />
                  </button>
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedImage}
                    alt="Full screen screenshot"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>

      {/* Toast Message */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-white text-black px-6 py-3 rounded-full shadow-2xl font-medium flex items-center gap-2"
          >
            <ExternalLink size={18} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
