import wolverineAsset from "@/assets/wolverine.png.asset.json";
import nba2k27Asset from "@/assets/nba2k27.png.asset.json";
import fc27Asset from "@/assets/fc27.png.asset.json";
import tsushimaAsset from "@/assets/tsushima.png.asset.json";
import yoteiAsset from "@/assets/yotei.png.asset.json";
import re9Asset from "@/assets/re9.png.asset.json";
import gta6sAsset from "@/assets/gta6-standard.png.asset.json";
import legobatmanAsset from "@/assets/legobatman.png.asset.json";
import sarosAsset from "@/assets/saros.png.asset.json";
import readyornotAsset from "@/assets/readyornot.png.asset.json";
import grounded2Asset from "@/assets/grounded2.png.asset.json";
import gta6Gallery1 from "@/assets/gta6-gallery-1.png.asset.json";
import gta6Gallery2 from "@/assets/gta6-gallery-2.png.asset.json";
import gta6Gallery3 from "@/assets/gta6-gallery-3.webp.asset.json";
import gta6Gallery4 from "@/assets/gta6-gallery-4.webp.asset.json";
import gta6Gallery5 from "@/assets/gta6-gallery-5.webp.asset.json";

export type Game = {
  id: string;
  nombre: string;
  plataformas: string;
  precio: number;
  nuevo: boolean;
  imagen?: string; // URL de la portada real (opcional)
  hue: number; // color del placeholder
  ediciones?: { nombre: string; precio: number }[];
  galeria?: { src: string; alt: string }[];
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
  { id: "gta6", nombre: "GTA 6", plataformas: "PS5", precio: 60, nuevo: true, imagen: gta6sAsset.url, hue: 200,
    ediciones: [{ nombre: "STANDARD E.", precio: 60 }, { nombre: "ULTIMATE E.", precio: 80 }],
    galeria: [
      { src: gta6Gallery1.url, alt: "GTA 6: ciudad y bahía al atardecer" },
      { src: gta6Gallery2.url, alt: "GTA 6: escena de acción con los protagonistas" },
      { src: gta6Gallery3.url, alt: "GTA 6: edificios junto a la bahía" },
      { src: gta6Gallery4.url, alt: "GTA 6: protagonistas en una cámara acorazada" },
      { src: gta6Gallery5.url, alt: "GTA 6: avión sobre el letrero de Vice City" },
    ],
  },
  { id: "saros", nombre: "SAROS", plataformas: "PS5", precio: 42, nuevo: false, imagen: sarosAsset.url, hue: 45 },
  { id: "readyornot", nombre: "Ready or Not", plataformas: "PS5", precio: 32, nuevo: false, imagen: readyornotAsset.url, hue: 210 },
  { id: "grounded2", nombre: "Grounded 2", plataformas: "PS5", precio: 22, nuevo: false, imagen: grounded2Asset.url, hue: 110 },
];
