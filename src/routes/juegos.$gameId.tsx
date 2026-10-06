import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Gamepad2, MessageCircle, Package } from "lucide-react";
import { games, DISCORD_URL } from "@/data/games";
import { gameDetails } from "@/data/game-details";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/juegos/$gameId")({
  beforeLoad: ({ params }) => { if (!games.some((g) => g.id === params.gameId)) throw notFound(); },
  head: ({ params }) => {
    const game = games.find((g) => g.id === params.gameId);
    const title = game ? `${game.nombre} — PLAYCOREGAMES` : "Juego no encontrado — PLAYCOREGAMES";
    const description = game ? `${game.nombre} para ${game.plataformas}. ${gameDetails[game.id]?.descripcion ?? ""}` : "Este juego no está en nuestro catálogo.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, ...(game?.imagen?.startsWith("https://") ? [{ property: "og:image", content: game.imagen }, { name: "twitter:image", content: game.imagen }] : [])] };
  },
  notFoundComponent: MissingGame,
  component: GamePage,
});

function MissingGame() {
  return <section className="mx-auto max-w-7xl px-4 py-24 text-center"><h1 className="text-2xl font-bold">Juego no encontrado</h1><Button asChild className="mt-6"><Link to="/" hash="catalogo"><ArrowLeft /> Volver al catálogo</Link></Button></section>;
}

function GamePage() {
  const { gameId } = Route.useParams();
  const game = games.find((g) => g.id === gameId);
  if (!game) return <MissingGame />;
  const info = gameDetails[game.id];
  const related = games.filter((g) => g.id !== game.id && (game.id.startsWith("gta6") ? !g.id.startsWith("gta6") : true)).slice(0, 4);
  return <div key={game.id} className="page-enter mx-auto max-w-7xl px-4 pb-6 sm:px-6">
    <Button asChild variant="ghost" className="my-5 -ml-3 text-muted-foreground"><Link to="/" hash="catalogo"><ArrowLeft /> Catálogo</Link></Button>
    <section className="grid items-start gap-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14">
      <div className="relative mx-auto w-full max-w-[280px] md:max-w-[400px]">
        <img src={game.imagen} alt={`Portada de ${game.nombre}`} className="aspect-[3/4] w-full rounded-lg object-cover shadow-cover" fetchPriority="high" />
        {game.nuevo && <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">NUEVO</span>}
      </div>
      <div className="min-w-0 md:pt-3">
        <p className="mb-3 text-xs font-semibold uppercase text-accent">{info?.genero}</p>
        <h1 className="break-words text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{game.nombre}</h1>
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Gamepad2 className="h-4 w-4 text-accent" />{game.plataformas}</span><span className="flex items-center gap-2"><Package className="h-4 w-4 text-accent" />Digital</span></div>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{info?.descripcion}</p>
        <div className="my-7 border-y border-border py-6">
          <div className="mb-5 flex items-baseline gap-3"><span className="text-4xl font-bold">{game.precio}€</span><span className="text-sm text-muted-foreground">{info?.edicion ?? "Juego digital"}</span></div>
          <Button asChild size="lg" className="h-12 w-full gap-3 text-base sm:w-auto"><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label={`Comprar ${game.nombre}`}><MessageCircle /> Comprar <ArrowUpRight /></a></Button>
          <p className="mt-3 text-xs text-muted-foreground">Compra a través de nuestro servidor de Discord.</p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
          <div><dt className="mb-1 text-muted-foreground">Plataforma</dt><dd className="font-medium">{game.plataformas}</dd></div>
          <div><dt className="mb-1 text-muted-foreground">Formato</dt><dd className="font-medium">Digital</dd></div>
          <div><dt className="mb-1 text-muted-foreground">Género</dt><dd className="font-medium">{info?.genero}</dd></div>
          <div><dt className="mb-1 text-muted-foreground">Edición</dt><dd className="font-medium">{info?.edicion ?? "No especificada"}</dd></div>
        </dl>
      </div>
    </section>
    <section className="mt-12 border-t border-border py-8 sm:mt-16">
      <h2 className="text-2xl font-bold">Sobre el juego</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">{info?.aspectos.map((aspect) => <li key={aspect} className="flex items-start gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" />{aspect}</li>)}</ul>
      <details className="mt-8 border-y border-border py-4"><summary className="cursor-pointer text-sm font-semibold">Detalles de la compra</summary><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Confirma con nuestro equipo en Discord la disponibilidad, el contenido de la edición, el idioma y la región antes de comprar. Las imágenes son las portadas facilitadas para el catálogo.</p></details>
    </section>
    <section className="mt-6"><div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><h2 className="text-xl font-bold sm:text-2xl">Más juegos</h2><Button asChild variant="ghost" size="icon"><Link to="/" hash="catalogo" aria-label="Ver todo el catálogo"><ArrowRight /></Link></Button></div><div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">{related.map((g) => <GameCard key={g.id} game={g} />)}</div></section>
  </div>;
}