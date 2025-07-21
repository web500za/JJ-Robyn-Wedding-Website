import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Registry from './components/sections/Registry';
import RSVP from './components/sections/RSVP';
import DressCode from './components/sections/DressCode';

// Removed scroll-triggered animations

function App() {
  return (
    <Layout>
      <Hero />
      <RSVP />
      <Registry />
      <DressCode />
    </Layout>
  );
}

export default App;