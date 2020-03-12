module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        // partial scss import
        prependData: `
          @use 'src/assets/styles/var';
          @use 'src/assets/styles/color';
          @use 'src/assets/styles/selector';
          @use 'src/assets/styles/responsive';
        `,
      },
    },
  },
};
