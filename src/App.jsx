import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Schedule from './components/sections/Schedule';
import Travel from './components/sections/Travel';
import Registry from './components/sections/Registry';
import RSVP from './components/sections/RSVP';
import DressCode from './components/sections/DressCode';

function App() {
  return (
    <Layout>
      <Hero />
      <RSVP />
      <Registry />
      <Travel />
      <Schedule />
      <DressCode />
    </Layout>
  );
}

export default App;