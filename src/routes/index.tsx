import { createFileRoute, type SearchSchemaInput } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Search, X, Gamepad2, MessageCircle, Ticket } from "lucide-react";
import { games } from "@/data/games";
import { gruposSuscripciones } from "@/data/subscriptions";
import { GameCard } from "@/components/GameCard";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";
import tsushimaAsset from "@/assets/tsushima.png.asset.json";

const TITLE = "PLAYCOREGAMES — Videojuegos digitales para PS4 y PS5";
export const Route = createFileRoute("/")({
  validateSearch: (search: SearchSchemaInput & { q?: unknown; plataforma?: unknown; orden?: unknown }) => ({
    q: typeof search.q === "string" ? search.q : "",
    plataforma: search.plataforma === "PS4" || search.plataforma === "PS5" ? search.plataforma : "Todos",
    orden: search.orden === "precio-asc" || search.orden === "precio-desc" || search.orden === "nombre" ? search.orden : "destacados",
  }),
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: "Explora videojuegos digitales para PS4 y PS5 y suscripciones PS Plus en PLAYCOREGAMES." }, { property: "og:title", content: TITLE }, { property: "og:description", content: "Descubre nuestro catálogo de juegos digitales y PS Plus. Compra a través de Discord." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, ...(tsushimaAsset.url.startsWith("https://") ? [{ property: "og:image", content: tsushimaAsset.url }, { name: "twitter:image", content: tsushimaAsset.url }] : [])] }),
  component: Index,
});

function Index() {
  const { q, plataforma, orden } = Route.useSearch();
  const navigate = Route.useNavigate();
  const update = (values: Partial<{ q: string; plataforma: string; orden: string }>) => navigate({ search: (prev) => ({ ...prev, ...values }), replace: true, resetScroll: false });
  const filtered = games.filter((g) => g.nombre.toLowerCase().includes(q.trim().toLowerCase()) && (plataforma === "Todos" || g.plataformas.includes(plataforma))).sort((a, b) => orden === "precio-asc" ? a.precio - b.precio : orden === "precio-desc" ? b.precio - a.precio : orden === "nombre" ? a.nombre.localeCompare(b.nombre) : 0);
  const nuevos = games.filter((g) => g.nuevo);
  return <>
    <section id="inicio" className="store-hero relative isolate flex min-h-[480px] scroll-mt-20 items-center overflow-hidden sm:min-h-[530px]">
      <img src={tsushimaAsset.url} alt="Ghost of Tsushima" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%]" fetchPriority="high" />
      <div className="hero-scrim absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <img src={logoAsset.url} alt="" className="mb-5 h-20 w-20 sm:h-24 sm:w-24" />
        <p className="mb-3 text-xs font-semibold uppercase text-accent">PS4 · PS5 · PS PLUS</p>
        <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-5xl">PLAYCORE<br />GAMES</h1>
        <p className="mt-5 max-w-sm text-base leading-6 text-hero-muted sm:text-lg">Tu tienda de videojuegos digitales para PS4 y PS5</p>
        <Button asChild size="lg" className="mt-7 h-12"><a href="#catalogo">Ver catálogo <ArrowRight /></a></Button>
        <a href="#nuevos" aria-label="Ir a novedades" className="mt-9 flex w-fit items-center gap-2 text-xs text-hero-muted">Novedades <ArrowDown className="h-4 w-4" /></a>
      </div>
    </section>

    <section id="nuevos" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-accent" /><h2 className="section-title">Nuevos lanzamientos</h2></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">{nuevos.map((g) => <GameCard key={g.id} game={g} />)}</div>
    </section>

    <section id="catalogo" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(240px,340px)] sm:items-center">
          <div className="min-w-0"><h2 className="section-title">Catálogo</h2><p className="mt-2 text-xs text-muted-foreground">{filtered.length} juegos</p></div>
          <label className="relative block min-w-0"><span className="sr-only">Buscar juego</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input value={q} onChange={(e) => update({ q: e.target.value })} placeholder="Buscar juego..." className="h-11 w-full rounded-md border border-input bg-card pl-10 pr-12 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />{q && <Button variant="ghost" size="icon" className="absolute right-1 top-1" aria-label="Borrar búsqueda" onClick={() => update({ q: "" })}><X /></Button>}</label>
        </div>
        <div className="my-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <div className="flex min-w-0 gap-1" aria-label="Filtrar por plataforma">{["Todos", "PS4", "PS5"].map((p) => <Button key={p} size="sm" variant={plataforma === p ? "default" : "ghost"} aria-pressed={plataforma === p} onClick={() => update({ plataforma: p })} className="px-2 sm:px-4">{p}</Button>)}</div>
          <label className="min-w-0"><span className="sr-only">Ordenar juegos</span><select value={orden} onChange={(e) => update({ orden: e.target.value })} className="h-9 w-[132px] rounded-md border border-input bg-card px-2 text-xs text-foreground outline-none focus:ring-2 focus:ring-primary sm:w-44"><option value="destacados">Destacados</option><option value="precio-asc">Precio: menor a mayor</option><option value="precio-desc">Precio: mayor a menor</option><option value="nombre">Nombre: A–Z</option></select></label>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4" aria-live="polite">{filtered.map((g) => <GameCard key={g.id} game={g} />)}</div>
        {filtered.length === 0 && <div className="py-16 text-center"><Search className="mx-auto mb-4 h-8 w-8 text-muted-foreground" /><p className="text-muted-foreground">No se encontraron juegos.</p><Button variant="outline" className="mt-5" onClick={() => update({ q: "", plataforma: "Todos" })}>Mostrar todos</Button></div>}
      </div>
    </section>

    <section id="suscripciones" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
      <h2 className="section-title">Suscripciones</h2>
      {gruposSuscripciones.map((grupo) => <div key={grupo.id} className="mt-7"><h3 className="mb-5 text-lg font-bold text-accent">{grupo.nombre}</h3><div className="grid gap-4 sm:grid-cols-3 sm:gap-5">{grupo.planes.map((plan) => <SubscriptionCard key={plan.id} plan={plan} />)}</div></div>)}
    </section>

    <section className="mx-auto max-w-7xl border-t border-border px-4 py-10 sm:px-6">
      <h2 className="section-title">¿Cómo comprar?</h2>
      <ol className="mt-7 grid gap-7 md:grid-cols-3">{[{ icon: Gamepad2, text: "Elige tu juego." }, { icon: MessageCircle, text: 'Pulsa “Comprar” y únete a nuestro Discord.' }, { icon: Ticket, text: "Abre ticket y recibe tu juego." }].map(({ icon: Icon, text }, i) => <li key={text} className="flex items-start gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-accent"><Icon className="h-5 w-5" /></div><div><span className="text-xs font-semibold text-accent">0{i + 1}</span><p className="mt-1 text-sm leading-6">{text}</p></div></li>)}</ol>
    </section>
  </>;
}
