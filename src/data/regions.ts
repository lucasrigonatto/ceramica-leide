export interface MapRegion {
  name: string;
  lat: number;
  lng: number;
  isFactory?: boolean;
}

export const MAP_REGIONS: MapRegion[] = [
  { name: "Ribeirão das Neves", lat: -19.7669, lng: -44.0869 },
  { name: "Vespasiano", lat: -19.6917, lng: -43.9233 },
  { name: "Lagoa Santa", lat: -19.7617, lng: -43.8936 },
  { name: "Contagem", lat: -19.9322, lng: -44.0539 },
  { name: "Belo Horizonte", lat: -19.9167, lng: -43.9345 },
  { name: "Betim", lat: -19.9678, lng: -44.1983 },
  { name: "Santa Luzia", lat: -19.77, lng: -43.8514 },
  { name: "Sabará", lat: -19.8864, lng: -43.8067 },
  { name: "Nova Lima", lat: -19.9856, lng: -43.8467 },
  { name: "Itaúna", lat: -20.075, lng: -44.5764, isFactory: true },
];

export const MAP_CENTER: [number, number] = [-19.92, -44.08];
export const MAP_ZOOM = 9;

export const FACTORY_POSITION: [number, number] = [-20.075, -44.5764];
export const METRO_CENTER: [number, number] = [-19.9167, -43.9345];
