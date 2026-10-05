import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, Search, Gamepad2, MessageCircle, Ticket } from "lucide-react";
import { games, DISCORD_URL } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import logoAsset from "@/assets/logo.png.asset.json";

const LOGO = logoAsset.url;
const TITLE = "PLAYCOREGAMES - Videojuegos digitales para PS4 y PS5";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: TITLE },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "Tu tienda de videojuegos digitales para PS4 y PS5." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  ["Inicio", "#inicio"],
  ["Nuevos lanzamientos", "#nuevos"],
  ["Catálogo", "#catalogo"],
];

function Index() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () => games.filter((g) => g.nombre.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  );
  const nuevos = games.filter((g) => g.nuevo);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered.length]);

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex items-center" aria-label="PLAYCOREGAMES - Inicio">
            <img src={LOGO} alt="PLAYCOREGAMES" width={1024} height={1024} className="h-11 w-11 sm:h-12 sm:w-12" />
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{l}</a></li>
            ))}
            <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-md px-4 py-2 text-sm font-semibold">Discord</a></li>
          </ul>
          <button className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <ul className="flex flex-col gap-4 border-t border-border px-4 py-4 md:hidden">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block font-medium">{l}</a></li>
            ))}
            <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-accent">Discord</a></li>
          </ul>
        )}
      </header>

      <main>
        <section id="inicio" className="hero relative flex min-h-[90vh] items-center overflow-hidden pt-20">
          <div className="orb left-[-10%] top-[10%] bg-primary" />
          <div className="orb bottom-[0%] right-[-10%] bg-[var(--violet)]" />
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <h1>
              <img src={LOGO} alt="PLAYCOREGAMES - Tienda de videojuegos digitales" width={1024} height={1024} className="mx-auto h-56 w-auto sm:h-80 lg:h-[26rem]" />
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Tu tienda de videojuegos digitales para PS4 y PS5</p>
            <a href="#catalogo" className="btn-primary mt-10 inline-block rounded-lg px-8 py-4 font-display font-bold tracking-wider">Ver catálogo</a>
          </div>
        </section>

        <section id="nuevos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20">
          <h2 className="section-title">Nuevos lanzamientos</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nuevos.map((g) => <div key={g.id} className="reveal"><GameCard game={g} /></div>)}
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="section-title">Catálogo</h2>
            <label className="relative block w-full sm:w-80">
              <span className="sr-only">Buscar juego</span>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar juego..." className="w-full rounded-lg border border-input bg-card py-3 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40" />
            </label>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((g) => <div key={g.id} className="reveal"><GameCard game={g} /></div>)}
          </div>
          {filtered.length === 0 && <p className="mt-10 text-center text-muted-foreground">No se encontraron juegos.</p>}
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="section-title">¿Cómo comprar?</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [Gamepad2, "Elige tu juego y la modalidad."],
              [MessageCircle, "Pulsa \"Comprar\" y únete a nuestro Discord."],
              [Ticket, "Abre ticket y recibe tu juego."],
            ].map(([Icon, t], i) => {
              const I = Icon as typeof Gamepad2;
              return (
                <li key={i} className="reveal game-card rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary"><I /></div>
                  <p className="font-display text-3xl font-black text-accent">{i + 1}</p>
                  <p className="mt-2 text-lg">{t as string}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="section-title">Cuenta primaria vs. secundaria</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="reveal rounded-2xl border border-primary/50 bg-card p-6">
              <h3 className="font-display text-2xl font-bold text-primary">Cuenta primaria</h3>
              <p className="mt-3 text-muted-foreground">La mejor opción sin duda. Disfruta de tus juegos desde tu perfil personal. Podrás desbloquear logros (como el tan querido platino) y guardar tus partidas en tu perfil.</p>
            </div>
            <div className="reveal rounded-2xl border border-accent/50 bg-card p-6">
              <h3 className="font-display text-2xl font-bold text-accent">Cuenta secundaria</h3>
              <p className="mt-3 text-muted-foreground">La opción más económica. Disfruta de tus juegos desde el perfil que te entregamos.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <img src={LOGO} alt="PLAYCOREGAMES" loading="lazy" width={1024} height={1024} className="h-14 w-14" />
            <p className="mt-2">Tienda dedicada a PS4/PS5</p>
          </div>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Únete a nuestro Discord</a>
          <div className="md:text-right">
            <p>© 2026 PLAYCOREGAMES</p>
            <p className="text-xs">No afiliado a Sony Interactive Entertainment. Todas las marcas pertenecen a sus respectivos propietarios.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
