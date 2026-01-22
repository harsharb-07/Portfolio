import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: '#0a192f',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64ffda',
                    borderRadius: '20%',
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#64ffda', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#4a9eff', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>

                    <rect width="100" height="100" fill="#0a192f" rx="20" />

                    {/* Neural Network Nodes */}
                    <circle cx="30" cy="25" r="5" fill="url(#grad1)" />
                    <circle cx="70" cy="25" r="5" fill="url(#grad1)" />

                    <circle cx="20" cy="50" r="5" fill="url(#grad1)" />
                    <circle cx="50" cy="50" r="5" fill="url(#grad1)" />
                    <circle cx="80" cy="50" r="5" fill="url(#grad1)" />

                    <circle cx="30" cy="75" r="5" fill="url(#grad1)" />
                    <circle cx="70" cy="75" r="5" fill="url(#grad1)" />

                    {/* Connection Lines */}
                    <line x1="30" y1="25" x2="20" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="30" y1="25" x2="50" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="30" y1="25" x2="80" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />

                    <line x1="70" y1="25" x2="20" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="70" y1="25" x2="50" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="70" y1="25" x2="80" y2="50" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />

                    <line x1="20" y1="50" x2="30" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="20" y1="50" x2="70" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />

                    <line x1="50" y1="50" x2="30" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="50" y1="50" x2="70" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />

                    <line x1="80" y1="50" x2="30" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                    <line x1="80" y1="50" x2="70" y2="75" stroke="#64ffda" strokeWidth="1.5" opacity="0.6" />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
