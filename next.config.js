const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
})


module.exports = withPlugins([
  withBundleAnalyzer
], nextConfig)

