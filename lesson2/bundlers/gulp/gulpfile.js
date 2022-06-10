const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// exports.default = async (done) => {
//   console.log('default');
//   done()
// }

exports.copy = async () => {
  return src('./style/*.scss').pipe(dest('output'))
}

exports.transform = async () => {
  return src('./style/*.scss').pipe(sass()).pipe(dest('output'))
}
function styles() {
  return src('./style/*.scss').pipe(sass()).pipe(dest('output'))
}

exports["build:watch"] = async () => {
    return watch('./style/*.scss', styles)
}