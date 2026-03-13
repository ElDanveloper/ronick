import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoClub from "@/assets/logo-club.png";

const insuranceLinks = [
  { label: "Seguro Auto", path: "/seguros/auto" },
  { label: "Seguro Residencial", path: "/seguros/residencial" },
  { label: "Seguro de Vida", path: "/seguros/vida" },
  { label: "Seguro Empresarial", path: "/seguros/empresarial" },
  { label: "Plano de Saúde", path: "/seguros/saude" },
  { label: "Consórcios", path: "/seguros/consorcios" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [segurosOpen, setSegurosOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoClub} alt="Club Corretora de Seguros" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold text-primary leading-tight">Club</span>
            <span className="text-[10px] font-body text-muted-foreground leading-tight tracking-wider uppercase">Corretora de Seguros</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/") ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}>
            Início
          </Link>
          <Link to="/sobre" className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/sobre") ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}>
            Sobre
          </Link>
          
          {/* Seguros Dropdown */}
          <div className="relative group">
            <button className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${location.pathname.startsWith("/seguros") ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}>
              Seguros <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-lg p-2 min-w-[200px]">
                <Link to="/seguros" className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                  Todos os Seguros
                </Link>
                {insuranceLinks.map(link => (
                  <Link key={link.path} to={link.path} className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/blog" className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/blog") ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}>
            Conteúdo
          </Link>
          <Link to="/contato" className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/contato") ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}>
            Contato
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/contato">Fale Conosco</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/cotacao">Solicitar Cotação</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/5 hover:text-primary">Início</Link>
            <Link to="/sobre" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/5 hover:text-primary">Sobre</Link>
            
            <button onClick={() => setSegurosOpen(!segurosOpen)} className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/5 hover:text-primary flex items-center justify-between">
              Seguros <ChevronDown className={`h-4 w-4 transition-transform ${segurosOpen ? "rotate-180" : ""}`} />
            </button>
            {segurosOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/seguros" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary">Todos os Seguros</Link>
                {insuranceLinks.map(link => (
                  <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/5 hover:text-primary">Conteúdo</Link>
            <Link to="/contato" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/5 hover:text-primary">Contato</Link>
            
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/contato" onClick={() => setMobileOpen(false)}>Fale Conosco</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/cotacao" onClick={() => setMobileOpen(false)}>Solicitar Cotação</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
