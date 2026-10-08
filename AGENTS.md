<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared storefront navigation and footer in StoreShell around the root Outlet so every game page has consistent navigation.
- Game detail URLs use /juegos/$gameId and the existing catalog IDs; static descriptive content stays in a separate data module so cards and detail pages share the catalog's prices and supplied covers.
- Do not infer release dates, availability or edition bonuses from cover artwork; show only confirmed general game information.
- Optional catalog edition and gallery fields drive variant purchases and the reusable Embla gallery; legacy edition IDs redirect to the unified product to preserve shared URLs.
- Store theme preference in `playcore-theme` and apply it before page content renders so light/dark mode stays consistent between visits.
