// 1.创建gulp对象
const gulp = require("gulp");
// 2.拷贝index.html文件
//创建任务
gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

// 处理图片
gulp.task("images",function(){
	return gulp.src("*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

// 执行css代码 处理css文件
// 下载插件
// 引入
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function(){
	return gulp.src("index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})




// 执行scripts代码 拷贝js文件
gulp.task("scripts",function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})





// 处理数据
gulp.task("data",function(){
	return gulp.src(["*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})


// 一次性执行多个任务
gulp.task("build",["data","images","scss","scripts","copy-html"],function(){
	console.log("项目建立成功");
})

// 添加监听
gulp.task("watch",function(){
	gulp.watch(["*.json", "!package.json"],["data"]);
	gulp.watch(["*.{jpg,png}"],["images"]);
	gulp.watch(["index.scss"],["scss"]);
	gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
	gulp.watch(["*.html"],["copy-html"]);
})
// 启动服务器
// 下载插件
//引入
const connect = require("gulp-connect");

// 启动服务器
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
})

// 设置默认任务
 gulp.task("default",["watch","server"]);