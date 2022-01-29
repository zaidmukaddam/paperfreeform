import * as React from 'react'
import cx from 'classnames'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { SEO } from "components/common/SEO";


interface Layout {
  title: string | null
  description?: string
  icon?: string
  className?: string
  children: React.ReactChild | React.ReactChild[]
}

const Layout = ({ title, description, icon, className, children }: Layout) => {
  title = title || 'Untitled form'
  icon = icon || '/icon.svg'
  return (
    <main
      role="main"
      className={cx(
        'leading-tight text-gray-800 w-screen h-full overflow-hidden lg:h-screen',
        className
      )}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#111827" />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={icon} type="image/x-icon" />
        <meta name="image" content='https://paperfreeform.co/cover.png' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <Toaster />
      {children}
    </main>
  )
}

export { Layout }
