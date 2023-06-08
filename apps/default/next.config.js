/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = {
  reactStrictMode: true,
  // 번들되지 않은 Internal Packages를 Next.js 앱으로 가져올 때 발생하는 오류 방지하기 위한 Config
  // https://turbo.build/repo/docs/handbook/sharing-code/internal-packages#6-configuring-your-app
  transpilePackages: ['@dalgu/core-design-system'],
};

module.exports = withNextIntl(nextConfig);
