"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import {
  MAP_REGIONS,
  MAP_CENTER,
  MAP_ZOOM,
  FACTORY_POSITION,
  METRO_CENTER,
} from "@/data/regions";
import "leaflet/dist/leaflet.css";

function createCityIcon() {
  return L.divIcon({
    className: "metro-marker",
    html: `<span class="metro-marker__dot metro-marker__dot--city"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
}

function createFactoryIcon() {
  return L.divIcon({
    className: "metro-marker",
    html: `<span class="metro-marker__dot metro-marker__dot--factory"><span class="metro-marker__pulse"></span></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

const cityIcon = createCityIcon();
const factoryIcon = createFactoryIcon();

export default function MetroMap() {
  useEffect(() => {
    // Garante que o Leaflet recalcule o tamanho após montagem
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      scrollWheelZoom={false}
      className="metro-map h-[380px] w-full rounded-xl sm:h-[420px]"
      aria-label="Mapa da região metropolitana de Belo Horizonte"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Área de cobertura metropolitana */}
      <Circle
        center={METRO_CENTER}
        radius={32000}
        pathOptions={{
          color: "#A64B2A",
          fillColor: "#A64B2A",
          fillOpacity: 0.12,
          weight: 2,
          opacity: 0.5,
        }}
      />

      {/* Rota Itaúna → região metropolitana */}
      <Polyline
        positions={[FACTORY_POSITION, [-20.0, -44.25], METRO_CENTER]}
        pathOptions={{
          color: "#D97706",
          weight: 2.5,
          opacity: 0.75,
          dashArray: "10 8",
        }}
      />

      {MAP_REGIONS.map((region) => (
        <Marker
          key={region.name}
          position={[region.lat, region.lng]}
          icon={region.isFactory ? factoryIcon : cityIcon}
        >
          <Popup>
            <strong
              style={{
                color: region.isFactory ? "#D97706" : "#A64B2A",
                fontSize: "13px",
              }}
            >
              {region.name}
            </strong>
            {region.isFactory && (
              <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#666" }}>
                Sede — Fábrica Cerâmica Leide
              </p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
