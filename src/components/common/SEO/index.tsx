import * as React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string | undefined
  description?: string | undefined
  icon?: string
  image?: string
  url?: string
}

const SEO = ({ title, description, icon, image, url }: SEOProps) => {
  title = title || process.env.title
  description = description || process.env.description
  icon = icon || process.env.icon
  image = "https://paperfreeform.co/cover.png"
  url = url || process.env.url

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#111827" />
      <link rel="shortcut icon" href={icon} type="image/x-icon" />
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content='https://paperfreeform.co/cover.png'/>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}

export { SEO }
