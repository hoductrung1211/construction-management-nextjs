/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {    protocol: 'https',
            hostname: 'www.procore.com',
            port: '',
            pathname: '/*/**',
        },
        {    protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/*/**',
        }
        ]
    }
}

module.exports = nextConfig
