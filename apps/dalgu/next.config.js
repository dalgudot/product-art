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

  async redirects() {
    return [
      // {
      //   source: '/yoonseul',
      //   destination: 'https://apps.apple.com/kr/app/yoonseul/id1618657913',
      //   permanent: false,
      // },
      {
        source: '/today-todo',
        destination:
          'https://apps.apple.com/kr/app/today-to-do-success-secret/id1622514232',
        permanent: false,
      },
      {
        source: '/plant-family',
        destination:
          'https://apps.apple.com/kr/app/plant-family-water-reminder/id1633937579',
        permanent: false,
      },
      // {
      //   source: '/reminder',
      //   destination:
      //     'https://apps.apple.com/kr/app/reminder-to-do-list/id6444939279',
      //   permanent: false,
      // },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
