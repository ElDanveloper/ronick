import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Seguros from "./pages/Seguros";
import SeguroDetalhe from "./pages/SeguroDetalhe";
import Cotacao from "./pages/Cotacao";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/seguros" element={<Seguros />} />
            <Route path="/seguros/:tipo" element={<SeguroDetalhe />} />
            <Route path="/cotacao" element={<Cotacao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
