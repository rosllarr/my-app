/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.slingacademy.com',
                port: '',
                pathname: '/v1/sample-data/photos/**',
            },
        ],
    },
};

export default nextConfig;
