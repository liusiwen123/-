console.log("项目建立成功");
/*
	管理我们details.html引入的所有模块
*/
// 配置模块路劲
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"details":"details",	
	},
	//设置，模块之间的依赖关系
	shim: {
		//保证，先加载JQuery，再加载
		"jquery-cookie": ["jquery"],
	}
})


//引入自己创建的模块
require(["details"],function(details){
	details.details();
})