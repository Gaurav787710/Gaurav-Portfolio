import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A passionate developer dedicated to crafting exceptional digital experiences.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Goverdhan Khichar</h3>
                    <p className="text-blue-400 font-medium">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I am a Full-Stack Developer who loves turning ideas into powerful digital products.
                  </p>
                  <p>
                    From UI design to backend architecture, I build complete applications that are fast, scalable, and user-friendly.
                  </p>
                  <p>
                    I specialize in building modern websites, mobile apps, and full-stack platforms that help businesses grow.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="glass p-4 md:p-6 rounded-2xl border border-white/5 flex items-center space-x-4">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-2xl font-bold">5+</h4>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                  </div>
                  <div className="glass p-4 md:p-6 rounded-2xl border border-white/5 flex items-center space-x-4">
                    <GraduationCap className="w-8 h-8 text-green-400" />
                    <div>
                      <h4 className="text-2xl font-bold">50+</h4>
                      <p className="text-sm text-gray-400">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass border border-white/10 hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Developer Workspace"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <p className="text-xl font-medium italic text-gray-200">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-sm text-gray-400 mt-2">— Cory House</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
