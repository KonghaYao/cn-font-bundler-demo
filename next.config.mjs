/** @type {import('next').NextConfig} */
import fontPlugin from 'vite-plugin-font'
const nextConfig = {
    webpack: (config, options) => {
        config.plugins.push(fontPlugin.webpack())
        return config
    },
};

export default nextConfig;
