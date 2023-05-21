/** @type {import('next').NextConfig} */
const nextConfig = {
  // 번들되지 않은 Internal Packages를 Next.js 앱으로 가져올 때 발생하는 오류 방지하기 위한 Config
  // https://turbo.build/repo/docs/handbook/sharing-code/internal-packages#6-configuring-your-app
  transpilePackages: ['@dalgu/core-design-system'],
};

module.exports = nextConfig;
