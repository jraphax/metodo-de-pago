import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PaymentMethodsDialog from "@/components/PaymentMethodsDialog";

const Index = () => {
  useEffect(() => {
    document.title = "Métodos de pago | Configura tu restaurante";
    const metaDesc = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (metaDesc) metaDesc.setAttribute("content", "Selecciona y guarda los métodos de pago que aceptarás en tu restaurante.");
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "Selecciona y guarda los métodos de pago que aceptarás en tu restaurante.";
      document.head.appendChild(m);
    }
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = window.location.href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-brand-gray50/60">
        <div className="container mx-auto py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-lovable" aria-hidden />
              <span className="text-sm text-muted-foreground">Restaurante</span>
            </div>
            <a href="#metodos" className="text-sm text-primary hover:underline">Métodos de pago</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-lovable animate-gradient opacity-10 pointer-events-none" aria-hidden />
          <div className="container mx-auto grid place-items-center py-20">
            <article className="max-w-2xl text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Configura los métodos de pago de tu restaurante
              </h1>
              <p className="text-lg text-muted-foreground">
                Elige de forma rápida qué medios aceptarás: efectivo, tarjetas, transferencias y más. Podrás ajustarlos cuando quieras.
              </p>
              <div className="flex items-center justify-center gap-3">
                <PaymentMethodsDialog>
                  <Button variant="hero" size="xl">Configurar métodos de pago</Button>
                </PaymentMethodsDialog>
                <a href="#metodos" className="text-sm text-primary underline-offset-4 hover:underline">Ver opciones</a>
              </div>
            </article>
          </div>
        </section>

        <section id="metodos" className="container mx-auto py-16">
          <div className="mx-auto max-w-3xl rounded-xl border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Opciones disponibles</h2>
            <p className="text-muted-foreground mb-6">Estas son las opciones que podrás activar en la ventana de configuración.</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-lg border p-4 bg-brand-gray50">Efectivo</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Tarjeta de débito</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Tarjeta de crédito</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Transferencia (SPEI)</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Apple Pay</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Google Pay</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">PayPal</li>
              <li className="rounded-lg border p-4 bg-brand-gray50">Mercado Pago</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Restaurante — Preferencias de pago
        </div>
      </footer>
    </div>
  );
};

export default Index;
