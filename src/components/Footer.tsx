import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Club Corretora</h3>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              De pessoas para pessoas. Protegendo famílias, patrimônios e sonhos desde 1999.
            </p>
            <p className="text-xs opacity-50">CNPJ: 00.000.000/0001-00</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/sobre" className="hover:opacity-100 transition-opacity">Sobre a Club</Link></li>
              <li><Link to="/seguros" className="hover:opacity-100 transition-opacity">Seguros</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Conteúdo</Link></li>
              <li><Link to="/cotacao" className="hover:opacity-100 transition-opacity">Cotação</Link></li>
              <li><Link to="/contato" className="hover:opacity-100 transition-opacity">Contato</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Seguros</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/seguros/auto" className="hover:opacity-100 transition-opacity">Seguro Auto</Link></li>
              <li><Link to="/seguros/residencial" className="hover:opacity-100 transition-opacity">Seguro Residencial</Link></li>
              <li><Link to="/seguros/vida" className="hover:opacity-100 transition-opacity">Seguro de Vida</Link></li>
              <li><Link to="/seguros/empresarial" className="hover:opacity-100 transition-opacity">Seguro Empresarial</Link></li>
              <li><Link to="/seguros/saude" className="hover:opacity-100 transition-opacity">Plano de Saúde</Link></li>
              <li><Link to="/seguros/consorcios" className="hover:opacity-100 transition-opacity">Consórcios</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Feira de Santana - BA</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Vitória da Conquista - BA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(75) 3333-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@clubcorretora.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <p>© {new Date().getFullYear()} Club Corretora de Seguros. Todos os direitos reservados.</p>
          <p>Desenvolvido com compromisso e confiança.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
