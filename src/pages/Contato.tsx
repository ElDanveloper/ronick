import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const offices = [
  {
    city: "Feira de Santana",
    address: "Av. Getúlio Vargas, 1234 - Centro, Feira de Santana - BA",
    phone: "(75) 3333-0000",
    hours: "Seg a Sex: 8h às 18h",
  },
  {
    city: "Vitória da Conquista",
    address: "Rua São Paulo, 567 - Centro, Vitória da Conquista - BA",
    phone: "(77) 3333-0000",
    hours: "Seg a Sex: 8h às 18h",
  },
];

const Contato = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Retornaremos em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-sm font-medium text-club-blue-light tracking-widest uppercase mb-3">Contato</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fale com a Club Corretora</h1>
          <p className="text-lg opacity-80 leading-relaxed">
            Estamos prontos para atender você. Entre em contato por telefone, WhatsApp ou preencha o formulário.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Nossos Escritórios</h2>
              <div className="space-y-8">
                {offices.map((office) => (
                  <div key={office.city} className="bg-club-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">{office.city}</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contato@clubcorretora.com.br</span>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8 font-semibold">
                <a href="https://wa.me/5575999990000" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
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
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                  <Textarea placeholder="Como podemos ajudar?" rows={5} required maxLength={1000} />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contato;
