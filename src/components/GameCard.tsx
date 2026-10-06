import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-card group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
      <Link to="/juegos/$gameId" params={{ gameId: game.id }} aria-label={`Ver ${game.nombre}`} className="relative block aspect-[3/4] overflow-hidden bg-muted">
        {game.imagen && (
          <img src={game.imagen} alt={`Portada de ${game.nombre}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
        {!game.imagen && (
          <span role="img" aria-label={`Portada de ${game.nombre}`} className="font-display text-2xl font-bold uppercase leading-tight text-foreground drop-shadow-lg">
            {game.nombre}
          </span>
        )}
        {game.nuevo && (
          <span className="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground sm:left-3 sm:top-3 sm:text-xs">
            NUEVO
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
        <span className="text-[10px] font-semibold text-accent sm:text-xs">{game.plataformas}</span>
        <h3 className="min-h-10 break-words text-sm font-semibold leading-5 sm:min-h-12 sm:text-lg sm:leading-6"><Link to="/juegos/$gameId" params={{ gameId: game.id }} className="transition-colors hover:text-accent">{game.nombre}</Link></h3>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-1 border-t border-border pt-3">
          <p className="text-lg font-bold sm:text-2xl">{game.precio}€</p>
          <Button asChild size="sm" className="gap-1 px-2 sm:gap-2 sm:px-3"><Link to="/juegos/$gameId" params={{ gameId: game.id }} aria-label={`Ver ${game.nombre}`}>Ver <ArrowRight /></Link></Button>
        </div>
      </div>
    </article>
  );
}
