/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,   
  env: {
    REACT_APP_SOLANA_RPC_HOST: process.env.REACT_APP_SOLANA_RPC_HOST,
    REACT_APP_NETWORK: process.env.REACT_APP_NETWORK
  },
  webpack(config){
    config.resolve.fallback = { 
      fs: false, 
      path: false, 
      constants: false, 
      stream: require.resolve('stream-browserify'), 
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      querystring: require.resolve('querystring-es3'),
      zlib: require.resolve('browserify-zlib')
    }
    return config;
  },
};
