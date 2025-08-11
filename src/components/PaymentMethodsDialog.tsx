import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PaymentMethodsDialogProps {
  children?: React.ReactNode;
}

const METHODS = [
  { id: "cash", label: "Efectivo" },
  { id: "debit", label: "Tarjeta de débito" },
  { id: "credit", label: "Tarjeta de crédito" },
  { id: "transfer", label: "Transferencia (SPEI)" },
  { id: "apple", label: "Apple Pay" },
  { id: "google", label: "Google Pay" },
  { id: "paypal", label: "PayPal" },
  { id: "mpago", label: "Mercado Pago" },
];

const STORAGE_KEY = "restaurant_payment_methods";

export default function PaymentMethodsDialog({ children }: PaymentMethodsDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSelected(parsed);
      } catch {}
    }
  }, []);

  const toggle = (id: string, checked: boolean | string) => {
    setSelected((prev) => {
      const isChecked = checked === true || checked === "indeterminate";
      if (isChecked) {
        if (prev.includes(id)) return prev;
        return [...prev, id];
      }
      return prev.filter((v) => v !== id);
    });
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    const names = METHODS.filter(m => selected.includes(m.id)).map(m => m.label).join(", ") || "Ninguno";
    toast({
      title: "Métodos de pago guardados",
      description: `Has seleccionado: ${names}`,
    });
    setOpen(false);
  };

  const isSelected = useMemo(() => new Set(selected), [selected]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button variant="hero" size="xl">Configurar métodos de pago</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>¿Qué métodos de pago aceptará tu restaurante?</DialogTitle>
          <DialogDescription>
            Selecciona todas las opciones que apliquen. Siempre podrás cambiarlas más tarde.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 sm:grid-cols-2">
          {METHODS.map((m) => (
            <label key={m.id} className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent cursor-pointer">
              <Checkbox
                checked={isSelected.has(m.id)}
                onCheckedChange={(c) => toggle(m.id, c as any)}
                id={m.id}
              />
              <Label htmlFor={m.id} className="cursor-pointer">
                {m.label}
              </Label>
            </label>
          ))}
        </div>

        <DialogFooter className="mt-6">
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant="hero" onClick={save}>Guardar selección</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
