import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionWrapper from "@/components/SectionWrapper";
import { toast } from "sonner";

const Cotacao = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">Cotação</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Solicite sua cotação</h1>
          <p className="text-lg opacity-80 leading-relaxed">
            Preencha o formulário abaixo e um de nossos especialistas entrará em contato com a melhor proposta para você.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Nome completo</label>
                <Input placeholder="Seu nome" required maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                <Input placeholder="(00) 00000-0000" required maxLength={20} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
              <Input type="email" placeholder="seu@email.com" required maxLength={255} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Tipo de seguro</label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de seguro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Seguro Auto</SelectItem>
                  <SelectItem value="residencial">Seguro Residencial</SelectItem>
                  <SelectItem value="vida">Seguro de Vida</SelectItem>
                  <SelectItem value="empresarial">Seguro Empresarial</SelectItem>
                  <SelectItem value="saude">Plano de Saúde</SelectItem>
                  <SelectItem value="consorcios">Consórcios</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
              <Textarea placeholder="Descreva o que você precisa..." rows={5} maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full font-semibold" disabled={loading}>
              {loading ? "Enviando..." : "Enviar solicitação"}
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Cotacao;
