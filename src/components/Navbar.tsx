import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, XCircle, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [patientsOpen, setPatientsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 px-5 md:px-12 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-neutral-200/50' : 'bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center relative">
          <div className="flex items-center gap-2 z-20">
            <a href="#hero-section" className={`inline-flex items-center justify-start transition-opacity hover:opacity-80 w-[180px] sm:w-[220px] ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" className="w-full h-auto fill-current">
                <text x="0" y="55%" textAnchor="start" fontSize="120" className="script">Noe Valley</text>
                <text x="0" y="75%" textAnchor="start" fontSize="140" className="script">Smiles</text>
                <text x="0" y="350" textAnchor="start" fontSize="36" className="sub">&amp; BRACES</text>
              </svg>
            </a>
          </div>

          <div className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-8 text-base font-normal tracking-tight ${isScrolled ? 'text-neutral-600' : 'text-neutral-200'}`}>
            <a href="#hero-section" className={`transition ${isScrolled ? 'hover:text-neutral-900' : 'hover:text-white'}`}>Home</a>
            <a href="#about" className={`transition ${isScrolled ? 'hover:text-neutral-900' : 'hover:text-white'}`}>About</a>

            <div className="relative group">
              <a href="#services" className={`transition flex items-center gap-1.5 py-4 ${isScrolled ? 'hover:text-neutral-900' : 'hover:text-white'}`}>
                Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2.5 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#services" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">General Dentistry</a>
                <a href="#services" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">Orthodontics</a>
                <a href="#services" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">Invisalign</a>
                <a href="#services" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">Pediatric Dentistry</a>
              </div>
            </div>

            <div className="relative group">
              <a href="#patients" className={`transition flex items-center gap-1.5 py-4 ${isScrolled ? 'hover:text-neutral-900' : 'hover:text-white'}`}>
                Patients <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2.5 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#patients" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">Insurance / Financing</a>
                <a href="#patients" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">First Visit</a>
                <a href="#patients" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">FAQs</a>
                <a href="#patients" className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors">Policies / Forms</a>
              </div>
            </div>

            <a href="#contact" className={`transition ${isScrolled ? 'hover:text-neutral-900' : 'hover:text-white'}`}>Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full py-2.5 px-6 relative z-0 items-center justify-center">
              <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                <div className="absolute inset-[1px] rounded-full bg-black"></div>
              </div>
              <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
                <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
              </div>
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white flex items-center gap-2">
                Call Now
                <Phone size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className={`lg:hidden p-2 -mr-2 flex items-center justify-center focus:outline-none z-20 transition-transform active:scale-95 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] flex flex-col overflow-y-auto pb-12"
          >
            <div className="px-5 py-4 flex justify-between items-center w-full border-b border-neutral-100 shrink-0">
              <a href="#hero-section" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-start transition-opacity hover:opacity-80 w-[180px] sm:w-[220px] text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" className="w-full h-auto fill-current">
                  <text x="0" y="55%" textAnchor="start" fontSize="120" className="script">Noe Valley</text>
                  <text x="0" y="75%" textAnchor="start" fontSize="140" className="script">Smiles</text>
                  <text x="0" y="350" textAnchor="start" fontSize="36" className="sub">&amp; BRACES</text>
                </svg>
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 flex items-center justify-center text-neutral-900 focus:outline-none transition-transform active:scale-95">
                <XCircle size={32} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-start flex-grow gap-6 px-6 pt-12">
              <a href="#hero-section" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors">About</a>

              <div className="w-full flex flex-col items-center">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-2 text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors focus:outline-none">
                  Services <ChevronDown size={24} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col items-center gap-4 mt-4 w-full bg-neutral-50/50 py-4 rounded-2xl border border-neutral-100 overflow-hidden"
                    >
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-500 hover:text-blue-600 transition-colors">Overview</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">General Dentistry</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">Orthodontics</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">Invisalign</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">Pediatric Dentistry</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full flex flex-col items-center">
                <button onClick={() => setPatientsOpen(!patientsOpen)} className="flex items-center gap-2 text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors focus:outline-none">
                  Patients <ChevronDown size={24} className={`transition-transform duration-300 ${patientsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {patientsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col items-center gap-4 mt-4 w-full bg-neutral-50/50 py-4 rounded-2xl border border-neutral-100 overflow-hidden"
                    >
                      <a href="#patients" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-500 hover:text-blue-600 transition-colors">Overview</a>
                      <a href="#patients" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">Insurance / Financing</a>
                      <a href="#patients" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">First Visit</a>
                      <a href="#patients" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">FAQs</a>
                      <a href="#patients" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-blue-600 transition-colors">Policies / Forms</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors">Contact</a>

              <div className="flex flex-col w-full max-w-xs gap-4 mt-8">
                <button className="w-full px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  Virtual Tour
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
