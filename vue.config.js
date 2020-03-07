module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // partial scss import
        prependData: `
          @use 'src/assets/var';
          @use 'src/assets/color';
          @use 'src/assets/animation';
        `,
      },
    },
  },
};
