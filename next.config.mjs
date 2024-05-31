// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ["img.freepik.com"],
    },
  };
  return nextConfig;
};
