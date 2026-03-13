import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5575999990000?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20seguros."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground rounded-full px-5 py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
