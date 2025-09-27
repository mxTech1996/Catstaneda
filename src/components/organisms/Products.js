'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const FeaturedEngagements = () => {
  const engagements = [
    {
      tag: 'BRAND LAUNCHPAD',
      title: 'New Collection Launch Package',
      description:
        'From concept to consumer, we provide an end-to-end consulting service to launch your new fashion line successfully. Perfect for emerging designers.',
      perks: ['1-on-1 Design Mentorship', 'Complete Sourcing Guide'],
      metrics: [
        { value: '8', label: 'Weeks' },
        { value: '20', label: 'Deliverables' },
        { value: '1', label: 'Lookbook' },
        { value: '1', label: 'Launch Plan' },
      ],
      image: '/images/service1.png',
      imageOrder: 'last', // 'last' para imagen a la derecha, 'first' para la izquierda
    },
    {
      tag: 'RETAIL FOCUS',
      title: 'Boutique Strategy Intensive',
      description:
        'Elevate your retail presence with our intensive program focused on brand experience, inventory management, and sales optimization.',
      perks: ['In-Store Experience Audit', 'Sales Team Training'],
      metrics: [
        { value: '4', label: 'Weeks' },
        { value: '1', label: 'Store Audit' },
        { value: '1', label: 'Growth Plan' },
        { value: '∞', label: 'Support' },
      ],
      image: '/images/service2.png',
      imageOrder: 'first',
    },
  ];

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
            CONSULTING SPOTLIGHT
          </p>
          <h2 className='text-5xl font-serif font-bold text-gray-800'>
            Featured Engagements for Ambitious Brands
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore our curated packages designed to deliver maximum impact.
          </p>
        </motion.div>

        {/* Contenedor de Paquetes */}
        <div className='space-y-16'>
          {engagements.map((eng, index) => (
            <motion.div
              key={index}
              className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Columna de Texto */}
              <div className='text-center md:text-left'>
                <span className='inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full'>
                  {eng.tag}
                </span>
                <h3 className='text-4xl font-serif font-bold text-gray-800 mt-4'>
                  {eng.title}
                </h3>
                <p className='mt-4 text-gray-600'>{eng.description}</p>
                <div className='mt-4 space-y-2 flex flex-col items-center md:items-start'>
                  {eng.perks.map((perk) => (
                    <span
                      key={perk}
                      className='inline-flex items-center text-gray-700'
                    >
                      <FiCheckCircle className='text-[#A1D3B9] mr-2' /> {perk}
                    </span>
                  ))}
                </div>
                {/* Métricas (Reemplazo del contador) */}
                <div className='mt-6 grid grid-cols-4 gap-4 text-center'>
                  {eng.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className='text-3xl font-bold text-gray-800'>
                        {metric.value}
                      </p>
                      <p className='text-xs text-gray-500'>{metric.label}</p>
                    </div>
                  ))}
                </div>
                <button className='mt-8 bg-[#D3A6A1] text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all'>
                  Inquire Now
                </button>
              </div>

              {/* Columna de Imagen */}
              <div
                className={`relative w-full h-96 md:h-[500px] ${
                  eng.imageOrder === 'first' ? 'md:order-first' : ''
                }`}
              >
                <div className='absolute inset-0 bg-white rounded-3xl [clip-path:url(#wavy-clip)] md:[clip-path:none] md:rounded-none'></div>
                <Image
                  src={eng.image}
                  alt={eng.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-3xl'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Definición del SVG clip-path (no se renderiza, solo se define) */}
      <svg width='0' height='0'>
        <defs>
          <clipPath id='wavy-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0,0 H1 V0.9 C0.95,1,0.8,0.9,0.6,1 C0.4,0.9,0.2,1,0.05,0.9 V0 Z' />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};
// Nota: La forma ondulada es un poco compleja de replicar exactamente y puede variar entre navegadores.
// Para móviles, he usado una forma SVG más simple, y en escritorio la imagen es un rectángulo normal para mayor estabilidad.
// Puedes ajustar la 'd' en el <path> para cambiar la forma de la onda.
// Si prefieres la onda en todas las pantallas, simplemente quita el `md:[clip-path:none]`

export default FeaturedEngagements;
