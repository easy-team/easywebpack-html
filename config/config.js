module.exports = {
  entry: {
    extMatch: '.js'
  },
  cssExtract: true,
  hotCss: true,
  loaders:{
    scss: false,
    sass: false,
    less: false,
    stylus: false
  },
  plugins: {
    buildfile: false,
    manifest: false,
    manifestDeps: false
  }
};