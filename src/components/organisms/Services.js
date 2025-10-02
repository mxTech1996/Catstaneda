'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Importa Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { dataSite } from '@/data';
import { useRouter } from 'next/navigation';

// --- DATOS PARA EL COMPONENTE ---
const serviceCategories = [
  { name: 'Conceptual Design', icon: '/images/icon1.png' },
  { name: 'Material Sourcing', icon: '/images/icon2.png' },
  { name: 'Manufacturing', icon: '/images/icon3.png' },
  { name: 'Retail Strategy', icon: '/images/icon4.png' },
  { name: 'Specialty Apparel', icon: '/images/icon5.png' },
  { name: 'Uniform Design', icon: '/images/icon6.png' },
];

const featuredServices = dataSite.products;

const Services = () => {
  const router = useRouter();
  return (
    <section className='py-24 bg-[#FAF8F5]'>
      <div className='container mx-auto px-6'>
        {/* Parte 1: Cuadrícula de Categorías */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className='font-semibold text-gray-500 tracking-widest text-sm mb-2'>
              OUR EXPERTISE
            </p>
            <h2 className='text-5xl font-serif font-bold text-gray-800 leading-tight'>
              A Bespoke Approach for Every Client
            </h2>
            <p className='mt-6 text-lg text-gray-600'>
              Our bespoke consulting services are designed to guide you through
              every stage of the apparel lifecycle. From the initial spark of an
              idea to a thriving retail business, we provide the expertise you
              need to succeed.
            </p>
          </motion.div>
          <motion.div
            className='grid grid-cols-2 sm:grid-cols-3 gap-6'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {serviceCategories.map((cat) => (
              <div
                key={cat.name}
                className='text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'
              >
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={64}
                  height={64}
                  className='mx-auto'
                />
                <h3 className='mt-3 font-semibold text-gray-700'>{cat.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Parte 2: Carrusel de Servicios Destacados */}
        <div className='mt-24'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl font-serif font-bold text-gray-800'>
              Featured Consulting Services
            </h2>
            <a
              href='#'
              className='mt-2 inline-block text-[#D3A6A1] font-semibold hover:underline'
            >
              View All Services
            </a>
          </motion.div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className='!px-10 !py-12'
          >
            {featuredServices.map((service) => (
              <SwiperSlide key={service.name}>
                <div className='bg-white rounded-xl shadow-sm p-4 text-center group transition-all duration-300 hover:shadow-xl'>
                  <div className='relative overflow-hidden rounded-lg'>
                    {service.tag && (
                      <span className='absolute top-2 right-2 bg-[#D3A6A1] text-white text-xs font-bold px-2 py-1 rounded-full z-10'>
                        {service.tag}
                      </span>
                    )}
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={300}
                      height={300}
                      className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-gray-800'>
                    {service.name}
                  </h3>
                  <p className='mt-1 text-gray-500'>$ {service.price} USD</p>
                  <button
                    onClick={() => router.push(`/contact`)}
                    className='mt-4 w-full bg-[#A1D3B9] text-gray-800 font-bold py-2 rounded-full hover:bg-opacity-90 transition-opacity'
                  >
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
