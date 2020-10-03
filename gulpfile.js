const {src,dest,watch} =  require('gulp');
const sass = require('gulp-sass');

function convertSass(){
	return src("sass/style.scss").pipe(sass()).pipe(dest("css"));
}

function watchCode(){
	 watch("sass/style.scss",convertSass);	
}

function css(){
	return src("node_modules/bootstrap/dist/css/bootstrap.css").pipe(dest("css"));
}

function allcss(){
	return src("node_modules/@fortawesome/fontawesome-free/css/all.css").pipe(dest("css"));
}

function fonts(){
	return src("node_modules/@fortawesome/fontawesome-free/webfonts/*.{eot,svg,ttf,woff,woff2}")
	.pipe(dest("webfonts"));
}

function js(){
	return src("node_modules/jquery/dist/jquery.js").pipe(dest("js"));
}
function carousel(){
	return src("node_modules/owl.carousel/dist/*.{js,min.js}").pipe(dest("js"));
}
function cssC(){
	return src(["node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
		"node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"]).pipe(dest("css"));
}

exports.w = watchCode;
exports.convertSass = convertSass;
exports.js = js;
exports.allcss = allcss;
exports.css = css;
exports.fonts = fonts;
exports.carousel = carousel;
exports.cssC = cssC;

/* function fonts(){
	return src(["node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"
		,"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"])
	.pipe(dest("fonts"));
}	*/