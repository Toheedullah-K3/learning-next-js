
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header
          style={{
            background: 'lightBlue',
            padding: '1rem'
          }}  
      >
        Header
      </header>
        {children}

      <footer
        style={{
            background: 'ghostWhite',
            padding: '1rem'
          }}  
      >
        Footer
      </footer>
      </body>
    </html>
  )
}
