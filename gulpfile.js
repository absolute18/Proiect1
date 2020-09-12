const {src,dest} =  require('gulp');
function css(){
	return src("node_modules/bootstrap/dist/css/bootstrap.css").pipe(dest("css"));
}
exports.css = css;


function allcss(){
	return src("node_modules/@fortawesome/fontawesome-free/css/all.css").pipe(dest("css"));
}
exports.allcss = allcss;


function fonts(){
	return src(["node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"
		,"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff",
		"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"])
	.pipe(dest("css"));

}
exports.fonts = fonts;




