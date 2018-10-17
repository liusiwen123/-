// 商品列表页
console.log("项目建立成功");
/*
	管理我们list.html引入的所有模块(商品列表页)
*/

// 配置模块路劲
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"list":"list"
		
	}
})


//引入自己创建的模块
require(["list"],function(list){
	list.list();
})