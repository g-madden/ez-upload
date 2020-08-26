module.exports = {
  installOptions: {
    clean: true,
    installTypes: true,
  },
  devOptions: {
    port: 3000,
  },
  plugins: [
    '@snowpack/plugin-babel',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          return config;
        },
      },
    ],
  ],
  scripts: {
    'mount:public': 'mount public --to /',
    'mount:src': 'mount src --to /dist',
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
};
