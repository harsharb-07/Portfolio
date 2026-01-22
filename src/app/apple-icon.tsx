import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 180,
    height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a192f',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                }}
            >
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #64ffda 0%, #4a9eff 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'flex',
                    }}
                >
                    RB
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
