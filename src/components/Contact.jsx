import React, { useRef } from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo('.contact-item',
      { y: 50, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      }
    );
  }, { scope: container });

  const whatsappMessage = "Hi Mohd. Sahil! I came across your portfolio. I'm looking for a Frontend Developer & MIS Executive and would like to discuss a potential opportunity.";
  const hireMeLink = `https://wa.me/917007986578?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" ref={container} className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="contact-item text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Collaborate?</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Whether you need a full-stack application, an automated Google Apps Script workflow, or a data-driven dashboard, I'm ready to build it.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          <a href="mailto:ms0808033@gmail.com" className="contact-item flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email Me</p>
              <p className="text-slate-900 dark:text-white font-medium">ms0808033@gmail.com</p>
            </div>
          </a>

          <a href={hireMeLink} target="_blank" rel="noopener noreferrer" className="contact-item flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">WhatsApp</p>
              <p className="text-slate-900 dark:text-white font-medium">+91 7007986578</p>
            </div>
          </a>

          <div className="contact-item flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Location</p>
              <p className="text-slate-900 dark:text-white font-medium">India</p>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="contact-item lg:col-span-2 p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-white/5 dark:to-white/5 border border-slate-800 dark:border-white/10 shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Let's build something amazing together.
          </h3>
          <p className="text-slate-300 text-lg mb-10 relative z-10 max-w-lg">
            Looking for a developer who understands both frontend aesthetics and backend data flow? Let's connect.
          </p>
          <div className="relative z-10 flex flex-wrap gap-4">
            <a href={hireMeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-colors">
              <Send size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;