'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { dataSite } from '@/data';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <Navbar withCart={true} withAll={false} textBlack={false} />
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
        </motion.div>
        <div className='container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
          {dataSite.products.map((service) => (
            <div
              key={service.name}
              className='bg-white rounded-xl shadow-sm p-4 text-center group transition-all duration-300 hover:shadow-xl'
            >
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
              <button className='mt-4 w-full bg-[#A1D3B9] text-gray-800 font-bold py-2 rounded-full hover:bg-opacity-90 transition-opacity'>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
