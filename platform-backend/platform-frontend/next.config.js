const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = withTM({
  ...nextConfig,
  images: {
    formats: ['image/webp'],
    domains: [
      'am3pap004files.storage.live.com',
      'onedrive.live.com',
      'firebasestorage.googleapis.com',
      'models.readyplayer.me',
      'images.bannerbear.com',
      'files.stripe.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
