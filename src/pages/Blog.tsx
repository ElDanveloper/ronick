import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Calendar, ChevronRight } from "lucide-react";

const articles = [
  { slug: "erros-seguro-auto", title: "5 erros ao contratar um seguro auto", excerpt: "Evite os erros mais comuns que podem comprometer sua proteção e seu bolso na hora de contratar o seguro do seu veículo.", date: "10 Mar 2026", category: "Seguro Auto" },
  { slug: "seguro-residencial-vale-a-pena", title: "Seguro residencial vale a pena?", excerpt: "Entenda por que proteger sua casa pode ser uma das melhores decisões financeiras para sua família.", date: "05 Mar 2026", category: "Seguro Residencial" },
  { slug: "quando-contratar-seguro-vida", title: "Quando contratar um seguro de vida", excerpt: "Descubra o momento ideal para garantir proteção financeira para quem você ama.", date: "28 Fev 2026", category: "Seguro de Vida" },
  { slug: "melhor-plano-saude", title: "Como escolher o melhor plano de saúde", excerpt: "Dicas essenciais para avaliar e comparar planos de saúde antes de tomar sua decisão.", date: "20 Fev 2026", category: "Plano de Saúde" },
  { slug: "seguro-empresarial-avaliar", title: "O que avaliar antes de contratar um seguro empresarial", excerpt: "Saiba quais fatores considerar para proteger seu negócio de forma completa e eficiente.", date: "15 Fev 2026", category: "Seguro Empresarial" },
];

const Blog = () => {
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Conteúdo</h1>
          <p className="text-lg opacity-80 leading-relaxed">
            Dicas, orientações e informações para você tomar as melhores decisões sobre proteção e seguros.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background border border-border rounded-xl p-8 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{article.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {article.date}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler artigo <ChevronRight className="h-4 w-4" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Blog;
