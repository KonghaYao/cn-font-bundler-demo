/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.otf/,
            use: [
                {
                    loader: './node_modules/vite-plugin-font/dist/webpack.mjs',
                    options: {
                    },
                },
            ],
        })
        return config
    },
};

export default nextConfig;
