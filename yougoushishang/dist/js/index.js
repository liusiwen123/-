define(["jquery"], function($) {
	function main (){
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

	// 2.banner图
			// 加载数据
			$.ajax({
				url:'data/banner.json',
				type:"GET",
				success:function(res){
					// alert(res);
					// 将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0 ;i < res.length;i++){
						html += `<li>
									<a href="">
										<img src="${res[i].img}" alt="">
										<div id = "${res[i].id}"></div>
									</a>
								</li>`;
					}
					$(".content .banner ul").html(html);
				},
				error:function(msg){
					alert(msg);
				}

			})


			var oBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLis = oUl.find("li");
			// 设置iNow,代表当前显示图片是下标
			var iNow = 0;
			var timer = null;

			oBtns.click(function(){
				iNow = $(this).index();	
				// alert(this);
				tab();
			})

			// 封装函数，用来切换图片
			function tab(){
				// 点击按钮时切换
				// 1.先让当前被点击的按钮为active
				oBtns.attr("class","").eq(iNow).attr("class","active");
				
				//动画之前判断
				// 最后一张图片，active的按钮也是下标0
				if(iNow == 5){
					oBtns.eq(0).attr("class","active");
				}



				// 2.切换图片
				oUl.animate({
					left:-1326 * iNow
				},1000,function(){
					if(iNow == 5){
						oUl.css("left",0);
						 iNow = 0;
					}
				});
			}
			timer = setInterval(timerInner,2000);
			//添加自动滚动
			function timerInner(){
				iNow++;
				document.title = iNow;
				tab();
			}

			// 添加移入移出，移入时停止，移出继续
			$("#play").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(timerInner,2000);
			})
	// 3.新品推荐部分
			// 加载数据
			$.ajax({
				url:'data/xinpin.json',
				type:"GET",
				success:function(){
					// alert(res);
					// 将数据通过循环遍历，添加到页面上
					// console.log(res.length);
					var html = "";
						html += `<div class = "div1-1">
									<a href=""><img src="images/xinpin1.jpg" alt="" id = "img1"></a>
									<dl>
										<img src="images/tu12.png" alt="" id = "img2">
										<dt><a href="">帅气 短靴</a></dt>
										<dd>￥1399</dd>
									</dl>
								</div>
								<div class = "div1-2">
									<a href=""><img src="images/xinpin2.jpg" alt="" id = "img1"></a>
									<dl>
										<img src="images/tu7.png" alt="" id = "img2">
										<dt><a href="">休闲 短靴</a></dt>
										<dd>￥1199</dd>
									</dl>
								</div>
								<div class = "div1-3">
									<a href=""><img src="images/xinpin3.jpg" alt="" id = "img1"></a>
									<dl>
										<img src="images/tu4.png" alt="" id = "img2">
										<dt><a href="">简约 短靴</a></dt>
										<dd>￥1199</dd>
									</dl>
								</div>
								<div class = "div1-4">
									<a href=""><img src="images/xinpin4.jpg" alt="" id = "img1"></a>
									<dl>
										<img src="images/tu8.png" alt="" id = "img2">
										<dt><a href="">欧美 短靴</a></dt>
										<dd>￥1438</dd>
									</dl>
								</div>`;
					
					$(".content .NEW .NEW-2 .div1").html(html);
				},
				error:function(msg){
					alert(msg);
				}

			})

			// 特效部分
			// 移入时 透明度变成灰色
			var oDiv = $(".NEW-2").find(".div1").find("div");
			// var oDiv = $(".cot2-1").find("div");
			oDiv.mouseenter(function(){
				$(this).css({
					background:'#959595',

				})
			});
			// 移出时消失
			oDiv.mouseleave(function(){
				$(this).css({
			 		background:'white'
				})
			});
			
			




















		})
	}
	return{
		main: main
	}
})