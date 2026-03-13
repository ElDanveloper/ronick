import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import aboutImage from "@/assets/about-image.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import { MapPin, Target, Eye, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">Sobre Nós</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Uma história construída com confiança</h1>
            <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
              A Club Corretora de Seguros nasceu em 1999 com o propósito de ajudar pessoas e empresas a protegerem o que construíram ao longo da vida.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Com atuação em <strong className="text-foreground">Feira de Santana</strong> e <strong className="text-foreground">Vitória da Conquista</strong>, a empresa se consolidou pela proximidade com seus clientes e pela responsabilidade em cada atendimento.</p>
              <p>Mais do que vender seguros, nosso compromisso é oferecer tranquilidade e segurança em todos os momentos.</p>
              <p>Ao longo de mais de duas décadas, construímos relações duradouras com milhares de clientes que confiam na Club para proteger suas famílias, patrimônios e negócios.</p>
              
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Feira de Santana
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Vitória da Conquista
                </div>
              </div>
            </div>
            <img src={aboutImage} alt="Família" className="rounded-2xl shadow-hero w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </SectionWrapper>

      {/* Mission, Vision, Values */}
      <SectionWrapper className="py-20 lg:py-28 bg-club-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Missão", text: "Proteger pessoas e empresas oferecendo as melhores soluções em seguros com transparência, proximidade e responsabilidade." },
              { icon: Eye, title: "Visão", text: "Ser a corretora de seguros mais confiável e próxima dos clientes na Bahia, reconhecida pelo atendimento humano e excelência." },
              { icon: Heart, title: "Valores", text: "Confiança, transparência, proximidade, responsabilidade, compromisso com o cliente e excelência no atendimento." },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-8 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="py-20 lg:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Nossa Equipe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Profissionais dedicados, preparados para oferecer o melhor atendimento em cada etapa da sua jornada de proteção.
          </p>
          <img src={teamPhoto} alt="Equipe Club Corretora" className="rounded-2xl shadow-hero w-full max-w-4xl mx-auto object-cover aspect-[16/9]" />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Conheça nossas soluções em seguros</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
              <Link to="/seguros">Ver Seguros</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
              <Link to="/cotacao">Solicitar Cotação</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Sobre;
