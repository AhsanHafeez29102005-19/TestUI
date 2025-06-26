const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true, // Enable inline requires for better performance
      },
    }),
    minifierConfig: {
      keep_classnames: true, // Required for some libraries
      keep_fnames: true, // Required for some libraries
      mangle: {
        toplevel: true,
      },
      compress: {
        reduce_vars: true,
        unused: true,
        booleans_as_integers: false,
        drop_console: false, // Set to true for production
        pure_getters: true,
      },
      output: {
        ascii_only: true,
        comments: false,
      },
    },
  },
  resolver: {
    assetExts: [
      'bin', 'txt', 'jpg', 'png', 'jpeg', 'webp', 'mp4', 'ttf', 'otf', 'gz',
      'woff', 'woff2', 'eot', 'mp3', 'wav', 'm4a', 'aac', 'ico', 'pdf'
    ].filter(ext => ext !== 'svg'),
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'svg', 'cjs', 'mjs'],
    extraNodeModules: {
      // Add any necessary polyfills or aliases here
    },
    resolverMainFields: ['react-native', 'browser', 'main'], // Optimization
    unstable_enablePackageExports: true, // Enable Node.js package exports resolution
  },
  serializer: {
    // Experimental serializer optimizations
    experimentalSerializerHook: () => {},
  },
  cacheStores: [
    new (require('metro-cache')).FileStore({
      root: require('path').join(__dirname, 'node_modules', '.cache', 'metro'),
    }),
  ],
  watchFolders: [
    // Add additional folders to watch if needed
  ],
  maxWorkers: require('os').cpus().length > 4 ? 4 : 2, // Limit workers for better performance
  resetCache: false, // Set to true when you want to reset cache
};

module.exports = mergeConfig(defaultConfig, config);