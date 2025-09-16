import Link from "next/link"

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
            padding: '1rem',
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Link
            href={"/blog"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > Blogs </Link>
          <Link
            href={"/about"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > About </Link>
          <Link
            href={"/products"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > Products </Link>
          <Link
            href={"/docs"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > Docs </Link>
          <Link
            href={"/profile"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > Profile </Link>
          <Link
            href={"/articles"}
            style={{
              fontSize: 22,
              color: "black",
              marginRight: 20
            }}
          > Articles </Link>
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
