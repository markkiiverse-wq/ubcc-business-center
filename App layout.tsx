import './globals.css'

export const metadata = {
  title: 'Universal Business Command Center',
  description: 'Modular operations platform for VA agencies, recruitment, real estate, BPO, sales, consulting',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
