//-----------------------------        Path           ------------------------------------

const buildFolder = './build';
const srcFolder = './src';
const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    svg: `${buildFolder}/img/svg`,
    fonts: `${buildFolder}/fonts/`,
    libs: `${buildFolder}/libs/`
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    jsMain: `${srcFolder}/js/main-page/main.js`,
    jsCat: `${srcFolder}/js/catalog/catalog.js`,
    jsCard: `${srcFolder}/js/product-card/product-card.js`,
    jsHeader: `${srcFolder}/js/header/header.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/svg/*.svg`,
    svgicons: `${srcFolder}/img/svgicons/*.svg`,
    libs: `${srcFolder}/libs/**/*.*`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    svg: `${srcFolder}/img/svg/*.svg`,
    svgicons: `${srcFolder}/img/svgicons/*.svg`,
    libs: `${srcFolder}/libs/**/*.*`,
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
}

//-----------------------------        const           ------------------------------------

const { src, dest, series, watch } = require("gulp");
const fileinclude = require("gulp-file-include");
const webpHtmlNosvg = require("gulp-webp-html-nosvg");
const htmlMin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const webpcss = require("gulp-webpcss");
const autoPrefixer = require("gulp-autoprefixer");
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const webpackStream = require('webpack-stream');
const fs = require("fs");
const fonter = require("gulp-fonter");
const ttfwoff2 = require("gulp-ttf2woff2");
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const maps = require("gulp-sourcemaps");
const del = require("del");
const versionNumber = require("gulp-version-number");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browsersync = require("browser-sync").create();
const newer = require("gulp-newer");
const gulpif = require("gulp-if");
let isProd = false;

//-----------------------------        Clean           ------------------------------------

const clean = () => {
  return del(path.buildFolder)
}

//-----------------------------        HTML           ------------------------------------

const html = () => {
  return src(path.src.html)
    .pipe(plumber(notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
    })))
    .pipe(fileinclude())
    .pipe(webpHtmlNosvg())
    .pipe(gulpif(isProd,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'version.json'
        }
      })
    ))
    .pipe(gulpif(isProd, htmlMin({ collapseWhitespace: true })))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

//-----------------------------        Styles           ------------------------------------

const scss = () => {
  return src(path.src.scss)
    .pipe(plumber(notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    })))
    .pipe(gulpif(!isProd, maps.init()))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulpif(isProd, groupCssMediaQueries()))
    .pipe(webpcss({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    }))
    .pipe(
      gulpif(isProd,
        autoPrefixer({
          grid: true,
          overrideBrowserslist: ["last 3 version"],
          cascade: false,
        })
      )
    )
    .pipe(gulpif(isProd, cleanCss({ level: 2 })))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulpif(!isProd, maps.write('../sourcemaps/')))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

//-----------------------------        Fonts           ------------------------------------

const ttfToWoff = () => {
  return src(`${path.srcFolder}/fonts/*.ttf`, {})
    .pipe(plumber(notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
    })))
    .pipe(fonter({ formats: ['woff'] }))
    .pipe(dest(path.build.fonts))

    .pipe(src(`${path.srcFolder}/fonts/*.ttf`))
    .pipe(ttfwoff2())
    .pipe(dest(path.build.fonts))
}

const fontsStyle = () => {
  //Файл стилей подключения шрифтов
  let fontsFile = `${path.srcFolder}/scss/common/fonts.scss`;
  //Проверяем, существуют ли файлы шрифтов
  fs.readdir(path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      //Проверяем, существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsFile)) {
        //Если файла нет, создаём его
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          //Записываем подключения шрифтов в файл стилей
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        //Если файл есть, выводим сообщение
        console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!");
      }
    }
  });
  return src(`${path.srcFolder}`);
  function cb() { }
}

//-----------------------------        Scripts           ------------------------------------

const jsElements = () => {
  return src(path.src.js, { sourcemaps: !isProd })
    .pipe(plumber(notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })))
    .pipe(webpackStream({
      mode: isProd ? 'production' : 'development',
      entry: {
        main: path.src.jsMain,
        catalog: path.src.jsCat,
        'product-card': path.src.jsCard,
        header: path.src.jsHeader,
      },
      output: { filename: '[name].min.js' },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      devtool: !isProd ? 'source-map' : false
    }))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

//-----------------------------        SVG           ---------------------------------------

const createSvgSprite = () => {
  return src(path.src.svgicons)
    .pipe(gulpif(isProd, svgmin({
      js2svg: { pretty: true },
    })))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream())
}

const copySvg = () => {
  return src(path.src.svg)
    .pipe(gulpif(isProd, svgmin({
      js2svg: { pretty: true },
    })))
    .pipe(dest(path.build.svg))
    .pipe(browsersync.stream())
}

//-----------------------------        Images        ---------------------------------------

const images = () => {
  return src(path.src.images)
    .pipe(plumber(notify.onError({
      title: "IMAGES",
      message: "Error: <%= error.message %>"
    })))
    .pipe(newer(path.build.images))
    .pipe(webp())
    .pipe(dest(path.build.images))

    .pipe(src(path.src.images))
    .pipe(newer(path.build.images))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3,
    })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream());
}

//-----------------------------        Libs           ------------------------------------

const libs = () => {
  return src(path.src.libs)
    .pipe(dest(path.build.libs))
    .pipe(browsersync.stream())
}

//-----------------------------        Watcher & Build        ---------------------------------------

const watchFiles = () => {
  browsersync.init({
    server: {
      baseDir: 'build'
    },
    notify: false
  })
}
watch(path.watch.html, html);
watch(path.watch.scss, scss);
watch(path.watch.svgicons, createSvgSprite);
watch(path.watch.svg, copySvg);
watch(path.watch.js, jsElements);
watch(path.watch.libs, libs);

const build = (done) => {
  isProd = true;
  done()
}

exports.default = series(clean, html, scss, jsElements, ttfToWoff, fontsStyle, createSvgSprite, copySvg, images, libs, watchFiles);
exports.prod = series(build, clean, html, scss, jsElements, ttfToWoff, fontsStyle, createSvgSprite, copySvg, images, libs, watchFiles);

