import { Link } from "wouter";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 text-sm" id="contato">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">e</span>
              </div>
              <span className="text-xl font-bold font-display text-white">
                exdot
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Consultoria especializada em Engenharia de Dados, BI e Automação.
              Ajudamos empresas a tomar decisões mais inteligentes através de dados.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors p-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors p-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors p-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-base">Soluções</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Engenharia de Dados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Automação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Cloud Migration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-base">Empresa</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Cases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs opacity-80">
            &copy; {new Date().getFullYear()} exdot. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground opacity-80">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
