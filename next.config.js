/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 480, 768, 1024, 1280, 1366, 1440, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },

  webpack: config => {
    let modularizeImports = null
    config.module.rules.some(rule =>
      rule.oneOf?.some(oneOf => {
        modularizeImports = oneOf?.use?.options?.nextConfig?.modularizeImports
        return modularizeImports
      }),
    )

    if (modularizeImports?.['@headlessui/react'])
      delete modularizeImports['@headlessui/react']

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
