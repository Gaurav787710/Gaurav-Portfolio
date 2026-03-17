import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ExternalLink } from 'lucide-react';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  botcheck: string;
};

const initialFormValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
  botcheck: '',
};

export default function Contact() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const fallbackEmail = import.meta.env.VITE_CONTACT_FALLBACK_EMAIL?.trim() || 'gauravchoudhary0911@gmail.com';

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(null);

    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.message.trim()) {
      setSubmitMessage({ type: 'error', text: 'Please fill in name, email, and message.' });
      return;
    }

    if (formValues.botcheck) {
      return;
    }

    try {
      setIsSubmitting(true);

      if (!web3FormsAccessKey) {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(fallbackEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            message: formValues.message.trim(),
            _subject: `Portfolio inquiry from ${formValues.name.trim()}`,
            _captcha: 'false',
            _template: 'table',
          }),
        });

        const result = await response.json();
        const isSuccess = result.success === true || result.success === 'true';
        const serviceMessage = typeof result.message === 'string' ? result.message : '';

        if (!response.ok || !isSuccess) {
          if (serviceMessage.toLowerCase().includes('activation')) {
            setSubmitMessage({
              type: 'error',
              text: 'Contact form activation pending. Please check your inbox and click the FormSubmit activation link once.',
            });
            return;
          }

          throw new Error(serviceMessage || 'Unable to send your message right now.');
        }

        setFormValues(initialFormValues);
        setSubmitMessage({ type: 'success', text: 'Message sent successfully. I will get back to you soon.' });
        return;
      }

      const payload = new FormData();
      payload.append('access_key', web3FormsAccessKey);
      payload.append('name', formValues.name.trim());
      payload.append('email', formValues.email.trim());
      payload.append('message', formValues.message.trim());
      payload.append('subject', `Portfolio inquiry from ${formValues.name.trim()}`);
      payload.append('from_name', 'Portfolio Contact Form');
      payload.append('botcheck', formValues.botcheck);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message right now.');
      }

      setFormValues(initialFormValues);
      setSubmitMessage({ type: 'success', text: 'Message sent successfully. I will get back to you soon.' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '';
      const isNetworkFailure = error instanceof TypeError;

      if (!isNetworkFailure) {
        setSubmitMessage({
          type: 'error',
          text: errorMessage || 'Unable to send your message right now. Please try again in a moment.',
        });
        return;
      }

      const subject = encodeURIComponent(`New project inquiry from ${formValues.name.trim()}`);
      const body = encodeURIComponent(
        `Name: ${formValues.name.trim()}\nEmail: ${formValues.email.trim()}\n\nMessage:\n${formValues.message.trim()}`,
      );

      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      setSubmitMessage({ type: 'info', text: 'Primary submit failed. Email app opened as fallback.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ready to start your next project? Get in touch and let's build something amazing together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="glass-card p-5 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FF7A00]" />
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${fallbackEmail}`}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#FF7A00]/10 flex items-center justify-center border border-[#FF7A00]/20">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-gray-400 font-medium">Email Me</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-200 break-all">{fallbackEmail}</p>
                  </div>
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~010321d61133038471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-[#F59E0B]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-gray-400 font-medium">Hire Me on Upwork</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-200 truncate">Freelance Profile</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#FF7A00]/20 hover:border-[#FF7A00]/50 transition-all text-gray-400 hover:text-[#FF7A00]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Gaurav787710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all text-gray-400 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 md:p-8 rounded-3xl border border-white/10 space-y-5 md:space-y-6 h-full">
              <input
                type="text"
                id="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                value={formValues.botcheck}
                onChange={handleChange}
              />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                  value={formValues.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#FF7A00] to-[#C2410C] hover:from-[#F59E0B] hover:to-[#FF7A00] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,122,0,0.3)] hover:shadow-[0_0_60px_rgba(255,122,0,0.5)] flex items-center justify-center space-x-2 overflow-hidden mt-4 border-t border-white/20 border-b border-black/50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Start a Project'}</span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {submitMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    submitMessage.type === 'success'
                      ? 'text-emerald-400'
                      : submitMessage.type === 'info'
                        ? 'text-amber-300'
                        : 'text-rose-400'
                  }`}
                >
                  {submitMessage.text}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
