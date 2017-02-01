'use strict';

var basePaths = {
	src: 'src/',
	dist: 'dist/'
}

var paths = {

	scripts: {
		src: basePaths.src + 'assets/_scripts/',
		dist: basePaths.dist + '_scripts/'
	},

	styles: {
		src: basePaths.src + 'assets/_styles/',
		dist: basePaths.dist + '_styles/'
	},

	views: {
    src: basePaths.src + 'partials/',
    pages: basePaths.src + 'pages/'
  },

  data: {
    src: basePaths.src + 'data/',
    dist: basePaths.dist + 'data/'
  },

  assetsData: {
    src: basePaths.src + 'assets/_data/',
    dist: basePaths.dist + '_data/'
  },

  global: {
    src: basePaths.src + 'assets/_global/',
    dist: basePaths.dist + '_global/'
  },

  fonts: {
    src: basePaths.src + 'assets/fonts/',
    dist: basePaths.dist + '_styles/fonts/'
  },

  images: {
    src: basePaths.src + 'assets/images/',
    dist: basePaths.dist + 'images/'
  },

  temp: {
    src: basePaths.src + 'assets/temp/',
    dist: basePaths.dist + 'temp/'
  },

  plugins: {
    src: basePaths.src + 'assets/_scripts/plugins/',
    dist: basePaths.dist + '_scripts/'
  }

};


var inputFiles = {
  pages: paths.views.pages + '/**/*.hbs',

  data: paths.data.src + '**/*.json',

  scripts: {
    main: paths.scripts.src + 'index.js'
  },

  styles: {
    main: paths.styles.src + 'styles.scss',
 		itcss: [
      paths.styles.src + '_00-settings/**/*.scss',
      paths.styles.src + '_01-tools/**/*.scss',
      paths.styles.src + '_02-generic/**/*.scss',
      paths.styles.src + '_03-elements/**/*.scss',
      paths.styles.src + '_04-objects/**/*.scss',
      paths.styles.src + '_05-components/**/*.scss',
      paths.styles.src + '_99-additional/**/*.scss'
    ]
  },

  views: {
    layouts: basePaths.src + 'layouts/*.hbs',
    partials: basePaths.src + 'partials/**/*.hbs'
  }
};

var outputFiles = {
  scripts: {
    main: 'scripts.js',
    mainMin: 'scripts.min.js'
  },
  styles: {
    main: 'styles.css'
  }
};

var styleOptions = {
  autoprefixer: {
    browsers: [
      'last 3 versions',
      'ie 11',
      'iOS 7'
    ]
  },
  pxtorem: {
    replace: true,
    selector_black_list: [],
    prop_white_list: []
  }
};


module.exports = {
  basePaths: basePaths,
  paths: paths,
  inputFiles: inputFiles,
  outputFiles: outputFiles,
  styleOptions: styleOptions
};
