// 注册页面
console.log("项目建立成功");
/*
	管理我们register.html引入的所有模块(注册页面)
*/

// 配置模块路劲
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"register":"register"
		
	}
})


//引入自己创建的模块
require(["register"],function(register){
	register.register();
})