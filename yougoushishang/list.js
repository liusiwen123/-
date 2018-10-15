// 商品列表页js特效
define(["jquery"], function($) {
	function list (){
		$(function(){
	// 1.导航条部分移入移出
			//添加移入移出
				// mouseenter  移入  JQ独有
				// mouseleave  移出
			var aLis = $(".ul1").find("li");
			// var oDiv = $(".cot2-1").find("div");
			aLis.on("mouseenter",function(){
				$(".title").css({
					display:'block',

				})
			});
			
			// 	$("#content2").on("mouseenter",function(){
			// 		$(".div1").css({
			// 			display:'none'
			// 		})
			// 	})	
			// });
			aLis.on("mouseleave",function(){
				$(".title").css({
			 		display:'none'
				})
			});

	// 2.内容商品部分
	// ajax 加载数据
			$.ajax({
				url:'data/data.json',
				type:'GET',
				success:function(res){
					// alert(res);
					// 将数据通过循环遍历，添加到页面上
					var html = "";
					
						html += `<li>
		    						<a href="description.html">
		    					   	 	<img src = "images/shuangjianbao1.jpg" alt=""/>
		    					    	<h3>限时抢￥169</h3>
		    					   	 	<p>Teenmix/天美意夏黑色织物时尚休</br>闲简约学院风女双肩包17C10BX7</p>
		    						</a>
		    						<span>￥169</span>
		    						<i>￥368</i>
	    				   		</li>

	    				   		<li>
		    						<a href="description.html">
		    					    	<img src = "images/shuangjianbao2.jpg" alt=""/>
		    					    	<h3>限时抢￥299</h3>
		    					    	<p>BASTO/百思图冬季专柜同款布面/</br>牛皮时尚休闲男双肩包8256-DX7</p>
		    						</a>
		    						<span>￥299</span>
		    						<i>￥1299</i>
	    				    	</li>


	    				    	<li>
		    						<a href="description.html">
		    					    	<img src = "images/shuangjianbao3.jpg" alt=""/>
		    					    	<h3>限时抢￥299</h3>
		    					    	<p>BASTO/百思图冬季专柜同款布面/</br>牛皮时尚休闲男双肩包8221DDX7</p>
		    						</a>
		    						<span>￥299</span>
		    						<i>￥1299</i>
	    				   		</li>


	    				   		<li>
		    						<a href="description.html">
		    					   	 	<img src = "images/shuangjianbao4.jpg" alt=""/>
		    					    	<h3>限时抢￥298</h3>
		    					    	<p>Teenmix/天美意夏绿色织物时尚迷</br>彩学院风中性双肩包62193BX7</p>
		    						</a>
		    						<span>￥298</span>
		    						<i>￥298</i>
	    				    	</li>`;
						
					$("#main .goods_box ul").html(html);
				},
				error:function(msg){
					alert(msg);
				}




			})














		})
	}
	return{
		list: list
	}
})
