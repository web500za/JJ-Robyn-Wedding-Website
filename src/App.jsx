import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import Registry from './components/Registry';
import DressCode from './components/DressCode';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Schedule />
      <Travel />
      <Registry />
      <RSVP />
      <DressCode />
      {/* You can add a Footer component here if you have one in src/components/ */}
    </div>
  );
}

export default App;