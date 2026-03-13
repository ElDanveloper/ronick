import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Car, Home, Heart, Building2, Stethoscope, PiggyBank, ChevronRight } from "lucide-react";

const insuranceTypes = [
  { icon: Car, title: "Seguro Auto", desc: "Proteção para seu veículo e tranquilidade para dirigir todos os dias.", path: "/seguros/auto" },
  { icon: Home, title: "Seguro Residencial", desc: "Segurança para o seu patrimônio e para sua família.", path: "/seguros/residencial" },
  { icon: Heart, title: "Seguro de Vida", desc: "Proteção financeira para quem você ama.", path: "/seguros/vida" },
  { icon: Building2, title: "Seguro Empresarial", desc: "Proteja sua empresa contra imprevistos.", path: "/seguros/empresarial" },
  { icon: Stethoscope, title: "Plano de Saúde", desc: "Cuidado com quem mais importa.", path: "/seguros/saude" },
  { icon: PiggyBank, title: "Consórcios", desc: "Planejamento inteligente para realizar seus projetos.", path: "/seguros/consorcios" },
];

const Seguros = () => {
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">Nossos Seguros</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Proteção para cada momento da sua vida</h1>
            <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
              Cada pessoa e cada empresa possui necessidades diferentes. Por isso, trabalhamos com diversas modalidades de seguros para garantir a melhor solução para cada situação.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={s.path}
                  className="block bg-background border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-club-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Não encontrou o que procura?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Fale com nossos especialistas e encontraremos a melhor solução de proteção para você.</p>
          <Button asChild size="lg" className="font-semibold px-8">
            <Link to="/cotacao">Solicitar Cotação</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Seguros;
