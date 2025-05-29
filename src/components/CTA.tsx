
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24h. Obrigado pelo interesse!",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Vamos Criar Algo 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Incrível </span>
            Juntos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conte-nos sobre seu projeto e descubra como podemos transformar sua ideia em uma experiência digital extraordinária.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Por que escolher a PixelCraft?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Experiência Comprovada</h4>
                      <p className="text-gray-300">Mais de 50 projetos entregues com excelência</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Tecnologias Modernas</h4>
                      <p className="text-gray-300">Utilizamos as melhores ferramentas do mercado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Suporte Contínuo</h4>
                      <p className="text-gray-300">Acompanhamento completo após a entrega</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-bold text-lg mb-3">🚀 Oferta Especial</h4>
                <p className="text-gray-300 mb-4">
                  Orçamento gratuito + consultoria estratégica sem compromisso para novos projetos!
                </p>
                <div className="text-sm text-gray-400">
                  * Válido até o final do mês
                </div>
              </div> */}
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Nome *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Empresa</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Tipo de Projeto</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" className="text-gray-900">Selecione um tipo</option>
                      <option value="ecommerce" className="text-gray-900">E-commerce</option>
                      <option value="institucional" className="text-gray-900">Site Institucional</option>
                      <option value="landing" className="text-gray-900">Landing Page</option>
                      <option value="sistema" className="text-gray-900">Sistema Web</option>
                      <option value="outro" className="text-gray-900">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Conte-nos sobre seu projeto *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                    placeholder="Descreva sua ideia, objetivos e qualquer detalhe importante..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-accent hover:opacity-90 text-white font-semibold py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Gratuito'}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade. 
                  Responderemos em até 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
