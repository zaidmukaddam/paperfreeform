/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'hd.unsplash.com'],
  },

  env: {
    // default site metadata
    title: 'PaperFreeForm',
    description: 'The simplest online form builder that works like a doc',
    icon: '/icon.svg',
    url: 'https://paperfreeform.co/',
    og_image: 'https://paperfreeform.co/cover.png',
  },
}
