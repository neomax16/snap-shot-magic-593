import { DISCORD_URL, type Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div
        className="relative flex aspect-[3/4] items-end p-4"
        style={{
          background: game.imagen
            ? undefined
            : `linear-gradient(160deg, oklch(0.45 0.18 ${game.hue}), oklch(0.18 0.06 ${game.hue + 40}))`,
        }}
      >
        {game.imagen && (
          <img src={game.imagen} alt={`Portada de ${game.nombre}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        )}
        {!game.imagen && (
          <span role="img" aria-label={`Portada de ${game.nombre}`} className="font-display text-2xl font-bold uppercase leading-tight text-foreground drop-shadow-lg">
            {game.nombre}
          </span>
        )}
        {game.nuevo && (
          <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 font-display text-xs font-bold tracking-widest text-primary-foreground glow">
            NUEVO
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="w-fit rounded border border-accent/50 px-2 py-0.5 text-xs font-semibold text-accent">PS4 / PS5</span>
        <h3 className="font-display text-lg font-bold leading-tight">{game.nombre}</h3>
        <div className="mt-auto space-y-2">
          {[
            ["Cuenta primaria", game.precioPrimaria],
            ["Cuenta secundaria", game.precioSecundaria],
          ].map(([label, price]) => (
            <div key={label as string} className="flex items-center justify-between gap-2 rounded-lg bg-muted p-2">
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-display text-xl font-bold">{price}€</p>
              </div>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Comprar ${game.nombre} - ${label}`}
                className="btn-primary rounded-md px-4 py-2 text-sm font-semibold"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
