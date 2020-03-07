module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @use 'src/assets/var';
        @use 'src/assets/color';
        @use 'src/assets/animation';`,
      },
    },
  },
};
