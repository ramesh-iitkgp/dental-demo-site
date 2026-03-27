import { motion, useScroll, useTransform } from 'motion/react';
import { CalendarPlus, Phone } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const text = "Precision dentistry for the modern family.";
  const words = text.split(" ");

  return (
    <header ref={ref} id="hero-section" className="relative w-full h-screen min-h-[750px] md:min-h-[800px] overflow-hidden bg-neutral-950">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=3840&auto=format&fit=crop" alt="Modern Dental Clinic" className="absolute inset-0 w-full h-full md:h-[120%] top-0 md:-top-[10%] object-cover object-center filter brightness-[0.5] md:brightness-[0.4] will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent md:hidden z-0"></div>
      </motion.div>
      
      <div className="flex flex-col md:px-12 md:pb-24 text-white px-5 pb-10 absolute inset-0 justify-end z-10 pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-end">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-6 md:mb-6 opacity-90"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.8)]"></div>
              <span className="text-xs font-medium tracking-wide uppercase text-blue-100">Accepting New Patients</span>
            </motion.div>
            
            <h1 className="leading-[1.2] md:leading-[1.05] text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 md:mb-6 font-normal text-white flex flex-wrap">
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[2px] mr-[0.25em]">
                  <motion.span 
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start lg:items-end justify-end w-full"
          >
            <p className="text-base sm:text-lg md:text-xl font-normal leading-[1.7] md:leading-relaxed max-w-md text-left lg:text-right text-neutral-200 mb-8 md:mb-8">
              Experience advanced clinical care paired with profound comfort. From aesthetic orthodontics to gentle pediatric treatments, we engineer brilliant smiles.
            </p>
            
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="w-full sm:w-auto group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-semibold text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full relative shadow-lg flex items-center justify-center gap-2" style={{ boxShadow: '0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)' }}>
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full z-0"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide">
                  Book Appointment
                  <CalendarPlus size={18} />
                </span>
              </button>

              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Virtual Tour
              </button>
            </div>

            <div className="flex lg:hidden flex-col gap-4 w-full">
              <button className="w-full group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-semibold text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full relative shadow-lg flex items-center justify-center gap-2" style={{ boxShadow: '0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)' }}>
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full z-0"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide">
                  Book Appointment
                  <CalendarPlus size={16} />
                </span>
              </button>

              <button className="w-full group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full py-3.5 px-8 relative z-0 items-center justify-center">
                <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                  <div className="absolute inset-[1px] rounded-full bg-black"></div>
                </div>
                <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
                  <div className="opacity-30 mix-blend-overlay absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
                </div>
                <span className="relative z-10 text-white/90 transition-colors group-hover:text-white flex items-center justify-center gap-2">
                  Call Now
                  <Phone size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row gap-4 justify-between text-xs font-medium uppercase tracking-widest opacity-60 mt-12 md:mt-16 border-t border-white/20 pt-6"
        >
          <span className="text-blue-100">Advanced Orthodontics &amp; Care</span>
          <span className="text-blue-100">© Noe Valley Smiles</span>
        </motion.div>
      </div>
    </header>
  );
}
