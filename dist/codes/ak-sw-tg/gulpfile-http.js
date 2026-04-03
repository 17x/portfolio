var gulp = require('gulp'),
    jshint = require('gulp-jshint'), //代码验证检查
    uglify = require('gulp-uglify'), //压缩js代码
    cleanCSS = require('gulp-clean-css'), //压缩css代码
    rename = require('gulp-rename'), //文件重命名
    concat = require('gulp-concat'), //合并js文件
    notify = require('gulp-notify'), //更改提醒
    connect = require('gulp-connect'), //自动刷新页面
    sourcemaps = require('gulp-sourcemaps'), //用于解决压缩代码后调试困难
    autoprefixer = require('gulp-autoprefixer'), //自动添加css前缀
    imageisux = require('gulp-imageisux'),
    sass = require('gulp-sass'),
    px2rem = require('gulp-px2rem'),
    wait = require('gulp-wait'),
    order = require("gulp-order"),
    babel = require('gulp-babel');

gulp.task('htm', function() {
    return gulp.src('src/components/**/*.htm')
        .pipe(gulp.dest('dist/assets/tpls/'));
});

gulp.task('htm:watch', function() {
    gulp.watch('src/components/**/*.htm', ['htm']);
});

gulp.task('indexHtm', function() {
    return gulp.src('src/*.htm')
        .pipe(gulp.dest('dist/'));
});

gulp.task('indexHtm:watch', function() {
    gulp.watch('src/*.htm', ['indexHtm']);
});

gulp.task('angularExtend', function() {
    return gulp.src('src/assets/js/angular-extends/*.js')
        // .pipe(sourcemaps.init())       
        .pipe(uglify())
        .pipe(concat('angular_ext.min.js'))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('angularExtend:watch', function() {
    gulp.watch('src/assets/js/angular-extends/*.js', ['angularExtend']);
});

gulp.task('js', function() {
    return gulp.src('src/components/**/*.js')
        // .pipe(sourcemaps.init())
        .pipe(order([
            'src/components/_public/app.js',
            'src/components/_public/mainCtrl.js',
            'src/components/**/*.js'
        ]))
        .pipe(concat('index.min.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('js:watch', function() {
    gulp.watch('src/components/**/*.js', ['js']);
});

gulp.task('libcss', function() {
    var px2remOptions = {
        replace: true,
        rootValue: 30
    };
    var postCssOptions = {
        map: false
    };
    return gulp.src('src/assets/css/*.css')
        // .pipe(sourcemaps.init())
        .pipe(autoprefixer({ browsers: 'last 2 versions', remove: false }))
        .pipe(cleanCSS())
        // .pipe(px2rem(px2remOptions, postCssOptions))
        .pipe(concat('libs.min.css'))
        // .pipe(rename({ suffix: '.min' }))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('libcss:watch', function() {
    gulp.watch('src/assets/css/*.css', ['libcss']);
});

gulp.task('sass', function() {
    var px2remOptions = {
        replace: true,
        rootValue: 30
    };
    var postCssOptions = {
        map: false
    };
    return gulp.src(['src/components/**/*.scss'])
        // .pipe(sourcemaps.init())
        .pipe(order([
            'src/components/_public/_variable.scss',
            'src/components/**/*.scss'
        ]))
        .pipe(concat('index.min.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(px2rem(px2remOptions, postCssOptions))
        .pipe(autoprefixer({ browsers: 'last 3 versions' }))
        .pipe(cleanCSS())
        // .pipe(rename({ suffix: '.min' }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/assets/css'));
});

/*监控 sass*/
gulp.task('sass:watch', function() {
    gulp.watch(['src/components/**/*.scss'], ['sass']);
});

/*手动任务名 image*/
gulp.task('image', function() {
    // .pipe(imagemin())
    // .pipe(imagemin({ progressive: true }))
    return gulp.src(['src/assets/img/**/*'])
        // .pipe(imageisux('dist/img/'))
        .pipe(gulp.dest('dist/assets/img/'));
});

/*监控 image*/
gulp.task('image:watch', function() {
    gulp.watch('src/img/**/*', ['image']);
});

gulp.task('server', function() {
    // console.log(99999)
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8090
    });
});

gulp.task('livereload', function() {
    gulp.src('src/**/*')
        .pipe(connect.reload());
});
gulp.task('watchAll:watch', function() {
    gulp.watch('src/**/*', ['livereload']);
});
// gulp默认任务所关联的任务
gulp.task('default', [
    'server',
    'livereload',
    'watchAll:watch',
    'js:watch',
    'htm:watch',
    'angularExtend:watch',
    'libcss:watch',
    'sass:watch',
    'image:watch',
    'indexHtm:watch'
    // ,'copy:watch'
    /*,*/
]);
