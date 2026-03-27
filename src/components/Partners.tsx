import { CreditCard, Smartphone, Wallet, Banknote, ShieldCheck, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Partners() {
  const icons = [CreditCard, Smartphone, Wallet, Banknote, ShieldCheck, BadgeCheck];
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full border-b border-neutral-200 bg-white py-8 md:py-10 relative flex flex-col items-center justify-center"
    >
        <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex w-max animate-scroll-infinite items-center">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24 px-6 md:px-12 opacity-40 hover:opacity-100 transition-opacity duration-500 text-neutral-800">
                        {icons.map((Icon, j) => <Icon key={j} size={64} strokeWidth={1} />)}
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  );
}
