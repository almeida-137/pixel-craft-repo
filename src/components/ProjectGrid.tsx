
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

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
    title: "DocSafe",
    client: "Gigante Engenharia",
    description: "Docsafe é uma plataforma especializada em gestão de documentos digitais voltada para Segurança e Saúde no Trabalho (SST) e segurança ocupacional. Facilita o controle, armazenamento e compartilhamento de documentos relacionados a normas regulamentadoras, treinamentos, laudos técnicos, PPRA, PCMSO e demais exigências legais, garantindo organização, conformidade e acessibilidade para empresas e profissionais da área.",
    image: "/images/docsafe.png",
    category: "sistema",
    tech: ["Next", "Supabase", "Stripe"],
    link: "https://docsafe.app.br",
    featured: true
  },
  {
    id: 2,
    title: "Cartas Contempladas",
    client: "Guilherme Moura",
    description: "Website profissional para escritório de advocacia com blog integrado, formulários de contato e área restrita para clientes.",
    image: "/images/cartascontempladas.png",
    category: "institucional",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://carta-showcase-central.vercel.app"
  },
  {
    id: 3,
    title: "Mesa Fácil SaaS",
    client: "Agência MaviStudio",
    description: "Landing page de alta conversão para software B2B com integração CRM e automação de marketing.",
    image: "/images/mesafacil.png",
    category: "sistema",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    link: "https://mesa-facil-reservas-online.vercel.app"
  },
  {
    id: 4,
    title: "Sistema Orbit",
    client: "OrbitSys",
    description: "Orbit é um sistema completo para comércios, que oferece soluções de PDV (ponto de venda) e gerenciamento de vendas. Facilita o controle de estoque, vendas, clientes e fluxo financeiro, ajudando negócios a otimizar operações e aumentar a eficiência no atendimento.",
    image: "/images/orbitsys.png",
    category: "sistema",
    tech: ["React", "Vite", "Electron", "MongoDB"],
    link: "https://orbitsys.com.br"
  },
  {
    id: 5,
    title: "MaviStudio",
    client: "MaviStudio",
    description: "O site foi desenvolvido para apresentar de forma clara e atraente os serviços oferecidos pelo Mavi Studio, destacando sua expertise em design gráfico, branding e consultoria para empresas que buscam fortalecer sua imagem no mercado.",
    image: "/images/mavistudio.png",
    category: "landing",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://mavistudio.com.br"
  },
  {
    id: 6,
    title: "BurguerVerse",
    client: "BurguerVerse",
    description: "Burger Verse Online é uma aplicação web responsiva para pedidos online de hambúrgueres, desenvolvida para oferecer uma experiência simples, rápida e moderna aos usuários que desejam saborear seus hambúrgueres favoritos com poucos cliques.",
    image: "/images/burguerverse.png",
    category: "landing",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://burger-verse-online.vercel.app"
  },
  {
    id: 7,
    title: "ManuTech",
    client: "PostPortas",
    description: "ManuTech é um sistema de gerenciamento de manutenções industriais, rotinas de manutenções, execução de ordens de serviço e relatórios de manutenção",
    image: "/images/manutech.png",
    category: "sistema",
    tech: ["React", "TypeScript", "Supabase"],
    link: "https://industrial-tech-pulse.vercel.app"
  },
  {
    id: 7,
    title: "Orçamento Express",
    client: "MaviStudio",
    description: "Orçamento Express é um Micro-SaaS para gerenciamento de orçamentos para micro-empreendedores, facilidade na criação e link para aprovação por cliente.",
    image: "/images/orcaexpress.png",
    category: "sistema",
    tech: ["Next", "TypeScript", "Supabase"],
    link: "https://orcamento-express-teal.vercel.app/"
  },
  {
    id: 8,
    title: "Calculadora Preço Ifood",
    client: "MaviStudio",
    description: "Calculadora Preço Ifood é um Micro-SaaS para gerenciamento de preços de produtos para deliverys, calculo de CMV e lucro.",
    image: "/images/calculado.png",
    category: "sistema",
    tech: ["Next", "TypeScript", "Supabase"],
    link: "https://restaura-profit-calc.vercel.app"
  }
];

const categories = [
  { key: 'all', label: 'Todos os Projetos' },
  // { key: 'ecommerce', label: 'E-commerce' },
  { key: 'institucional', label: 'Institucional' },
  { key: 'landing', label: 'Landing Pages' },
  { key: 'sistema', label: 'Sistemas' }
];

export const ProjectGrid = () => {
  const navigate = useNavigate();
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
                    <Button  onClick={() => window.open(featuredProject.link, '_blank')} className="bg-gradient-primary hover:opacity-90">
                      Ver Projeto
                    </Button>
                    {/* <Button variant="outline">
                      Ler Case Study
                    </Button> */}
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
                    <Button  onClick={() => window.open(project.link, '_blank')} size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
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
