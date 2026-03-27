import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-12 pb-8 border-t bg-neutral-900 border-neutral-800 text-white">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10 items-start"
        >
          <div className="flex flex-col gap-5">
            <a href="#hero-section" className="-mt-3 inline-flex items-center justify-start transition-opacity hover:opacity-100 opacity-90 w-[180px] md:w-[220px] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" className="w-full h-auto fill-current">
                  <text x="0" y="55%" textAnchor="start" fontSize="120" className="script">Noe Valley</text>
                  <text x="0" y="75%" textAnchor="start" fontSize="140" className="script">Smiles</text>
                  <text x="0" y="350" textAnchor="start" fontSize="36" className="sub">&amp; BRACES</text>
              </svg>
            </a>
            <p className="text-neutral-400 font-medium leading-relaxed">
                Elevating dental care through precision, compassion, and advanced technology.
            </p>
            <div className="flex gap-4">
                <a href="https://instagram.com" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all text-neutral-400 hover:text-white">
                    <Instagram size={18} />
                </a>
                <a href="https://facebook.com" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all text-neutral-400 hover:text-white">
                    <Facebook size={18} />
                </a>
                <a href="https://yelp.com" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#FF1A1A] hover:border-[#FF1A1A] transition-all text-neutral-400 hover:text-white">
                    <MessageSquare size={18} />
                </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-white text-lg tracking-tight m-0">Contact Us</h4>
            <ul className="flex flex-col gap-4">
                <li>
                    <a href="https://maps.google.com/?q=3848+24th+Street,+San+Francisco,+CA+94114" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors">
                        <MapPin size={20} className="text-blue-500 shrink-0" />
                        <span>3848 24th Street, San Francisco, CA 94114</span>
                    </a>
                </li>
                <li>
                    <a href="tel:+14155550198" className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors">
                        <Phone size={20} className="text-blue-500 shrink-0" />
                        <span>(+1) 415 555 0198</span>
                    </a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@noevalleysmiles.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors">
                        <Mail size={20} className="text-blue-500 shrink-0" />
                        <span>hello@noevalleysmiles.com</span>
                    </a>
                </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-white text-lg tracking-tight m-0">Clinic Hours</h4>
            <ul className="flex flex-col gap-4 text-neutral-400 font-medium w-full lg:max-w-[280px]">
                <li className="grid grid-cols-[80px_1fr] gap-4 items-start">
                    <span className="pt-0.5">Mon - Fri</span>
                    <span className="text-white text-right leading-relaxed">8:15 AM - 12:00 PM<br/>1:00 PM - 4:45 PM</span>
                </li>
                <li className="grid grid-cols-[80px_1fr] gap-4 items-center">
                    <span>Sat - Sun</span>
                    <span className="text-white text-right">Closed</span>
                </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-500 font-medium text-sm">© 2024 Noe Valley Smiles and Braces. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm font-medium text-neutral-500">
              <a href="#policies" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#policies" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
