/** @type {import('next').NextConfig} */
import font from 'vite-plugin-font'
const nextConfig = {
    webpack: (config, options) => {
        config.plugins.push(font.webpack())
        return config
    },
};

export default nextConfig;
