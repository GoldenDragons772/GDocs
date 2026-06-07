import React, { JSX } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface GDocsLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GDocsLogo({ className = '', style }: GDocsLogoProps): JSX.Element {
  const logoUrl = useBaseUrl('/img/logo.png');

  return (
    <div
      className={`gdocs-custom-logo ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
        letterSpacing: '0.05em',
        lineHeight: 1,
        ...style
      }}
    >
      <span style={{ color: '#FFBA24' }}>G</span>
      <span style={{ color: '#ffffff' }}>D</span>
      <div className="gdocs-dragon-logo-wrapper" style={{ display: 'inline-flex' }}>
        <img
          src={logoUrl}
          alt="Dragon Logo"
          style={{
            height: '0.85em',
            width: 'auto',
            marginLeft: '0.05em',
            marginRight: '0.05em',
            objectFit: 'contain',
            opacity: 0
          }}
        />
      </div>
      <span style={{ color: '#ffffff' }}>C</span>
      <span style={{ color: '#ffffff' }}>S</span>
    </div>
  );
}
