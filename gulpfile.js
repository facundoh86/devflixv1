const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const css = () => {
    return gulp
        .src('scss/app.scss') // Aqui en que parte va a encontrar el archivo
        .pipe(autoprefixer() ) // con este pipe corre la funcion autprefixer
        .pipe(sass({ outputStyle: "expanded" })) // con este lo compila con este estilo , puede ser nested, compact etc
        .pipe(gulp.dest("css")) // y con este pipe le dices donde se tiene que almacenar
}
const watchFiles = () =>  {
    gulp.watch('scss/*.scss', css); // el css se refiere a la funcion css de arriba, el asterisco hace que tome a todos los archivos .scss
    gulp.watch('index.html')
}

// tasks
gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles)); // el parallel lo que hace es evitar que se bloqueen los archivos que el watch controla