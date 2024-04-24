/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['cdn.builder.io'],
  // },
  reactStrictMode: true,
  transpilePackages: ['@ant-design', 'antd', 'rc-util', 'rc-pagination', 'rc-picker'],
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}

module.exports = nextConfig
