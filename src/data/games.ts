import wolverineAsset from "@/assets/wolverine.png.asset.json";
import nba2k27Asset from "@/assets/nba2k27.png.asset.json";
import fc27Asset from "@/assets/fc27.png.asset.json";
import tsushimaAsset from "@/assets/tsushima.png.asset.json";
import yoteiAsset from "@/assets/yotei.png.asset.json";
import re9Asset from "@/assets/re9.png.asset.json";
import gta6uAsset from "@/assets/gta6-ultimate.png.asset.json";
import gta6sAsset from "@/assets/gta6-standard.png.asset.json";
import legobatmanAsset from "@/assets/legobatman.png.asset.json";

export type Game = {
  id: string;
  nombre: string;
  plataformas: string;
  precio: number;
  nuevo: boolean;
  imagen?: string; // URL de la portada real (opcional)
  hue: number; // color del placeholder
};

export const DISCORD_URL = "https://discord.gg/GU2VYg565k";

export const games: Game[] = [
  { id: "fc27", nombre: "FC 27", plataformas: "PS4 / PS5", precio: 55, nuevo: true, imagen: fc27Asset.url, hue: 150 },
  { id: "wolverine", nombre: "Marvel's Wolverine", plataformas: "PS5", precio: 45, nuevo: true, imagen: wolverineAsset.url, hue: 60 },
  { id: "nba2k27", nombre: "NBA 2K27", plataformas: "PS5", precio: 45, nuevo: true, imagen: nba2k27Asset.url, hue: 30 },
  { id: "tsushima", nombre: "Ghost Of Tsushima", plataformas: "PS4 / PS5", precio: 25, nuevo: false, imagen: tsushimaAsset.url, hue: 20 },
  { id: "yotei", nombre: "Ghost Of Yotei", plataformas: "PS5", precio: 40, nuevo: false, imagen: yoteiAsset.url, hue: 350 },
  { id: "re9", nombre: "Resident Evil 9 / Requiem", plataformas: "PS5", precio: 45, nuevo: false, imagen: re9Asset.url, hue: 10 },
  { id: "legobatman", nombre: "Lego Batman: Legacy of the Dark Knight", plataformas: "PS5", precio: 40, nuevo: false, imagen: legobatmanAsset.url, hue: 260 },
  { id: "gta6u", nombre: "GTA 6 Ultimate Edition", plataformas: "PS5", precio: 80, nuevo: true, imagen: gta6uAsset.url, hue: 320 },
  { id: "gta6s", nombre: "GTA 6 Standard Edition", plataformas: "PS5", precio: 60, nuevo: true, imagen: gta6sAsset.url, hue: 200 },
];
