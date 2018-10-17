// 登录页面js特效
define(["jquery"],function($){
	function login (){
		$(function(){
			// 1.手机号/账号
			$('.input1').blur(function(){
				var oInpt2 = $('.input1').val();
				if(!oInpt2){
					$('.dl1 .div2 .p11').html("请输入账号");
					$('.dl1 .div2 .icon-jianhao').css('display' ,'block');
				}else if(oInpt2.length != 11){
					$('.dl1 .div2 .p11').html("请填写正确的账号");
			
				}else{
					$('.dl1 .div2 .p11').html("输入正确");
				}	
			})

			// 2.密码
			$('.input2').blur(function(){
				//1、如果我们在输入的时候，不小心输入了空格，将空格去掉	
				var oValue3 = $('.input2').val().replace(/ /ig,"");
				$('.input2').val = oValue3;	
				//2、如何对用户名进行验证
				if(!oValue3){
					$(".dl2 .div2 .p44").html("请输入密码");
					$('.dl2 .div2 .icon-jianhao').css('display' ,'block');
				}else if(oValue3.length > 18 || oValue3.length < 6){
					$(".dl2 .div2 .p44").html("长度应为6~25个字符");
				}else{
					$(".dl2 .div2 .p44").html("输入正确");

				}
			})




			// 3.验证码
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
					$('.dl3 .div3.icon-jianhao').css('display' ,'block');
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


			// 4.点击登录
			$('.form #p45 .input3').click(function(){
				// alert(1);
				$.ajax({
					type:"post",
					url:'http://localhost/gityougo/yougoushishang/dist/php/login.php',
					data:'mobile=' + $('#mobile_').val() + '&password=' + $('#password_').val(),
					success:function(data){
						// console.log(data)
						var arr = JSON.parse(data);
						// console.log(arr);
						if(arr == 100000){
							$('.ent_dc').html('密码错误')
						}else if(arr == 200000){
							$('.ent_dc').html('邮箱不存在')
						}else{
							$('.ent_dc').html('登录成功')
							$.cookie('yougo', `[{yougoid:${$('#emil_').val()},id:"${arr}"}]`, {expires: 7});
						}
						
					},
					error:function(msg){
						alert(msg);
					}
				})
			})
		





		})
	}
	return{
		login:login
	}
})