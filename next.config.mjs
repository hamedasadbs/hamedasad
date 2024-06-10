/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/redirectRoute",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["img.freepik.com"],
  },
};

export default nextConfig;
