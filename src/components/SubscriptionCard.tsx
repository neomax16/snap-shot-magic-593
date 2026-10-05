import { DISCORD_URL, type Suscripcion } from "@/data/subscriptions";

export function SubscriptionCard({ plan }: { plan: Suscripcion }) {
  return (
    <article className="game-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-card p-4">
        {plan.imagen ? (
          <img src={plan.imagen} alt={`Suscripción ${plan.nombre}`} loading="lazy" className="h-full w-full object-contain" />
        ) : (
          <span className="font-display text-2xl font-bold uppercase text-foreground">{plan.nombre}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-lg font-bold leading-tight">{plan.nombre}</h3>
        <span className="w-fit rounded border border-accent/50 px-2 py-0.5 text-xs font-semibold text-accent">{plan.duracion}</span>
        <div className="mt-auto flex items-center justify-between gap-2 rounded-lg bg-muted p-3">
          <p className="font-display text-2xl font-bold">{plan.precio}€</p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${plan.nombre}`}
            className="btn-primary rounded-md px-4 py-2 text-sm font-semibold"
          >
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}
