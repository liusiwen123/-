console.log("项目建立成功");
/*
	管理我们details.html引入的所有模块
*/
// 配置模块路劲
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"details":"details"
		
	}
})


//引入自己创建的模块
require(["details"],function(details){
	details.details();
})