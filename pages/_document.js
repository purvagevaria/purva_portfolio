import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Purva Gevaria Portfolio',
    description: 'Showcasing my projects, skills, and achievements. Welcome to my personal portfolio website.',
    image: 'https://yourdomain.com/path/to/your/image.png',
    url: 'https://yourdomain.com', // Add your website URL if available
    author: 'Purva Gevaria'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} /> {/* Adds canonical link */}
        <link rel="icon" href="/favicon.ico" /> {/* Link to your favicon */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
