
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-200">PixelCraft</h1>
              <p className="text-xs text-gray-500">Criando experiências digitais</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-gradient-accent hover:opacity-90 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Orçamento Grátis
          </Button>
        </div>
      </div>
    </header>
  );
};
