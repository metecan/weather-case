'use client';
import 'leaflet/dist/leaflet.css';
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';

const Map = dynamic(() => import('./components/Map/Map'), { ssr: false });

const Home: FC = () => {
  const position: LatLngExpression = [39, 35.5];

  return (
    <div className="flex h-screen">
      <Map position={position} />
    </div>
  );
};

export default Home;
