import './style.css';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body>
    <header>
      <div className="l"></div>
      <div className="m"></div>
      <div className="r">
        <a href="https://github.com/17x/portfolio"><img
          src="https://img.shields.io/badge/github-portfolio-blue?logo=github" alt="" /></a>
      </div>
    </header>
    <div id="main">
      <div id="steps">
        {children}
      </div>
    </div>
    </body>
    </html>
  )
}