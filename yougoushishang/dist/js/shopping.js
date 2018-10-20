// 商品订单页js特效
	define(["jquery",'jquery-cookie'],function($){
		function shopping(){
			// alert(1)
				$.ajax({
					url:'data/list.json',
					success:function(arr){
						var html = ''
					for (var i = 0; i < arr.length; i++) {

						html += `<li>
		    						<a href="details.html">
		    					   	 	<img src = "${arr[i].img}" alt=""/>
		    					    	<h3>${arr[i].h3}</h3>

		    					   	 	<p>${arr[i].p}</br>闲简约学院风女双肩包17C10BX7</p>
		    						</a>
		    						<span>${arr[i].span}</span>
		    						<i>${arr[i].i}</i>
	    				   		</li>

	    				   		`
					}
					$('.goods_box ul').html(html)
					}
				})
			}
			return {
				shopping:shopping
			}
	})
		
			/***加载cookie中存储的商品***/
			
				

		



			
			
			







			


		