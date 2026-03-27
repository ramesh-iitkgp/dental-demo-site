import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Star, Smile, Wand2 } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Lead Orthodontist",
    desc: "Ivy League Trained",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    icon: Star
  },
  {
    name: "Dr. Michael Chen",
    role: "Pediatric Dentist",
    desc: "Board Certified",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    icon: Smile
  },
  {
    name: "Dr. Emily Ross",
    role: "Cosmetic Dentist",
    desc: "Smile Design Expert",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    icon: Wand2
  }
];

export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % doctors.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % doctors.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

  return (
    <section className="px-5 py-20 md:px-12 md:py-32 max-w-[1600px] mx-auto overflow-hidden" id="doctors">
      <motion.div 
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center text-center mb-16 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 max-w-2xl font-normal mb-6 leading-[1.2] md:leading-normal">
            Experts in aesthetic and functional dentistry.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg leading-loose md:leading-relaxed">
            Our specialists combine advanced training with a compassionate approach, ensuring precise and personalized care.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex mt-8 relative items-center justify-center" 
        style={{ perspective: 1200 }}
      >
        <button onClick={prevCard} className="absolute left-0 md:left-8 lg:left-24 z-20 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-all duration-300 focus:outline-none" aria-label="Previous">
          <ArrowLeft size={24} />
        </button>

        <div className="relative w-full max-w-md h-[400px] sm:h-[500px] flex items-center justify-center">
          <div className="flex transition-transform duration-500 ease-out absolute inset-0 items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {doctors.map((doc, i) => {
              let relativePos = i - currentIndex;
              if (relativePos > Math.floor(doctors.length / 2)) relativePos -= doctors.length;
              if (relativePos < -Math.floor(doctors.length / 2)) relativePos += doctors.length;

              let transform = '';
              let opacity = 1;
              let filter = 'brightness(1)';
              let zIndex = 1;
              let ringClass = 'border border-white/20';
              let shadow = '';

              if (relativePos === 0) {
                  transform = 'translateX(0) scale(1) rotateY(0deg)';
                  opacity = 1;
                  zIndex = 10;
                  ringClass = 'border-2 border-blue-400';
                  shadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.3)';
              } else if (relativePos === -1) {
                  transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                  opacity = 0.6;
                  filter = 'brightness(0.75)';
                  zIndex = 5;
              } else if (relativePos === 1) {
                  transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                  opacity = 0.6;
                  filter = 'brightness(0.75)';
                  zIndex = 5;
              } else {
                  transform = `translateX(${relativePos > 0 ? 360 : -360}px) scale(0.85) rotateY(${relativePos > 0 ? -20 : 20}deg)`;
                  opacity = 0.4;
                  filter = 'brightness(0.6)';
                  zIndex = 2;
              }

              return (
                <div key={i} className={`absolute w-[280px] sm:w-80 h-[400px] sm:h-[460px] rounded-[2rem] overflow-hidden ${ringClass} transition-all duration-500 bg-neutral-900`} style={{ transform, opacity, filter, zIndex, boxShadow: shadow }}>
                  <img src={doc.image} alt={doc.name} className="h-full w-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-left">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium border border-white/20 backdrop-blur-md mb-3 text-white">
                          <doc.icon size={14} className="text-blue-300" />
                          {doc.role}
                      </div>
                      <p className="text-xl md:text-2xl font-medium text-white tracking-tight mb-1">{doc.name}</p>
                      <p className="text-sm text-neutral-300">{doc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={nextCard} className="absolute right-0 md:right-8 lg:right-24 z-20 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-all duration-300 focus:outline-none" aria-label="Next">
          <ArrowRight size={24} />
        </button>
      </motion.div>
    </section>
  );
}
