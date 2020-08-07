module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-syntax-import-meta'],
    '@snowpack/babel-plugin-asset-import',
    'babel-plugin-macros',
  ],
};
