import './globals.scss';
import Header from "./header";
import React from "react";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Online CV</title>
    </head>
    <body>
    <Header />
    <div id="main">
      {children}
    </div>
    </body>
    </html>
  )
}