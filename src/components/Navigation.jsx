import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Travel', id: 'travel' },
    { name: 'Registry', id: 'registry' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Dress Code', id: 'dress-code' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 z-50 border-b border-orange/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-serif text-brown font-semibold tracking-wide">R & J</div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className="bg-transparent border-none text-brown text-base font-medium font-sans tracking-wide cursor-pointer hover:text-pink transition-colors duration-200"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-brown focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-cream border-t border-orange/10 px-8 py-4">
        {menuItems.map((item) => (
            <button
            key={item.id}
              className="text-brown text-base font-medium font-sans py-2 text-left hover:text-pink transition-colors duration-200"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
            </button>
        ))}
      </div>
      )}
    </nav>
  );
}

export default Navigation;