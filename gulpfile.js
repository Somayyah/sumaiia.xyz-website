const postcss = require('gulp-postcss')
const gulp = require('gulp')
const cssnano = require('cssnano')

gulp.task('css', () => {
    let plugin = [
        cssnano()
    ]
    return gulp.src('./css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'))
})

gulp.task('serve', gulp.series('css'), () => {
    gulp.watch("./css/*.css", gulp.series('css'))
})


gulp.task('default',gulp.series('serve'))