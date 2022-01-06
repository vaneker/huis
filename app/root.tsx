import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'

import globalStylesUrl from './styles/global.css'
import tailwindStylesUrl from './styles/tailwind.css'

export const meta: MetaFunction = () => {
  return { title: 'Huize Kroep' }
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <Meta />
        <link rel='stylesheet' href={tailwindStylesUrl} />
        <link rel='stylesheet' href={globalStylesUrl} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {/* <Scripts /> */}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
