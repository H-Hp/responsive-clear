/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

//module.exports = nextConfig


const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);

