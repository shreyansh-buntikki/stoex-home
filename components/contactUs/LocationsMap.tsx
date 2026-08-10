import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Component, ReactNode, useEffect, useState } from "react";
import type { FeatureCollection } from "geojson";
import Logo from "@/public/assets/icons/logo-icon.svg";

class MapErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("LocationsMap error:", error);
    this.props.onError();
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const officeMarkers = [
  // {
  //   name: "Dubai Office",
  //   address:
  //     "#501-502, The Offices 3, One Central, World Trade Centre, Dubai, UAE",
  //   position: [25.2285, 55.2867] as [number, number],
  // },
  {
    name: "Mumbai Office",
    address:
      "91 Springboard Business Hub Pvt. Ltd, 74/II, Seepz, Andheri East, Mumbai, 400093",
    position: [19.1136, 72.8697] as [number, number],
  },
  {
    name: "Delhi NCR",
    address: "FC-19, Film City, Sector 16A, Noida, 201301",
    position: [28.5839, 77.3128] as [number, number],
  },
];

const stoexIcon = L.divIcon({
  className: "stoex-map-marker",
  html: `
    <div style="
      width: 36px;
      height: 36px;
      border-radius: 9999px;
      background: #00007F;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.25);
      border: 2px solid #fff;
    ">
      <img src="${Logo.src}" style="width: 18px; height: 18px;" alt="STOEX logo" />
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

const OCEAN_GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_ocean.geojson";
const COUNTRIES_GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";
const STATES_GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces_lines.geojson";

function ResponsiveZoom() {
  const map = useMap();
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        map.setView([20.5937, 78.9629], 5);
      } else {
        map.setView([20.5937, 78.9629], 5);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [map]);
  return null;
}

export default function LocationsMap() {
  const [ocean, setOcean] = useState<FeatureCollection | null>(null);
  const [countries, setCountries] = useState<FeatureCollection | null>(null);
  const [states, setStates] = useState<FeatureCollection | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [containerId] = useState(
    () => `map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  );

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const [oceanData, countriesData, statesData] = await Promise.allSettled(
          [
            fetch(OCEAN_GEOJSON_URL).then((r) => r.json()),
            fetch(COUNTRIES_GEOJSON_URL).then((r) => r.json()),
            fetch(STATES_GEOJSON_URL).then((r) => r.json()),
          ],
        );

        if (oceanData.status === "fulfilled") setOcean(oceanData.value);
        if (countriesData.status === "fulfilled")
          setCountries(countriesData.value);
        if (statesData.status === "fulfilled") setStates(statesData.value);
      } catch (error) {
        console.error("Error fetching map data:", error);
        setMapError("Failed to load map data");
      }
    };

    fetchData();

    return () => {
      // Cleanup handled by containerId uniqueness
    };
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full bg-[#E8EEF5] flex items-center justify-center text-[#5A5A5A] text-sm">
        Loading map...
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="w-full h-full bg-[#E8EEF5] flex items-center justify-center text-[#5A5A5A] text-sm">
        Unable to load map
      </div>
    );
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapErrorBoundary onError={() => setMapError("Map failed to render")}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          minZoom={3}
          maxZoom={18}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", zIndex: 50 }}
          whenReady={() => {
            // Map is ready
          }}
        >
          <ResponsiveZoom />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
          />
          {ocean && (
            <GeoJSON
              data={ocean}
              style={{
                fillColor: "#66d1e6",
                fillOpacity: 1,
                color: "#66d1e6",
                weight: 0,
              }}
            />
          )}
          {states && (
            <GeoJSON
              data={states}
              style={{
                fillOpacity: 0,
                color: "#000000",
                weight: 0.8,
                opacity: 0.7,
                dashArray: "4 4",
              }}
              interactive={false}
            />
          )}
          {countries && (
            <GeoJSON
              data={countries}
              style={{
                fillOpacity: 0,
                color: "#000000",
                weight: 1.2,
                opacity: 0.9,
              }}
              interactive={false}
            />
          )}
          {officeMarkers.map((office) => (
            <Marker
              key={office.name}
              position={office.position}
              icon={stoexIcon}
            >
              <Popup>
                <div style={{ fontFamily: "Mona Sans, sans-serif" }}>
                  <strong style={{ fontSize: 14, color: "#0A0A0A" }}>
                    {office.name}
                  </strong>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: 12,
                      color: "#3D3D3D",
                      lineHeight: 1.4,
                    }}
                  >
                    {office.address}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapErrorBoundary>
    </div>
  );
}
