import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Car, Home, Heart, Building2, Stethoscope, PiggyBank, Users, Shield, Handshake, Clock, UserCheck, Star, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-people.jpg";
import aboutImage from "@/assets/about-image.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const services = [
  { icon: Car, title: "Seguro Auto", desc: "Proteção para seu veículo e tranquilidade para dirigir todos os dias.", path: "/seguros/auto" },
  { icon: Home, title: "Seguro Residencial", desc: "Segurança para o seu patrimônio e para sua família.", path: "/seguros/residencial" },
  { icon: Heart, title: "Seguro de Vida", desc: "Proteção financeira para quem você ama.", path: "/seguros/vida" },
  { icon: Building2, title: "Seguro Empresarial", desc: "Proteja sua empresa contra imprevistos.", path: "/seguros/empresarial" },
  { icon: Stethoscope, title: "Plano de Saúde", desc: "Cuidado com quem mais importa.", path: "/seguros/saude" },
  { icon: PiggyBank, title: "Consórcios", desc: "Planejamento inteligente para realizar seus projetos.", path: "/seguros/consorcios" },
];

const differentials = [
  { icon: Users, text: "Atendimento próximo e humano" },
  { icon: Clock, text: "Mais de 25 anos de experiência no mercado" },
  { icon: Handshake, text: "Parceria com seguradoras reconhecidas" },
  { icon: Shield, text: "Acompanhamento completo em sinistros" },
  { icon: UserCheck, text: "Consultoria personalizada para cada cliente" },
];

const stats = [
  { value: "10.000+", label: "Clientes atendidos" },
  { value: "25+", label: "Anos de experiência" },
  { value: "20+", label: "Seguradoras parceiras" },
  { value: "2", label: "Cidades na Bahia" },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0">
          <img src={heroImage} alt="Família sendo atendida por consultora de seguros" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-club-blue-light font-medium mb-4 text-sm tracking-widest uppercase"
            >
              De pessoas para pessoas
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Proteção de verdade começa com{" "}
              <span className="text-club-blue-light">pessoas.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
            >
              Na Club Corretora, cuidamos do que é importante para você: sua família, seu patrimônio e sua tranquilidade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-base">
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base">
                <a href="https://wa.me/5575999990000" target="_blank" rel="noopener noreferrer">
                  Falar com um Especialista
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <SectionWrapper className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium text-secondary tracking-widest uppercase mb-3">Sobre a Club</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Mais de 25 anos protegendo <span className="text-primary">histórias.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Desde 1999, a Club Corretora conecta pessoas às melhores soluções de seguros do mercado.</p>
                <p>Nosso compromisso vai além da contratação de uma apólice. Acompanhamos cada cliente com atenção, transparência e responsabilidade.</p>
                <p>Porque proteger o que importa exige mais do que um contrato. <strong className="text-foreground">Exige confiança.</strong></p>
              </div>
              <Button asChild variant="outline" className="mt-8" size="lg">
                <Link to="/sobre">Conheça nossa história <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img src={aboutImage} alt="Família reunida" className="rounded-2xl shadow-hero w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-heading font-bold">1999</p>
                <p className="text-sm opacity-80">Desde então, cuidando de você.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SERVICES */}
      <SectionWrapper className="py-20 lg:py-28 bg-club-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-secondary tracking-widest uppercase mb-3">Nossos Serviços</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Soluções completas em seguros
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={s.path}
                  className="block bg-background rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* DIFFERENTIALS */}
      <SectionWrapper className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-secondary tracking-widest uppercase mb-3">Diferenciais</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Por que escolher a <span className="text-primary">Club?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa missão é oferecer mais do que seguros. Oferecemos segurança, proximidade e confiança em cada etapa.
              </p>
            </div>
            <div className="space-y-4">
              {differentials.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-club-gray-50 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <d.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{d.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* TRUST STATS */}
      <SectionWrapper className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Confiança construída ao longo de décadas
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <Star className="h-6 w-6 mx-auto mb-4 opacity-60" />
            <blockquote className="text-lg italic opacity-90 leading-relaxed mb-4">
              "A Club Corretora nos ajudou em um momento muito difícil. O atendimento foi humano, rápido e transparente. Recomendo de olhos fechados."
            </blockquote>
            <p className="text-sm opacity-70">— Maria S., cliente desde 2015</p>
          </div>
        </div>
      </SectionWrapper>

      {/* TEAM */}
      <SectionWrapper className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={teamPhoto} alt="Equipe Club Corretora" className="rounded-2xl shadow-hero w-full object-cover aspect-[16/10]" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-secondary tracking-widest uppercase mb-3">Nossa Equipe</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Pessoas cuidando de <span className="text-primary">pessoas</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Acreditamos que o verdadeiro valor de um seguro aparece quando o cliente mais precisa.</p>
                <p>Por isso, cada atendimento é feito com atenção, responsabilidade e compromisso.</p>
                <p>Nossa equipe é treinada para oferecer a melhor experiência em todas as etapas: da contratação ao sinistro.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper className="py-20 lg:py-28 bg-club-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Vamos cuidar do que é importante para você
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Solicite uma cotação personalizada ou fale diretamente com nossos especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-8 text-base">
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8 text-base">
                <a href="https://wa.me/5575999990000" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Index;
