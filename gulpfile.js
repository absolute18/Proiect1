const {src,dest} =  require('gulp');
function css(){
	return src("css/style.css").pipe(dest("img"));
}
exports.css = css;