'use client';
import 'leaflet/dist/leaflet.css';
import React, { FC } from 'react';
import L, { LatLngExpression, divIcon } from 'leaflet';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import { CitiesData } from 'src/data/map';
import { CitiesLabel } from 'src/data/cities';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';

const Home: FC = () => {
  const position: LatLngExpression = [39, 35.5];
  const router = useRouter();

  const handlePush = (e: any) => {
    router.push(`/weather/${e.sourceTarget.feature.properties.name.toLowerCase()}/${e.latlng.lat},${e.latlng.lng}`);
  };

  return (
    <div className="flex h-screen">
      <MapContainer
        center={position}
        zoom={6.8}
        style={{ flex: 1, width: '100%', height: '100%' }}
        doubleClickZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={isMobile}
        maxZoom={6.8}
      >
        <TileLayer url={process.env.NEXT_PUBLIC_LAYER_URL as string} />
        <GeoJSON
          data={CitiesData as any}
          style={{
            color: 'gray',
            fillColor: 'black',
            fillOpacity: 1,
            weight: 1,
          }}
          eventHandlers={{
            click: e => {
              handlePush(e);
            },
          }}
        />
        <GeoJSON
          data={CitiesLabel as any}
          pointToLayer={(feature, latlng) => {
            return L.marker(latlng, {
              icon: divIcon({
                className: 'text-white text-xs',
                html: feature.properties.name,
              }),
            });
          }}
          eventHandlers={{
            click: e => {
              handlePush(e);
            },
          }}
        />
      </MapContainer>
    </div>
  );
};

export default Home;
