// 商品订单页js特效
	define(["jquery"],function($){
		function shopping (){
			$(function(){
			/***加载cookie中存储的商品***/
				function shoppIng(){
					$.ajax({
						type:'get',
						url:'data/shopping.json',
						success:function(arr){
							var cookie_arr = eval($.cookie('goods'));
							for(var i = 0; i < cookie_arr.length; i++){
							$(`<!--coookie部分-->
					<div id="cartList">
						<h3>品牌：HSTYLE女装</h3>
						<ul id="brand_cart">
							<li id="rec_6953">
								<!--左1-->
								<div class="cbj_shop1">
									<div class="shop_pic">
										<a href="">
											<img src="${arr[i].img1}" alt="" />
										</a>
									</div>
									<div class="shop_name">
										 韩都衣舍2018夏装新款女装韩版宽松学生纯色打底短袖T恤DL10127喆 
									</div>
									<div class="shop_size">
										<span>颜色:${arr[i].oSp1}     尺码:${arr[i].oSp2}</span>
									</div>
								</div>
								<!--左2-->
								<div class="cbj_shop2">
									<div class="corice">
										<del>${arr[i].del}</del>
										<br />
										<span>${arr[i].oSp3}</span>
									</div>
								</div>
								<!--左3-->
								<div class="cbj_shop3">
									<span id="J_AmWeight">
										<span class="increase">+</span>
										<span class="decrease">-</span>
										<input type="text" class="text" value='1'/>
									</span>
								</div>
								<!--左4-->
								<div class="cbj_shop4">${arr[i].oSp4}</div>
								<!--左5-->
								<div class="cbj_shop5">
									<div class="middle">
										<a href="javascript:;">移入收藏夹</a>
										<br />
										<a href="javascript:;" id='cbj_sc'>删除</a>
									</div>
								</div>
								<!--左6-->
								<div class="cbj_shop6">
									<div class="middle">
										全场通用满199减20/满299减50/满399减80/满599减130！可在商品详情页内领取优惠券！
									</div>
								</div>
							</li>
						</ul>
					</div>`).appendTo($('.shopping-list');
					}
					
				}
			})
			}
			
			
			shoppIng()
			











			})


		}
		return{
			shopping:shopping
		}


	})