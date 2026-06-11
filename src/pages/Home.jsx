import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#0B241C] text-[#F9F7F2]">
      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:py-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farm Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0B241C]/60 md:from-[#0B241C]/50 md:to-[#0B241C]" />
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl w-full px-4 mb-12 md:mb-0"
        >
          <motion.h1 variants={itemVars} className="text-[2.5rem] sm:text-5xl md:text-8xl font-black md:font-light mb-4 md:mb-8 leading-[1] md:leading-tight uppercase tracking-tight md:tracking-normal text-white md:text-[#F9F7F2]">
            <span className="md:hidden">Fresh, Organic,<br />Delivered Daily.</span>
            <span className="hidden md:inline">Nature's Bounty, <br /><span className="italic">Elevated.</span></span>
          </motion.h1>
          
          <motion.p variants={itemVars} className="md:hidden text-white text-base mb-8 font-medium max-w-[280px] mx-auto leading-tight">
            Straight from the fields of BAGBAN Farm to your table.
          </motion.p>

          <motion.p variants={itemVars} className="hidden md:block text-emerald-400 uppercase tracking-[0.4em] text-sm mb-6">
            EST. 1998 — TRADITIONAL EXCELLENCE
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              to="/products"
              className="w-full md:w-auto px-10 py-4 bg-white md:bg-transparent md:border md:border-emerald-400 text-[#0B241C] md:text-emerald-400 hover:bg-emerald-400 hover:text-[#0B241C] transition-all duration-500 uppercase tracking-widest text-xs md:text-sm font-bold md:font-normal rounded-full md:rounded-none shadow-xl md:shadow-none"
            >
              Shop Our Products
            </Link>
            <Link 
              to="/about"
              className="w-full md:w-auto px-10 py-4 bg-[#0B241C]/80 md:hidden text-white uppercase tracking-widest text-xs font-bold rounded-full border border-white/20 backdrop-blur-sm"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Feature Cards - Positioned in flow on mobile */}
        <div className="md:hidden relative z-10 w-full px-4 grid grid-cols-3 gap-2 mt-8">
          {['100% Organic', 'Fresh Daily', 'Local Delivery'].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="bg-white/90 backdrop-blur-md py-4 px-1 rounded-xl text-center shadow-lg border border-white/40"
            >
              <p className="text-[10px] font-bold text-[#0B241C] leading-tight uppercase tracking-tighter">
                {feature.split(' ').map((word, idx) => (
                  <React.Fragment key={idx}>
                    {word}<br />
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex absolute bottom-6 md:bottom-10 left-6 md:left-10 flex-col gap-3 md:gap-4">
          <div className="w-[1px] h-12 md:h-20 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 80] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-emerald-400"
            />
          </div>
          <span className="text-[8px] md:text-[10px] uppercase tracking-widest rotate-90 origin-left mt-2 md:mt-4 text-white/40 whitespace-nowrap">Scroll</span>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative group overflow-hidden border border-white/5 bg-white/[0.02]"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200" alt="Organic" className="w-full h-full object-cover" />
            </div>
            <div className="relative p-12 h-full flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
              <h3 className="text-4xl font-light mb-4">100% Organic</h3>
              <p className="text-white/60 max-w-md leading-relaxed">Our commitment to zero chemicals and natural growth ensures the highest quality poultry for your table.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 border border-white/5 bg-white/[0.02] p-12 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="text-emerald-400 mb-8">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light mb-4 text-white uppercase tracking-wider">Fresh Daily</h3>
            <p className="text-white/60 text-sm leading-relaxed">Collected and processed every morning, reaching your doorstep at the peak of freshness.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 border border-white/5 bg-white/[0.02] p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-light mb-4 text-white uppercase tracking-wider">Local Delivery</h3>
            <p className="text-white/60 text-sm leading-relaxed">Fast, temperature-controlled delivery within the community to maintain integrity.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-8 relative group overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1516734439916-70081ede72aa?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              alt="Farm" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="relative p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-light mb-4 italic">The Heritage Way</h3>
                <div className="w-12 h-[1px] bg-emerald-400 mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
