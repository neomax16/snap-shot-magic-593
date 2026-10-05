export type Game = {
  id: string;
  nombre: string;
  precioPrimaria: number;
  precioSecundaria: number;
  nuevo: boolean;
  imagen?: string; // URL de la portada real (opcional)
  hue: number; // color del placeholder
};

export const DISCORD_URL = "https://discord.gg/GU2VYg565k";

export const games: Game[] = [
  { id: "fc27", nombre: "FC 27", precioPrimaria: 55, precioSecundaria: 45, nuevo: false, hue: 150 },
  { id: "wolverine", nombre: "Marvel's Wolverine", precioPrimaria: 45, precioSecundaria: 35, nuevo: true, hue: 60 },
  { id: "nba2k27", nombre: "NBA 2K27", precioPrimaria: 45, precioSecundaria: 35, nuevo: false, hue: 30 },
  { id: "tsushima", nombre: "Ghost Of Tsushima", precioPrimaria: 25, precioSecundaria: 15, nuevo: false, hue: 20 },
  { id: "yotei", nombre: "Ghost Of Yotei", precioPrimaria: 40, precioSecundaria: 35, nuevo: false, hue: 350 },
  { id: "re9", nombre: "Resident Evil 9 / Requiem", precioPrimaria: 45, precioSecundaria: 35, nuevo: false, hue: 10 },
  { id: "legobatman", nombre: "Lego Batman: Legacy of the Dark Knight", precioPrimaria: 40, precioSecundaria: 35, nuevo: false, hue: 260 },
  { id: "gta6u", nombre: "GTA 6 Ultimate Edition", precioPrimaria: 80, precioSecundaria: 70, nuevo: false, hue: 320 },
  { id: "gta6s", nombre: "GTA 6 Standard Edition", precioPrimaria: 60, precioSecundaria: 55, nuevo: false, hue: 200 },
];
