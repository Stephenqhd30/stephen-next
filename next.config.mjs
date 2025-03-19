/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // 将纯 esm 模块转为 node 兼容模块
  transpilePackages: ['@ant-design/pro-editor'],
};

export default nextConfig;
