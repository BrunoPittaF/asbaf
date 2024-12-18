import React, { useEffect, useRef } from 'react';

//preciso pedir o link de uma postagem embed da asbaf

const InstagramEmbed: React.FC = () => {
  const instagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };
    instagramRef.current?.appendChild(script);
  }, []);

  return (
    <div ref={instagramRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/BldhwsVlOiP/?img_index=1"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '99.375%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href="https://www.instagram.com/p/BldhwsVlOiP/?img_index=1"
            style={{
              background: '#FFFFFF',
              lineHeight: 0,
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
                marginBottom: 0,
                marginTop: '8px',
                overflow: 'hidden',
                padding: '8px 0 7px',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <a
                href="https://www.instagram.com/p/BldhwsVlOiP/?img_index=1"
                style={{
                  color: '#c9c8cd',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  lineHeight: '17px',
                  textDecoration: 'none',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                A post shared by Bruno Pitta (@brunopittaf)
              </a>
            </p>
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
