module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // partial scss import
        prependData: `
          @use 'src/assets/styles/var';
          @use 'src/assets/styles/color';
          @use 'src/assets/styles/selector';
        `,
      },
    },
  },
};
