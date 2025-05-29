
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: 'ecommerce' | 'institucional' | 'landing' | 'sistema';
  tech: string[];
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Fashion Forward",
    client: "Boutique Moderna",
    description: "Plataforma completa de e-commerce com sistema de pagamento integrado, gerenciamento de estoque e dashboard administrativo.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "ecommerce",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "Site Institucional Advocacia",
    client: "Silva & Associados",
    description: "Website profissional para escritório de advocacia com blog integrado, formulários de contato e área restrita para clientes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    category: "institucional",
    tech: ["WordPress", "PHP", "MySQL"],
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Landing Page SaaS",
    client: "TechFlow",
    description: "Landing page de alta conversão para software B2B com integração CRM e automação de marketing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "landing",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://example.com"
  },
  {
    id: 4,
    title: "Sistema de Gestão Clínica",
    client: "MedCenter",
    description: "Aplicação web para gestão de clínicas médicas com agendamento online, prontuários digitais e relatórios.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "sistema",
    tech: ["Vue.js", "Laravel", "PostgreSQL"],
    link: "https://example.com"
  },
  {
    id: 5,
    title: "Portal de Notícias",
    client: "News Digital",
    description: "Portal de notícias responsivo com sistema de comentários, newsletter e painel administrativo completo.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    category: "institucional",
    tech: ["React", "Express", "MongoDB"],
    link: "https://example.com"
  },
  {
    id: 6,
    title: "App de Delivery",
    client: "Food Express",
    description: "Aplicação web para delivery de comida com geolocalização, pagamentos online e tracking em tempo real.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    category: "ecommerce",
    tech: ["React Native", "Node.js", "Socket.io"],
    link: "https://example.com"
  }
];

const categories = [
  { key: 'all', label: 'Todos os Projetos' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'institucional', label: 'Institucional' },
  { key: 'landing', label: 'Landing Pages' },
  { key: 'sistema', label: 'Sistemas' }
];

export const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const featuredProject = projects.find(p => p.featured);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Nossos Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é uma história de sucesso. Conheça algumas das experiências digitais que criamos para nossos clientes.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-accent text-white">Case de Sucesso</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Ver Projeto
                    </Button>
                    <Button variant="outline">
                      Ler Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(category.key);
                setVisibleProjects(6);
              }}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.key 
                  ? 'bg-gradient-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      Ver Projeto
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">+{project.tech.length - 3}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              variant="outline"
              className="px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Carregar Mais Projetos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
