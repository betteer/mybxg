define(['jquery','template','cookie'], function($,template) {
	//控制左侧导航栏的伸缩。
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	console.log(1);
	$("#logout").click(function(){
		console.log(1)
		$.ajax({
          type : 'post',
          url : '/api/logout',
          dataType : 'json',
          success : function(data){
              if(data.code == 200){
				  console.log(data);
                 $.removeCookie('loginInfo',{path:'/'});
                  location.href = '/';
              }
          }
      });
	})
	
});
	