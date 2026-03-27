import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonialsData = [
    {
        text: "The Invisalign process was seamless. The staff made me feel incredibly comfortable, and the results exceeded my expectations. I finally have the confident smile I always wanted.",
        name: "Emily R.",
        role: "Invisalign Patient",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Taking my kids to the dentist used to be a struggle. Dr. Smith and the pediatric team are so gentle and fun, my kids actually look forward to their visits now.",
        name: "Michael T.",
        role: "Parent of two",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "After years of avoiding the dentist due to anxiety, I found Noe Valley Smiles and Braces. Their compassionate approach and modern technology completely changed my perspective on dental care.",
        name: "Sarah J.",
        role: "Restorative Patient",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "The aesthetic results of my smile makeover are simply stunning. I appreciate how Dr. Ross took the time to map out every detail. I couldn't be happier.",
        name: "David L.",
        role: "Cosmetic Patient",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestim = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevTestim = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="md:px-12 py-16 md:py-24 px-4 overflow-hidden bg-neutral-50 max-w-[1600px] border-neutral-200 border rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-auto mb-16 md:mb-24 relative" id="testimonials">
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl tracking-tight max-w-2xl leading-tight font-normal text-neutral-900 mb-8">
            Loved by thousands of smiles.
        </h2>
        <div className="flex gap-3">
            <button onClick={prevTestim} className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 text-neutral-600 z-20 relative focus:outline-none">
                <ArrowLeft size={24} />
            </button>
            <button onClick={nextTestim} className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 text-neutral-600 z-20 relative focus:outline-none">
                <ArrowRight size={24} />
            </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto py-8 md:py-10 relative"
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute -inset-x-6 -top-3 translate-y-2 rotate-[-2deg] rounded-3xl border border-neutral-200/50 bg-neutral-100 h-[280px] hidden sm:block z-0 shadow-sm"></div>
          <div className="absolute -inset-x-3 -top-1 translate-y-2 rotate-[2deg] rounded-3xl border border-neutral-200 bg-white/50 h-[280px] hidden sm:block z-0 shadow-md"></div>

          <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden rotate-[-1deg] z-10 min-h-[300px] flex flex-col justify-between p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex gap-1 text-blue-500 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-neutral-900 font-normal tracking-tight text-lg sm:text-2xl leading-[1.6] sm:leading-snug mb-8">
                      "{testimonialsData[currentIndex].text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
                    <img src={testimonialsData[currentIndex].image} alt="Patient" className="w-12 h-12 rounded-full object-cover bg-neutral-100" />
                    <div>
                        <div className="text-base text-neutral-900 font-medium">{testimonialsData[currentIndex].name}</div>
                        <div className="text-sm text-neutral-500">{testimonialsData[currentIndex].role}</div>
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
