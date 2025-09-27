// CÓDIGO COMPLETO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js

'use client';

import { motion } from 'framer-motion';
// Ícono para la flecha de scroll
import { LuChevronDown } from 'react-icons/lu';

// --- Componente Principal de la Sección Hero ---
const HeroSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative w-full h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700 text-white flex flex-col justify-center items-center overflow-hidden'>
      {/* Patrones geométricos de fondo */}
      <div className='absolute top-0 left-0 w-full h-full opacity-20'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 border-2 border-white/20 rounded-full'></div>
        <div className='absolute bottom-1/4 right-1/4 w-72 h-72 border-2 border-white/20 rounded-full'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          className='text-center max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-pink-300 mb-2 uppercase tracking-widest'
          >
            Innovative Engineering Solutions
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-7xl font-extrabold leading-tight mb-6'
          >
            Engineering the Future of Construction.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-lg text-indigo-100/90 mb-8 max-w-2xl mx-auto'
          >
            From conceptual design to project completion, we deliver
            cutting-edge engineering services that ensure quality, efficiency,
            and structural integrity for the modern world.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href='#services'
              className='px-10 py-4 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors duration-300 transform hover:scale-105'
            >
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha animada para invitar al scroll */}
      <motion.div
        className='absolute bottom-10'
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LuChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
