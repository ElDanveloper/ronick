import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Check } from "lucide-react";

interface ProductData {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const products: Record<string, ProductData> = {
  auto: {
    title: "Seguro Auto",
    subtitle: "Seguro Auto com a proteção que você precisa",
    description: "Dirigir com tranquilidade faz toda a diferença. O seguro auto protege você contra imprevistos e garante suporte quando mais precisar.",
    benefits: ["Cobertura contra colisões", "Roubo e furto", "Assistência 24h", "Carro reserva", "Proteção contra danos a terceiros", "Cobertura para vidros e faróis"],
  },
  residencial: {
    title: "Seguro Residencial",
    subtitle: "Proteção completa para o seu lar",
    description: "Sua casa é onde estão as pessoas e as memórias mais importantes da sua vida. O seguro residencial garante proteção contra os principais riscos.",
    benefits: ["Incêndio e explosão", "Roubo e furto", "Danos elétricos", "Responsabilidade civil", "Assistência 24h", "Cobertura para desastres naturais"],
  },
  vida: {
    title: "Seguro de Vida",
    subtitle: "Proteção financeira para quem você ama",
    description: "O seguro de vida é um ato de amor e responsabilidade. Garanta tranquilidade financeira para sua família nos momentos mais difíceis.",
    benefits: ["Cobertura por morte", "Invalidez permanente", "Doenças graves", "Assistência funeral", "Diária por internação hospitalar", "Renda por incapacidade temporária"],
  },
  empresarial: {
    title: "Seguro Empresarial",
    subtitle: "Proteja o patrimônio da sua empresa",
    description: "Sua empresa é fruto de anos de trabalho e dedicação. Proteja-a contra os imprevistos que podem comprometer sua operação.",
    benefits: ["Incêndio e explosão", "Roubo e furto", "Responsabilidade civil", "Lucros cessantes", "Equipamentos eletrônicos", "Danos a terceiros"],
  },
  saude: {
    title: "Plano de Saúde",
    subtitle: "Cuidado com quem mais importa",
    description: "Ter acesso a um bom atendimento médico é essencial. Encontramos o plano de saúde ideal para você e sua família.",
    benefits: ["Consultas e exames", "Internações", "Cirurgias", "Atendimento de urgência", "Cobertura nacional", "Planos individuais e empresariais"],
  },
  consorcios: {
    title: "Consórcios",
    subtitle: "Planejamento inteligente para seus projetos",
    description: "O consórcio é uma forma inteligente e econômica de adquirir bens. Planeje a conquista dos seus sonhos com parcelas que cabem no seu bolso.",
    benefits: ["Sem juros", "Parcelas acessíveis", "Imóveis e veículos", "Contemplação por sorteio ou lance", "Planejamento financeiro", "Diversas opções de crédito"],
  },
};

const SeguroDetalhe = () => {
  const { tipo } = useParams<{ tipo: string }>();
  const product = products[tipo || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Produto não encontrado</h1>
          <Button asChild><Link to="/seguros">Ver todos os seguros</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">{product.title}</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{product.subtitle}</h1>
          <p className="text-lg opacity-80 leading-relaxed max-w-2xl">{product.description}</p>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">O que está incluso</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {product.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-club-gray-50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Faça uma cotação agora</h3>
            <p className="text-muted-foreground mb-6">Solicite uma cotação personalizada e descubra a melhor opção para você.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-8">
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8">
                <a href="https://wa.me/5575983151724" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SeguroDetalhe;
