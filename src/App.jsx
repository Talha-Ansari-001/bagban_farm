import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Leaf, Egg, Truck } from 'lucide-react';
import Navbar from './components/Navbar';
import { products } from './data/products';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#010c06] text-[#f5f5f0] min-h-screen font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image Scenery */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed bg-no-repeat transition-transform duration-[2s] scale-105"
          style={{ backgroundImage: "url('/farm.png')" }}
        />
        
        {/* Dark Vignette Overlay for Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-extrabold tracking-wide uppercase text-4xl md:text-7xl lg:text-8xl leading-none drop-shadow-2xl"
          >
            Fresh, Organic,<br />Delivered Daily.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/90 text-base md:text-2xl mt-8 font-medium tracking-tight drop-shadow-lg max-w-2xl mx-auto"
          >
            Straight from the fields of BAGBAN Farm to your table.
          </motion.p>

          {/* CTA Buttons - Pill Shaped */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
          >
            <button className="bg-white text-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
              Shop Our Products
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300">
              Learn Our Story
            </button>
          </motion.div>
        </div>

        {/* Floating Highlight Cards (Bento Footer) */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                title: "100% Organic", 
                icon: <Leaf className="w-6 h-6 text-emerald-600" />, 
                text: "Verified organic processes ensure completely antibiotic and hormone-free poultry. Full production tracing." 
              },
              { 
                title: "Fresh Daily", 
                icon: <Egg className="w-6 h-6 text-amber-700" />, 
                text: "Produce collected, prepared, and packed on a daily schedule to maintain peak farm freshness." 
              },
              { 
                title: "Local Delivery", 
                icon: <Truck className="w-6 h-6 text-emerald-700" />, 
                text: "Express delivery logistics optimized to deliver fresh poultry and eggs to your doorstep within hours." 
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                className="backdrop-blur-lg bg-white/80 md:bg-white/90 p-8 shadow-2xl flex flex-col gap-4 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/50 p-2 shadow-sm">{card.icon}</div>
                  <h3 className="text-black font-black uppercase tracking-widest text-sm">{card.title}</h3>
                </div>
                <p className="text-black/70 text-xs font-bold leading-relaxed tracking-tight">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 text-[9px] font-black uppercase tracking-[0.4em] block mb-4">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Current Harvest</h2>
          </motion.div>
          <div className="hidden md:block w-full max-w-md h-[1px] bg-white/10 mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col hover:border-emerald-500/50 transition-colors duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-black uppercase tracking-tight leading-none">{product.name}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-emerald-400 font-black text-lg">${product.price}</span>
                    <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest">{product.unit}</span>
                  </div>
                </div>
                <p className="text-sm text-white/50 mb-8 font-medium leading-relaxed">
                  {product.description}
                </p>
                <button className="mt-auto w-full border border-white/10 py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#031d0f] relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 block">Our Story</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight mb-12">
              Heritage <br /><span className="italic font-light text-white/40">Clean Farming.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                At BAGBAN Farm, we believe the best flavor comes from nature, not a laboratory. Our journey began with a simple mission: to restore the integrity of the food on our tables. We treat our land with respect and our animals with dignity.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Every chicken is raised with access to sunlight and fresh air, grazing on natural pastures. The result is a premium product that is not only healthier for you but carries a depth of flavor that modern industrial farming has long forgotten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Get In Touch</h2>
          <p className="text-white/40 font-medium">For bulk orders and wholesale inquiries.</p>
        </motion.div>

        <form className="space-y-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 focus:border-emerald-500 outline-none transition-colors text-[10px] tracking-widest font-black"
            />
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 focus:border-emerald-500 outline-none transition-colors text-[10px] tracking-widest font-black"
            />
          </div>
          <textarea 
            rows="5" 
            placeholder="YOUR MESSAGE" 
            className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 focus:border-emerald-500 outline-none transition-colors text-[10px] tracking-widest font-black resize-none"
          ></textarea>
          
          <button className="w-full bg-emerald-600 text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] relative group overflow-hidden shadow-2xl">
            <span className="relative z-10">Send Inquiry</span>
            <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
          </button>
        </form>
      </section>

      <footer className="py-16 border-t border-white/5 text-center px-6">
        <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-black">
          © 2026 BAGBAN Farm — Heritage Poultry Excellence.
        </p>
      </footer>
    </main>
  );
};

export default App;
