module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', {
        cwd: 'babelrc',
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          api: ['./src/api'],
          assets: ['./src/assets'],
          components: ['./src/components'],
          sections: ['./src/sections'],
          features: ['./src/features'],
          hooks: ['./src/hooks'],
          modules: ['./src/modules'],
          navigation: ['./src/navigation'],
          styles: ['./src/styles'],
          utils: ['./src/utils'],
          consts: ['./src/consts.ts'],
          storage: ['./src/storage.ts'],
          store: ['./src/store.ts'],
          types: ['./src/types.ts'],
        },
      }
    ],
    'react-native-reanimated/plugin'
  ],
};
