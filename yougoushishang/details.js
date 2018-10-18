// 商品详情页JS特效
define(["jquery"],function($){
	function details (){
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
                const oBigBox = document.getElementById("div");				//获取小图
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


				// 4.//点击+ —
				/*var oDiv2 = $('.m-r').find('div2');

				oDiv2.click(function(){
					let num = $('.span3').attr('value');
					if(num > 1){
						$('.span3').attr('value', num - 1);
						if(num == 2){
						$('.div2 .i2').css('background-position', '0 -1390px');
						}
					}
					

				})*/
				// $('.div2').click(function(){
				// 	let num = $('.span3').attr('value');
				// 	$('.span3').attr('value', parseInt(num) + 1);
				// 	$('.div2 .i3').css('background-position', '0 -1356px');
				// })









		})
	}
	return{
		details:details
	}
})