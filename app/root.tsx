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
        <link rel='icon' href='/favicon.ico' type='image/png' />
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
