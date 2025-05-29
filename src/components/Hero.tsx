
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="bg-gradient-accent bg-clip-text text-transparent"> ideias </span>
            em experiências digitais
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em criar sites modernos, funcionais e impactantes que conectam sua marca com o mundo digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Ver Nossos Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Como Trabalhamos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Projetos Entregues</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-white mb-2">3 Anos</div>
              <div className="text-gray-300">De Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
