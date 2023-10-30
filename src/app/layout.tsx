import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Piper Strange Art',
  description: 'A UK based illustrator and comic artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
