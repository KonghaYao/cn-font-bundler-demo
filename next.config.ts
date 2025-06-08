/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";
import fontPlugin from "vite-plugin-font";
const nextConfig: NextConfig = {
    webpack: (config, options) => {
        config.plugins.push(
            fontPlugin.webpack({
                scanFiles: {
                    default: ["pages/**/*"],
                },
            })
        );
        return config;
    },
};

export default nextConfig;
