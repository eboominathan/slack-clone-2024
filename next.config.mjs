/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',        
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',        
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',        
          },
        ],
      },
    typescript : {
        ignoreBuildErrors : true
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
