'use client';

import { motion } from 'framer-motion';
// Importamos los íconos que usaremos
import {
  FiEdit,
  FiAward,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiEye,
} from 'react-icons/fi';

// --- DATOS PARA EL COMPONENTE ---
const benefitsList = [
  {
    icon: <FiEdit />,
    title: 'Bespoke Strategy',
    description:
      'We don’t use templates. Every client receives a tailor-made strategy designed for their unique brand and goals.',
    colors: 'text-[#D3A6A1] bg-[#FAE8E6]', // Terracotta/Rose
  },
  {
    icon: <FiAward />,
    title: 'Industry Expertise',
    description:
      'With over 15 years of experience, we provide deep, actionable insights into the fashion and retail landscape.',
    colors: 'text-[#87A99C] bg-[#E7F0ED]', // Sage Green
  },
  {
    icon: <FiGlobe />,
    title: 'Ethical Sourcing',
    description:
      'Navigate the complexities of sustainable and ethical sourcing with our global network of trusted suppliers.',
    colors: 'text-[#D3A6A1] bg-[#FAE8E6]',
  },
  {
    icon: <FiLayers />,
    title: 'End-to-End Support',
    description:
      'From the first sketch to the final retail launch, we guide you through every step of the process.',
    colors: 'text-[#87A99C] bg-[#E7F0ED]',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Proven Results',
    description:
      'Our goal is your growth. We focus on data-driven strategies that deliver measurable commercial success.',
    colors: 'text-[#D3A6A1] bg-[#FAE8E6]',
  },
  {
    icon: <FiEye />,
    title: 'Creative Vision',
    description:
      'We blend artistic vision with market trends to create apparel lines that are both beautiful and commercially viable.',
    colors: 'text-[#87A99C] bg-[#E7F0ED]',
  },
];

const Benefits = () => {
  return (
    <section className='py-24 bg-[#FAF8F5]'>
      <div className='container mx-auto px-6'>
        {/* Título de la Sección */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className='font-semibold text-gray-500 tracking-widest text-sm mb-2'>
            OUR COMMITMENT
          </p>
          <h2 className='text-5xl font-serif font-bold text-gray-800'>
            The Castañeda Difference
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
            From quality to care — here’s why brands choose to build their
            future with us again and again.
          </p>
        </motion.div>

        {/* Grid de Beneficios */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              className='bg-white p-8 rounded-[2rem] shadow-sm text-center flex flex-col items-center'
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-2xl mb-5 ${benefit.colors}`}
              >
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-800'>
                {benefit.title}
              </h3>
              <div
                className={`w-10 h-0.5 my-3 ${benefit.colors
                  .split(' ')[1]
                  .replace('bg-', 'bg-opacity-50 ')}`}
              ></div>
              <p className='text-gray-600'>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
