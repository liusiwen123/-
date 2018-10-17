// 注册页面js特效
define(["jquery"],function($){
	function register (){
		$(function(){
			// 1.手机号
			$('.input1').blur(function(){
				var oInpt2 = $('.input1').val();
				if(!oInpt2){
					$('.dl1 .div2 .p11').html("请输入手机号");
					$('.dl1 .div2 .icon-jianhao').css('display' ,'block');
				}else if(oInpt2.length != 11){
					$('.dl1 .div2 .p11').html("请填写正确的手机号");
			
				}else{
					$('.dl1 .div2 .p11').html("输入正确");
				}	
			})

			// 2.验证码
			$('.dl3 .div-right').html(textCode(4));
			$('.dl3 .div-right').click(function(){
				$('.dl3 .div-right').html(textCode(4));
			})
			//当输入框失去焦点验证验证码是否成功
			$('#input22').blur(function(){
				var str1 = $('.dl3 .div-right').html(); 
				var str2 = $('#input22').val();
				//将生成的验证码转为小写		
				str1 = str1.toLowerCase();
				//将输入的字符全部转为小写
				str2 = str2.toLowerCase();
				
				//判断验证码是否正确
				if (str2 == str1) {
					$('.dl3 .div3 .p222').html("输入正确");
				}else{
					$('.dl3 .div3 .p222').html("请输入验证码");
					$('.dl3 .div3 .icon-jianhao').css('display' ,'block');
				}
			})
			
			//验证码函数
			function textCode(num){
				var arr = [];
				for (var i = 0; i < num; i++) {

					var newArr = parseInt(Math.random() * 100);
					if (newArr >= 0 && newArr <= 9) {
						arr.push(newArr);
					}else if (newArr >= 65 && newArr <= 90) {
						var str = String.fromCharCode(newArr);
						arr.push(str);
					}else if (newArr >= 17 && newArr <= 42) {
						str = String.fromCharCode(newArr + 80);
						arr.push(str);
					}else{
						i--;
					}
					
				}
				return arr.join("")
			}



			// 3.短信验证码
			$('#input23').blur(function(){
				var oInpt3 = $('#input23').val();
				if(!oInpt3){
					$('.dl33 .div23 .p33').html("请输入短信验证码");
					$('.dl33 .div23 .icon-jianhao').css('display' ,'block');
					// $('.dl1 .div2 i').style('display' ,'block');
				}else{
					$('.dl33 .div23 .p33').html("输入正确");
				}	
			})

			// 4.密码
			$('.input34').blur(function(){
				//1、如果我们在输入的时候，不小心输入了空格，将空格去掉	
				var oValue3 = $('.input34').val().replace(/ /ig,"");
				$('.input34').val = oValue3;	
				//2、如何对用户名进行验证
				if(!oValue3){
					$(".dl34 .div2 .p44").html("请输入密码");
					$('.dl34 .div2 .icon-jianhao').css('display' ,'block');
				}else if(oValue3.length > 18 || oValue3.length < 6){
					$(".dl34 .div2 .p44").html("长度应为6~25个字符");
				}else{
					$(".dl34 .div2 .p44").html("输入正确");

				}
			})


			// 5.确认密码
			$('.input44').blur(function(){
				var oValue4 = $('.input44').val();
				if(!oValue4){
					$(".dl44 .div2 .p45").html("请输入确认密码");
					$('.dl44 .div2 .icon-jianhao').css('display' ,'block');
				}else if(oValue4 != $('.input34').val()){		
					$(".dl44 .div2 .p45").html("请输入确认密码");
				}else{
					$(".dl44 .div2 .p45").html("输入正确");
				}
			})

			// 6.确认并注册
			$('.form .p2 .input3').click(function(){
				// alert(1);
				$.ajax({
					type:"post",
					url:'http://localhost/gityougo/yougoushishang/dist/php/register.php',
					data:'mobile=' + $('#mobile_').val() + '&password=' + $('#password_').val(),
					success:function(data){
						// console.log(data)
						$('.reg_p').html('注册成功')
					},
					error:function(msg){
						alert(msg);
					}
				})
			})
		














		})
	}
	return{
		register:register
	}
})