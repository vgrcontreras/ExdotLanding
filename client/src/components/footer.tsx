import { Link } from "wouter";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-sm" id="contato">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">e</span>
              </div>
              <span className="text-xl font-bold font-display text-white">
                exdot
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Consultoria especializada em Engenharia de Dados, BI e Automação.
              Ajudamos empresas a tomar decisões mais inteligentes através de dados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Soluções</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Engenharia de Dados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Migration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} exdot. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
