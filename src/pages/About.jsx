import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B241C] text-[#F9F7F2] pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-emerald-400 uppercase tracking-[0.4em] text-xs mb-8 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-light mb-12 leading-[1.1]">
                A Legacy of <br />
                <span className="italic">Sustainable Farming.</span>
              </h1>
              
              <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed">
                <p>
                  At BAGBAN Farm, we believe that the best food comes from nature's intended path. Since 1998, our mission has been to bridge the gap between traditional agricultural wisdom and modern culinary standards.
                </p>
                <p>
                  Our chickens are raised in an environment that respects their natural instincts—plenty of sunlight, fresh air, and organic feed. This isn't just about ethics; it's about the unmistakable quality and flavor that only time and care can produce.
                </p>
                <p>
                  From our family to yours, we provide poultry and eggs that are free from hormones, antibiotics, and compromises. We are stewards of the land, committed to regenerative practices that ensure the health of our soil and the vitality of our products for generations to come.
                </p>
              </div>

              <div className="mt-16 flex items-center gap-12">
                <div>
                  <div className="text-4xl font-light mb-2">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400">Organic Feed</div>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <div className="text-4xl font-light mb-2">25+</div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] border border-white/10 p-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200" 
                alt="Farmer"
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 border-l border-b border-emerald-400/30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-r border-t border-emerald-400/30" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
