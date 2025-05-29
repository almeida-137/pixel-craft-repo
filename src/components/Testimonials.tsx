
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    company: "Boutique Moderna",
    role: "CEO",
    content: "A PixelCraft transformou completamente nossa presença digital. O e-commerce que desenvolveram aumentou nossas vendas em 300% nos primeiros 6 meses. Profissionais excepcionais!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1-5c?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Roberto",
    company: "Silva & Associados",
    role: "Sócio Fundador",
    content: "O site institucional ficou impecável. Design elegante, funcionalidade perfeita e um aumento significativo na captação de novos clientes. Recomendo sem hesitar!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    company: "TechFlow",
    role: "Head of Marketing",
    content: "A landing page desenvolvida pela equipe gerou uma taxa de conversão 40% superior à anterior. O trabalho foi entregue no prazo e superou todas as expectativas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Eduardo Mendes",
    company: "MedCenter",
    role: "Diretor Médico",
    content: "O sistema de gestão revolucionou nossa clínica. Agendamentos mais eficientes, prontuários organizados e relatórios detalhados. Excelente investimento!",
    avatar: "https://images.unsplash.com/photo-1559209172-8d2b53d5b9b2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nada nos deixa mais orgulhosos do que o sucesso dos nossos clientes. Confira alguns depoimentos reais.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl relative animate-fade-in-up">
            <div className="absolute top-6 left-6 text-6xl text-blue-200 font-serif">"</div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
                {testimonials[currentIndex].content}
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full p-0 hover:bg-blue-50"
            >
              ←
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full p-0 hover:bg-blue-50"
            >
              →
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white p-6 rounded-xl shadow-lg border transition-all duration-300 cursor-pointer animate-fade-in-up ${
                index === currentIndex 
                  ? 'border-blue-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h5>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
