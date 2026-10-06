import { DISCORD_URL } from "@/data/games";
import type { Suscripcion } from "@/data/subscriptions";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function SubscriptionCard({ plan }: { plan: Suscripcion }) {
  return (
    <article className="game-card group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-card p-4">
        {plan.imagen ? (
          <img src={plan.imagen} alt={`Suscripción ${plan.nombre}`} loading="lazy" className="h-full w-full object-contain" />
        ) : (
          <span className="font-display text-2xl font-bold uppercase text-foreground">{plan.nombre}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-bold leading-tight">{plan.nombre}</h3>
        <span className="w-fit rounded border border-accent/50 px-2 py-0.5 text-xs font-semibold text-accent">{plan.duracion}</span>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-t border-border pt-3">
          <p className="text-2xl font-bold">{plan.precio}€</p>
          <Button asChild size="sm"><a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${plan.nombre}`}
          >
            Comprar <ArrowUpRight />
          </a></Button>
        </div>
      </div>
    </article>
  );
}
