/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'www.hyperui.dev'],
  },
  async redirects() {
    return [
      {
        source: '/git',
        destination:
          'https://github.com/pblgllgs/hyper-ui-nextjs-tailwindcss-markup-practice',
        permanent: false,
        basePath: false,
      },
      {
        source: '/dev.to',
        destination: 'https://dev.to/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/stackoverflow',
        destination: 'https://stackoverflow.com/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/logrocket',
        destination: 'https://blog.logrocket.com/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/ganbeta',
        destination: 'https://www.genbeta.com/categoria/desarrollo',
        permanent: false,
        basePath: false,
      },
      {
        source: '/infoq',
        destination: 'https://www.infoq.com/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/medium',
        destination: 'https://medium.com/',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig
