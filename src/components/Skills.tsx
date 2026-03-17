import { motion } from 'motion/react';
import { Code, Database, Smartphone, Layout, Server, DatabaseZap } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend / UI",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "HTML", desc: "Building the core structure of web pages." },
      { name: "CSS", desc: "Styling and responsive design for modern UIs." },
      { name: "JavaScript", desc: "Adding interactivity and dynamic content." },
      { name: "React", desc: "Creating component-based user interfaces." },
      { name: "Next.js", desc: "Building SEO-friendly, server-rendered React apps." },
      { name: "Tailwind CSS", desc: "Rapid UI development with utility classes." },
      { name: "Figma", desc: "Designing UI/UX wireframes and prototypes." }
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "Node.js", desc: "Building scalable server-side applications." },
      { name: "Python", desc: "Data processing, scripting, and backend logic." },
      { name: "PHP", desc: "Developing dynamic server-side web applications." },
      { name: "Express", desc: "Creating robust RESTful APIs with Node.js." },
      { name: "FastAPI", desc: "Building high-performance Python APIs." },
      { name: "GraphQL", desc: "Efficient and flexible data querying for APIs." }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <DatabaseZap className="w-6 h-6 text-green-400" />,
    skills: [
      { name: "MongoDB", desc: "NoSQL database for flexible data storage." },
      { name: "PostgreSQL", desc: "Reliable and robust relational database." },
      { name: "Firebase", desc: "Real-time database, auth, and cloud functions." },
      { name: "AWS", desc: "Deploying and managing cloud infrastructure." },
      { name: "Docker", desc: "Containerizing applications for consistent deployment." }
    ]
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-6 h-6 text-pink-400" />,
    skills: [
      { name: "Flutter", desc: "Building cross-platform mobile apps with Dart." },
      { name: "React Native", desc: "Developing native mobile apps using React." },
      { name: "Android Development", desc: "Creating native Android apps with Kotlin/Java." },
      { name: "iOS", desc: "Developing native iOS applications with Swift." }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & <span className="text-gradient">Technologies</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A comprehensive toolkit for building modern, scalable, and high-performance applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300 relative group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                {category.icon}
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="relative group/tooltip">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 border border-white/10 rounded-lg text-xs text-gray-300 text-center opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 shadow-xl pointer-events-none">
                      {skill.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
