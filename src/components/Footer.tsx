
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PixelCraft</h3>
                <p className="text-sm text-gray-400">Criando experiências digitais</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos ideias em experiências digitais extraordinárias. 
              Especialistas em desenvolvimento web moderno e design inovador.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <span className="text-sm">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistemas Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoria Digital</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contato@pixelcraft.dev" className="hover:text-white transition-colors">
                  contato@pixelcraft.dev
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>São Paulo, SP</li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agendar reunião
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} PixelCraft. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
