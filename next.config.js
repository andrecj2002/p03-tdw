// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Perform customizations to webpack config
      if (!isServer) {
        config.module.rules.push({
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['next/babel'],
              plugins: [
                '@babel/plugin-syntax-jsx',
              ],
            },
          },
        });
      }
      return config;
    },
  };
  