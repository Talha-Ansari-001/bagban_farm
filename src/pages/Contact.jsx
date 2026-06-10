import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-900/40 uppercase tracking-[0.4em] text-xs mb-4 block">Inquiries</span>
          <h2 className="text-5xl font-light text-[#0B241C] uppercase tracking-tight">Connect With Us</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="bg-white border border-[#0B241C]/5 p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 blur-[100px] -z-10" />
          
          <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-emerald-900/20 py-4 outline-none focus:border-emerald-900 transition-colors text-emerald-900 placeholder:text-emerald-900/30 font-light"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-emerald-900/20 py-4 outline-none focus:border-emerald-900 transition-colors text-emerald-900 placeholder:text-emerald-900/30 font-light"
                />
              </div>
            </div>
            
            <div className="relative group">
              <textarea 
                rows="4" 
                placeholder="How can we assist you today?"
                className="w-full bg-transparent border-b border-emerald-900/20 py-4 outline-none focus:border-emerald-900 transition-colors text-emerald-900 placeholder:text-emerald-900/30 font-light resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="group relative px-12 py-5 bg-[#0B241C] text-white uppercase tracking-[0.2em] text-xs font-bold overflow-hidden">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                {/* Ambient Glow */}
                <div className="absolute -inset-2 bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-900/40 mb-2">Location</div>
            <div className="text-emerald-900 font-light">Green Valley, Farm Road 12</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-900/40 mb-2">Contact</div>
            <div className="text-emerald-900 font-light">+1 (234) 567 890</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-900/40 mb-2">Email</div>
            <div className="text-emerald-900 font-light">hello@bagbanfarm.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
