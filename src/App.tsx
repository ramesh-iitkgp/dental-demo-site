/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased selection:bg-blue-900 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Doctors />
      <Testimonials />
      <Footer />
    </div>
  );
}
