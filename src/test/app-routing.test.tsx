import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { games, DISCORD_URL } from "@/data/games";
import { gameDetails } from "@/data/game-details";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(games)("matches the individual page for $nombre", (game) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(`/juegos/${game.id}`).at(-1)?.routeId).toBe("/juegos/$gameId");
    expect(gameDetails[game.id]?.descripcion).toBeTruthy();
    expect(gameDetails[game.id]?.aspectos.length).toBeGreaterThan(0);
    expect(game.imagen).toMatch(/^https:\/\//);
  });

  it("keeps the requested Discord purchase destination", () => {
    expect(DISCORD_URL).toBe("https://discord.gg/GU2VYg565k");
  });
});
