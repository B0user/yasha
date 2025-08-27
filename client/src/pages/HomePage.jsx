import { motion } from 'framer-motion';
import '../styles/site.css';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { Partners } from '../sections/Partners';
import { Projects } from '../sections/Projects';
import { SMR } from '../sections/SMR';
import { Benefits } from '../sections/Benefits';
import { Contacts } from '../sections/Contacts';
import { CTAForm } from '../sections/CTAForm';

export function HomePage() {
  return (
    <main>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Projects />
        <SMR />
        <Benefits />
        <CTAForm />
        <Contacts />
      </motion.div>
    </main>
  );
}


