import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_URL } from "@/data/games";
import logoAsset from "@/assets/logo.png.asset.json";

const navigation = [["Inicio", "inicio"], ["Novedades", "nuevos"], ["Catálogo", "catalogo"], ["Suscripciones", "suscripciones"]];

export function StoreHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="PLAYCOREGAMES - Inicio" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="" className="h-10 w-10 shrink-0" />
          <span className="truncate font-display text-xs font-bold sm:text-sm">PLAYCOREGAMES</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map(([label, hash]) => <Link key={hash} to="/" hash={hash} className="text-sm text-muted-foreground transition-colors hover:text-accent">{label}</Link>)}
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex"><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </nav>
      {open && <nav id="mobile-menu" aria-label="Menú móvil" className="grid gap-1 border-t border-border px-4 py-3 lg:hidden">
        {navigation.map(([label, hash]) => <Button key={hash} asChild variant="ghost" className="justify-start"><Link to="/" hash={hash} onClick={() => setOpen(false)}>{label}</Link></Button>)}
        <Button asChild className="mt-2"><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord <ArrowUpRight /></a></Button>
      </nav>}
    </header>
  );
}

export function StoreFooter() {
  return <footer className="mt-12 border-t border-border"><div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:grid-cols-[1fr_auto]">
    <div><p className="font-display text-sm font-bold text-foreground">PLAYCOREGAMES</p><p className="mt-2">Videojuegos digitales para PS4 y PS5</p></div>
    <Button asChild variant="outline"><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Únete a Discord <ArrowUpRight /></a></Button>
    <p className="text-xs md:col-span-2">© 2026 PLAYCOREGAMES · No afiliado a Sony Interactive Entertainment. Todas las marcas pertenecen a sus respectivos propietarios.</p>
  </div></footer>;
}

export function StoreShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen"><StoreHeader /><main>{children}</main><StoreFooter /></div>;
}