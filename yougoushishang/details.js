// 商品详情页JS特效
define(["jquery",'jquery-cookie'],function($){
	function details (){
		$(function(){
			
			add()

			sc_car();
			mis()
			// add()
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




			



			// 2.实现图片的放大缩小
			/*
			 *  一。当鼠标移入遮罩时，滑块和大图所在的盒子显示
			 *  二。当鼠标移出遮罩时，滑块和大图所在的盒子隐藏
			 *  三。在遮罩上设置鼠标移动事件，做鼠标跟随的效果---边界
			 * 	四。计算滑块在小图上的移动比例
			 * 	五。设置大图的移动距离
			 * 
			 *  
			 *  移动比例： 当前滑块的left值 / 当前滑动移动的总范围
			 * 	
	   		 */

			//获取页面所需元素
    //           //获取页面所需元素
                const oBigBox = document.getElementById("div");	
                			//获取小图
				const oSmallPic = document.querySelector('.small_pic');
				//获取遮罩
				const oMark = document.querySelector('.mark');
				//获取滑块
				const oFloat = document.querySelector('.float_layer');
				//获取大图盒子
				const oBigPic = document.querySelector('.big_pic');
				//获取大图
				const oBigImg = document.querySelector('.big_pic img');

				//一、给遮罩添加移入事件，滑块和大图所在的盒子显示
				$(".mark").mouseenter(function(){
					$(".float_layer").css('display','block');
					$(".big_pic").css('display','block');
				});
				//二、给遮罩添加移出事件，滑块和大图所在的盒子隐藏
				$(".mark").mouseleave(function(){
					$(".float_layer").css('display','none');
					$(".big_pic").css('display','none');
				});


				//三、给遮罩添加移动事件，实现滑块跟随并设置边界
				// var oMark = $('.small_pic').find('.mark');
				// var oFloat = $('small_pic').find('.float_layer');
				// var oBigPic = $(".m-c").find('.div').find('.big_pic');
				oMark.onmousemove = function(evt){
					var e = evt || window.event;
					let left = e.pageX - oBigBox.offsetLeft - oMark.offsetLeft - oFloat.offsetWidth / 2;
					let top = e.pageY - oBigBox.offsetTop - oMark.offsetTop - oFloat.offsetHeight / 2;
					//设置边界
					if(left <= 0){
						left = 0;
					}else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
						left = oMark.offsetWidth - oFloat.offsetWidth;
					}
					if(top <= 0){
						top = 0;
					}else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
						top = oMark.offsetHeight - oFloat.offsetHeight;
					}
					oFloat.style.left = left + 'px';
					oFloat.style.top = top + 'px';
					
					
					//滑块在小图的移动比例
					 let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
					let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);

					// //设置大图的坐标值
					oBigImg.style.left = - pX * (oBigImg.offsetWidth - oBigPic.offsetWidth) + 'px';
					oBigImg.style.top = - pY * (oBigImg.offsetHeight - oBigPic.offsetHeight) + 'px';
				}
			


				// 3.实现小图片到大图片的切换





				/****4.点击加减号 库存数量加减******/
					//数量增加	
					// 一、点击加号，span中数量增加，右侧加载出来的商品数量也增加
				function add(){
					 // $('.i2').click(function(){
				// 	val--
				// 	$('.num_text input').val(val)
				// 	var sc_arr = eval($.cookie("goods"));
				// 	var sum = sc_arr[0].num - 1
				// 	$('.sc_goodsNum').html("商品数量:"+ sum)
				// })

					$('.i3').click(function(){
						// oVal为加减号中间的数字
						var oVal = Number($('.span3').html())
						// 点击加号，数量增加
						oVal++;
					// 赋值
						$('.span3').html(oVal)

						var sc_arr = eval($.cookie("goods"));
					// sum为小车中的数字增加的值
						var sum = sc_arr[0].num + 1;
					// sum2为右侧加载出来的商品数量
						var sum2 = sum + oVal - 2
						$('.sc_num').html(sum2 )	
					})
				
				}
				// 二、给小车中数量进行赋值
				function showNum(){
					var num = $('.sc_num').html()
					$(".sc_goodsNum").html("商品数量" + num)
				}



				// 数量减少
			function mis(){
				
				$('.i2').click(function(){
					var goodval = Number($('.span3').html());
					goodval--;
					$('.span3').html(goodval);
					

					var sc_arr = eval($.cookie("goods"));
				 	var minus = sc_arr[0].num - 1 + goodval;

					$('.sc_num').html(minus)
				 })
					
					
			}
				

				

			// 5.点击加入购物袋,将商品信息存储到cookie当中
			// 创建cookie
			$('.plus').click(function(){
				// alert(1);
				//获取到当前加入购物车按钮所在的商品id

				// attr获取行间属性
				var id = $(".section1").attr('id');

				//1、判断是否第一次添加cookie
				var first = $.cookie("goods") == null ? true : false;

				if(first){
					$.cookie('goods', `[{id:${id},num:1}]` 	, {expires: 7});
				}else{

				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');

				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});
				}
				}
				
				 
				sc_car();

			})


			// 购物车数字增加减少
			function sc_car(){
				var str = $.cookie("goods");
				if(str){
					var arr = eval(str);
					var sum = 0;
					for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
					}
				$(".sc_num").html(sum);
				 // $(".sc_num").css('display', 'block');
				 }
				 // else{
				 // $(".sc_num").css('display', 'none');
				 // }
				
			}
			
			// 右侧购物车添加移入移出
			$(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0,
					zIndex:10000
				})
				sc_msg()
				showNum()
			});
			
			
			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -270,
					zIndex:10000
				})
			});



			
			
		//显示购物车内添加的商品
		 // 封装函数将
		function sc_msg(){
			// 获取小车内的数量
			var oSum = $('.sc_num').html();

						var html = '';
					$(".sc_right ul").html("");

					// 获取cookie内存储的商品信息
					var cookie_arr = eval($.cookie('goods'));
						$(`<li>
				<div class = "sc_goodsPic">
					<img src="../images/x1.jpg" alt="">
				</div>
				<div class = "sc_goodsTitle">
					<p>这是双运动鞋</p>
				</div>
				<div class = "sc_goodsBtn">购买</div>
				<div class = "sc_goodsNum">商品数量:${cookie_arr[0].num}</div>
			</li>`).appendTo($(".sc_right ul"));
				// $('.sc_goodsNum').html('商品数量:'+oSum)
		
		}

		

		// 悬浮层
			// 1点击加入购物袋，弹出悬浮层
			$('.plus').click(function(){
				$('#good_Car').css('display','block');
			})

			// 2关闭悬浮层
			$('.good_toplose').click(function(){
				$('#good_Car').css('display','none');
			})
					
			
					
					
					
			
					
					
					







		})
	}
	return{
		details:details
	}
})