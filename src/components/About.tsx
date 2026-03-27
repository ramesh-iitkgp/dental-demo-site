import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import { useState, MouseEvent } from 'react';

function FlashlightCard({ value, label, delay }: { value: string, label: string, delay: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative z-10 bg-transparent overflow-hidden rounded-2xl group"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        style={{ background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(243, 244, 246, 0.9), transparent 40%)` }}
      />
      <div 
        className="absolute inset-[-1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-20"
        style={{ background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.5), transparent 40%)` }}
      />
      <div className="relative z-20 bg-white rounded-2xl h-full m-[1px] flex flex-col gap-2 px-6 py-8 border border-neutral-100">
          <div className="text-4xl md:text-5xl lg:text-7xl leading-none font-light text-neutral-900 tracking-tighter">
              {value}
          </div>
          <div className="text-base md:text-lg font-medium pl-1 text-neutral-500">
              {label}
          </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="flex flex-col md:px-10 lg:py-32 w-full max-w-7xl mx-auto pt-16 md:pt-24 px-5 pb-16 md:pb-24 relative" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-start mb-8 md:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-orange-500 text-sm font-medium tracking-wide uppercase transition-colors hover:bg-orange-100/50 cursor-default">
          <Info size={16} />
          <span>About Us</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-blue-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

        <h3 className="leading-[1.3] md:leading-[1.1] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-neutral-400 tracking-tight max-w-6xl">
          <span className="text-neutral-900">A healthy smile is not just an aesthetic,</span>
          but a foundation of overall well-being.
          With a team of clinical experts, we utilize
          <span className="text-neutral-900"> advanced diagnostics </span>
          to empower patients to achieve lifelong oral health at the highest standard.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-neutral-200">
        <FlashlightCard value="25K+" label="Happy Patients" delay={0.2} />
        <FlashlightCard value="15K+" label="Treatments" delay={0.3} />
        <FlashlightCard value="20Y+" label="Years Experience" delay={0.4} />
        <FlashlightCard value="4.9" label="Average Rating" delay={0.5} />
      </div>
    </section>
  );
}
