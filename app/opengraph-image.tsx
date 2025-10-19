import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tandem - Une vraie conversation par jour'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B0B0C 0%, #1a1a1b 100%)',
          position: 'relative',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(110, 122, 240, 0.4) 0%, rgba(155, 110, 240, 0.2) 100%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(155, 110, 240, 0.4) 0%, rgba(110, 122, 240, 0.2) 100%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #6E7AF0 0%, #9B6EF0 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: '0 40px',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Tandem
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#9EA3AF',
              margin: '20px 0 0 0',
              textAlign: 'center',
              padding: '0 40px',
            }}
          >
            Une vraie conversation par jour
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
