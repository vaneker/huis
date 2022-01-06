import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'

import globalStylesUrl from './styles/global.css'
import tailwindStylesUrl from './styles/tailwind.css'

export const meta: MetaFunction = () => {
  const description = `Welkom, wij hopen u snel te mogen ontvangen in Huize Kroep in De Lutte!`
  return {
    description,
    title: 'Huize Kroep',
    keywords: 'Huize Kroep,De Lutte,vakantiehuis',
    'twitter:image': 'https://huize-kroep.nl/images/huis-index.jpg',
    'twitter:card': 'summary_large_image',
    'twitter:creator': 'Huize Kroep',
    'twitter:site': 'https://huize-kroep.nl',
    'twitter:title': 'Huize Kroep',
    'twitter:description': description,
    'og:title': 'Huize Kroep',
    'og:description': description,
    'og:image': 'https://huize-kroep.nl/images/huis-index.jpg',
    'og:url': 'https://huize-kroep.nl',
    'og:site_name': 'Huize Kroep',
    'og:type': 'website',
    'og:locale': 'nl_NL',
  }
}

export default function App() {
  return (
    <html lang='nl'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
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
