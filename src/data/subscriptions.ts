import essentialAsset from "@/assets/psplus-essential.png.asset.json";
import extraAsset from "@/assets/psplus-extra.png.asset.json";
import premiumAsset from "@/assets/psplus-premium.png.asset.json";

export type Suscripcion = {
  id: string;
  nombre: string;
  duracion: string;
  precio: number;
  imagen?: string;
};

export type GrupoSuscripciones = {
  id: string;
  nombre: string;
  planes: Suscripcion[];
};

export const gruposSuscripciones: GrupoSuscripciones[] = [
  {
    id: "psplus",
    nombre: "PS Plus",
    planes: [
      { id: "psplus-essential", nombre: "PS Plus Essential", duracion: "12 meses", precio: 50, imagen: essentialAsset.url },
      { id: "psplus-extra", nombre: "PS Plus Extra", duracion: "12 meses", precio: 70, imagen: extraAsset.url },
      { id: "psplus-premium", nombre: "PS Plus Premium", duracion: "12 meses", precio: 90, imagen: premiumAsset.url },
    ],
  },
];
