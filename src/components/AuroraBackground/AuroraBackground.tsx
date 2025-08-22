import React from 'react';

interface AuroraBackgroundProps {
  children: React.ReactNode;
}

export function AuroraBackground({ children }: AuroraBackgroundProps) {
  return (
    <div className='relative isolate min-h-screen w-full bg-background'>
      <div
        className='
          fixed       
          inset-0     
          -z-10       
          overflow-hidden 
        '
      >
        <div className='aurora-ball one'></div>
      </div>

      <div className='relative z-0'>{children}</div>
    </div>
  );
}
