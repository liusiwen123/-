// 登录页面
console.log("项目建立成功");
/*
	管理我们login.html引入的所有模块(登录页面)
*/

// 配置模块路劲
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"login":"login"
		
	}
})


//引入自己创建的模块
require(["login"],function(login){
	login.login();
})