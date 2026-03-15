/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Sparkles,
  Music,
  Laugh,
  Instagram,
  Twitter,
  Facebook,
  Menu,
  X,
  ChevronRight,
  PartyPopper,
  Palette,
  Smile,
  Star,
  Wand2,
  Music2
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="text-festival-purple w-8 h-8" />
          <span className="spooky-text text-2xl tracking-wider text-festival-purple">SING, SMILE & FUN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Adventures', 'Lineup', 'Tickets', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="accent-text text-sm font-bold hover:text-festival-orange transition-colors uppercase tracking-widest text-festival-dark"
            >
              {item}
            </a>
          ))}
          <button className="bg-festival-purple text-white px-6 py-2 rounded-full font-bold accent-text text-xs tracking-tighter hover:bg-festival-orange transition-all transform hover:scale-105 active:scale-95">
            JOIN THE FUN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-festival-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-festival-soft-purple overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Home', 'Adventures', 'Lineup', 'Tickets', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="accent-text text-lg font-bold text-festival-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-festival-purple text-white px-6 py-3 rounded-full font-bold accent-text">
                JOIN THE FUN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yIcons = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-festival-soft-purple"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,80,187,0.15),transparent_70%)]" />
        <img 
          src="https://images.unsplash.com/photo-1572248521361-977382216834?auto=format&fit=crop&q=80&w=2000" 
          alt="Colorful Music Festival Background"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-festival-light/50 to-festival-light" />
      </motion.div>
 
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="accent-text text-festival-purple font-bold tracking-[0.5em] text-sm mb-4 block uppercase">The Most Musical Week of the Year</span>
          <h1 className="spooky-text text-7xl md:text-9xl lg:text-[12rem] leading-none mb-8 text-festival-purple drop-shadow-[0_0_20px_rgba(157,80,187,0.2)]">
            SING, <br /> SMILE & FUN
          </h1>
          <p className="kids-text text-lg md:text-2xl text-festival-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            A world of music, laughter, and creativity for kids aged 5-11. Sing, dance, and explore with live shows, fun workshops, and non-stop adventures!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative bg-festival-orange text-white px-10 py-5 rounded-full font-black accent-text text-sm tracking-widest overflow-hidden transition-all hover:pr-14 hover:bg-festival-purple shadow-xl shadow-festival-orange/20">
              <span className="relative z-10">START ADVENTURE</span>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
            <button className="border-2 border-festival-purple/20 text-festival-purple hover:border-festival-purple px-10 py-5 rounded-full font-bold accent-text text-sm tracking-widest transition-all backdrop-blur-sm">
              WATCH THE SHOW
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax Floating Icons */}
      <motion.div 
        style={{ y: yIcons }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3], 
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <Star size={80} className="text-festival-green drop-shadow-[0_0_10px_rgba(164,255,77,0.3)]" />
      </motion.div>

      <motion.div 
        style={{ y: yIcons }}
        animate={{ 
          filter: [
            "drop-shadow(0 0 0px rgba(255,145,77,0))", 
            "drop-shadow(0 0 20px rgba(255,145,77,0.8))", 
            "drop-shadow(0 0 0px rgba(255,145,77,0))"
          ],
          rotate: [0, -15, 0] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 opacity-40 hidden lg:block"
      >
        <Wand2 size={100} className="text-festival-orange" />
      </motion.div>

      <motion.div 
        style={{ y: yIcons }}
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [-5, 5, -5]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 opacity-20 hidden lg:block"
      >
        <div className="relative">
          <Laugh size={70} className="text-white" />
          {/* Adding a little "fluff" effect with a blurred circle behind */}
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10" />
        </div>
      </motion.div>
    </section>
  );
};

const ExperienceCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="group bg-white border-2 border-festival-soft-purple p-8 rounded-[2.5rem] hover:bg-festival-soft-purple hover:border-festival-purple/30 transition-all duration-500 shadow-xl shadow-festival-purple/5"
  >
    <div className="w-16 h-16 bg-festival-soft-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-festival-purple transition-all duration-500">
      <Icon className="text-festival-purple w-8 h-8 group-hover:text-white" />
    </div>
    <h3 className="spooky-text text-3xl mb-4 text-festival-dark group-hover:text-festival-purple transition-colors">{title}</h3>
    <p className="kids-text text-festival-dark/60 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    { icon: Music, title: "Music Stage", desc: "Dance and sing along to live performances! A colorful stage where every beat brings a smile.", delay: 0.1 },
    { icon: Palette, title: "Creative Workshop", desc: "Paint, draw, and craft your own instruments. Let your imagination run wild!", delay: 0.2 },
    { icon: Smile, title: "Laughter Land", desc: "Funny stories, silly games, and sing-alongs. The only thing we're catching here is a case of the giggles!", delay: 0.3 },
  ];

  return (
    <section id="adventures" className="py-32 px-6 bg-festival-light relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="spooky-text text-5xl md:text-7xl mb-6 text-festival-dark"
          >
            PICK YOUR <span className="text-festival-purple">ADVENTURE</span>
          </motion.h2>
          <p className="kids-text text-festival-dark/50 max-w-xl mx-auto text-lg font-medium">Three magical zones filled with fun and creativity. Which one will you explore first?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LineupItem = ({ time, title, artist }: any) => (
  <div className="flex items-center gap-8 py-8 border-b border-festival-purple/10 group cursor-default">
    <span className="accent-text text-festival-purple font-bold text-xl min-w-[100px]">{time}</span>
    <div className="flex-1">
      <h4 className="spooky-text text-3xl md:text-4xl group-hover:translate-x-4 transition-transform duration-500 text-festival-dark">
        {title}
      </h4>
      <p className="kids-text text-festival-dark/50 text-sm mt-1 font-medium">{artist}</p>
    </div>
    <PartyPopper className="text-festival-purple/20 group-hover:text-festival-orange transition-colors" />
  </div>
);

const Lineup = () => {
  return (
    <section id="lineup" className="py-32 px-6 bg-festival-soft-purple">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="spooky-text text-5xl md:text-7xl text-festival-dark">FUN <span className="text-festival-purple">SCHEDULE</span></h2>
            <p className="kids-text text-festival-dark/50 mt-4 text-lg font-medium">Non-stop entertainment for the whole family.</p>
          </div>
          <div className="hidden md:block">
            <span className="accent-text text-xs tracking-widest text-festival-purple/40 uppercase font-bold">Scroll for more fun</span>
          </div>
        </div>

        <div className="space-y-2">
          <LineupItem time="14:00" title="MUSIC PARADE" artist="Opening Celebration" />
          <LineupItem time="16:00" title="LIVE CONCERT" artist="The Little Stars Band" />
          <LineupItem time="18:00" title="KIDS DISCO" artist="DJ Sparkle" />
          <LineupItem time="20:00" title="SING-ALONG" artist="Under the Stars" />
        </div>
      </div>
    </section>
  );
};

const TicketCard = ({ type, price, features, featured }: any) => (
  <div className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 ${featured ? 'bg-festival-purple border-festival-purple scale-105 z-10 shadow-2xl shadow-festival-purple/30' : 'bg-white border-festival-soft-purple hover:border-festival-purple/30 shadow-xl shadow-festival-purple/5'}`}>
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-festival-orange text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
        Best Value
      </div>
    )}
    <h3 className={`spooky-text text-4xl mb-2 ${featured ? 'text-white' : 'text-festival-dark'}`}>{type}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className={`text-4xl font-black accent-text ${featured ? 'text-white' : 'text-festival-dark'}`}>${price}</span>
      <span className={`text-sm opacity-60 accent-text ${featured ? 'text-white' : 'text-festival-dark'}`}>/day</span>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f: string, i: number) => (
        <li key={i} className={`flex items-center gap-3 text-sm kids-text font-medium ${featured ? 'text-white/90' : 'text-festival-dark/60'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${featured ? 'bg-festival-orange' : 'bg-festival-purple'}`} />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-black accent-text text-xs tracking-widest transition-all ${featured ? 'bg-white text-festival-purple hover:bg-festival-orange hover:text-white' : 'bg-festival-purple text-white hover:bg-festival-orange shadow-lg shadow-festival-purple/20'}`}>
      GET PASS
    </button>
  </div>
);

const Tickets = () => {
  return (
    <section id="tickets" className="py-32 px-6 bg-festival-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <h2 className="spooky-text text-5xl md:text-7xl mb-6 text-festival-dark">JOIN THE <span className="text-festival-orange">FESTIVAL</span></h2>
          <p className="kids-text text-festival-dark/50 text-lg font-medium">Choose your magical pass and start the fun!</p>
          
          {/* Playful Creature near Tickets Title */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [-15, 15, -15],
              scaleY: [1, 1, 0.1, 1, 1] // Blinking effect
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.4, 0.5, 0.6, 1] // Control timing for the blink
            }}
            className="absolute -top-10 -right-4 md:right-20 opacity-40"
          >
            <Smile size={60} className="text-festival-purple drop-shadow-[0_0_10px_rgba(157,80,187,0.3)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <TicketCard 
            type="SPARK" 
            price="29" 
            features={["Single Day Entry", "All Magic Zones", "Workshop Access", "Fun Badge"]} 
          />
          <TicketCard 
            type="GLOW" 
            price="49" 
            featured 
            features={["Fast Track Entry", "Goodie Bag", "Magic Wand Kit", "Snack Voucher", "Photo with Mascot"]} 
          />
          <TicketCard 
            type="SHINE" 
            price="79" 
            features={["All GLOW Perks", "Priority Seating", "Meet the Wizard", "Unlimited Treats", "Festival T-Shirt"]} 
          />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-festival-soft-purple relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-festival-purple/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="spooky-text text-5xl md:text-7xl mb-6 flex items-center justify-center gap-4 flex-wrap text-festival-dark"
          >
            HAVE <span className="text-festival-orange">QUESTIONS?</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Music2 className="text-festival-purple drop-shadow-[0_0_8px_rgba(157,80,187,0.2)]" size={50} />
            </motion.div>
          </motion.h2>
          <p className="kids-text text-festival-dark/50 text-lg font-medium">
            Parents, we're here to help! Send us a message and our friendly wizards will get back to you soon.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-festival-purple/10 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-festival-purple/10"
        >
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-festival-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile className="text-festival-green w-10 h-10" />
              </div>
              <h3 className="spooky-text text-4xl mb-4 text-festival-dark">MESSAGE SENT!</h3>
              <p className="kids-text text-festival-dark/60 mb-8 font-medium">Thank you! We'll fly into your inbox very soon.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="accent-text text-festival-purple hover:text-festival-orange transition-colors font-bold tracking-widest"
              >
                SEND ANOTHER MESSAGE
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="accent-text text-xs font-bold tracking-widest text-festival-dark/40 uppercase ml-4">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Magic Parent"
                    className="w-full bg-festival-light border-2 border-festival-purple/5 rounded-2xl px-6 py-4 kids-text text-festival-dark placeholder:text-festival-dark/20 focus:outline-none focus:border-festival-purple transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="accent-text text-xs font-bold tracking-widest text-festival-dark/40 uppercase ml-4">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="wizard@magic.com"
                    className="w-full bg-festival-light border-2 border-festival-purple/5 rounded-2xl px-6 py-4 kids-text text-festival-dark placeholder:text-festival-dark/20 focus:outline-none focus:border-festival-purple transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="accent-text text-xs font-bold tracking-widest text-festival-dark/40 uppercase ml-4">Your Question</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-festival-light border-2 border-festival-purple/5 rounded-[2rem] px-6 py-4 kids-text text-festival-dark placeholder:text-festival-dark/20 focus:outline-none focus:border-festival-purple transition-colors resize-none"
                />
              </div>
              <button 
                disabled={formState === 'sending'}
                className="w-full bg-festival-purple text-white py-5 rounded-2xl font-black accent-text text-sm tracking-widest hover:bg-festival-orange transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-festival-purple/20"
              >
                {formState === 'sending' ? 'SENDING MAGIC...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-32 pb-12 px-6 border-t border-festival-soft-purple">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-festival-purple w-8 h-8" />
            <span className="spooky-text text-3xl tracking-wider text-festival-purple">SING, SMILE & FUN</span>
          </div>
          <p className="kids-text text-festival-dark/40 max-w-sm leading-relaxed font-medium">
            A joyful music and fun festival for children. Join us for a week of singing, laughter, and creativity in a friendly atmosphere.
          </p>
        </div>
        
        <div>
          <h4 className="accent-text font-bold text-sm tracking-widest text-festival-dark mb-8 uppercase">Fun Stuff</h4>
          <ul className="space-y-4">
            {['Activities', 'Safety First', 'Parents Guide', 'Gallery'].map(item => (
              <li key={item}><a href="#" className="kids-text text-sm text-festival-dark/40 hover:text-festival-purple transition-colors font-medium">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="accent-text font-bold text-sm tracking-widest text-festival-dark mb-8 uppercase">Say Hello</h4>
          <div className="flex gap-6">
            <a href="#" className="text-festival-purple/40 hover:text-festival-purple transition-colors"><Instagram /></a>
            <a href="#" className="text-festival-purple/40 hover:text-festival-purple transition-colors"><Twitter /></a>
            <a href="#" className="text-festival-purple/40 hover:text-festival-purple transition-colors"><Facebook /></a>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-festival-soft-purple flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="kids-text text-xs text-festival-dark/20 font-medium">© 2026 SING, SMILE & FUN. FOR KIDS, BY MUSIC.</p>
        <div className="flex gap-8">
          <a href="#" className="kids-text text-xs text-festival-dark/20 hover:text-festival-purple transition-colors font-medium">Privacy Policy</a>
          <a href="#" className="kids-text text-xs text-festival-dark/20 hover:text-festival-purple transition-colors font-medium">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-festival-light selection:bg-festival-purple selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Lineup />
      <Tickets />
      <Contact />
      <Footer />
    </div>
  );
}
