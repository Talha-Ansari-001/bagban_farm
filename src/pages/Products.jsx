import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <span className="text-emerald-900/40 uppercase tracking-[0.4em] text-xs mb-4 block">Selection</span>
          <h2 className="text-5xl font-light text-[#0B241C] uppercase tracking-tight">Our Provisions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 border border-transparent transition-all duration-700 group-hover:border-emerald-900/10">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#0B241C]/0 group-hover:bg-[#0B241C]/20 transition-colors duration-700" />
                
                {/* Ambient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-[100px] bg-emerald-400/10 blur-[80px]" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-white/10 backdrop-blur-md">
                  <button className="w-full py-4 bg-[#0B241C] text-white uppercase tracking-widest text-xs font-bold hover:bg-emerald-900 transition-colors">
                    Add to Inquiry
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-light text-[#0B241C] uppercase tracking-wide">{product.name}</h3>
                  <span className="text-emerald-900 font-medium">${product.price} <span className="text-[10px] text-emerald-900/40">/ {product.unit}</span></span>
                </div>
                <p className="text-sm text-emerald-900/60 leading-relaxed max-w-[90%]">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
