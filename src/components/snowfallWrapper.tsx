'use client';

import Snowfall from 'react-snowfall';

export default function SnowfallWrapper() {
  return (
    <Snowfall
      snowflakeCount={80}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none', 
      }}
    />
  );
}
