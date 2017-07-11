define(['jquery','template','cookie'], function($,template) {
	//控制左侧导航栏的伸缩。
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});   
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
	});
    //获取输入的信息。
    var info = $.cookie('loginInfo');
    var plt= '<div class="avatar img-circle">'+
                '<img src="{{tc_avatar}}">'
            +'</div>'
            +'<h4>{{tc_name}}</h4>';
    var html = template.render(plt,info?JSON.parse(info):{});
    $(".aside .profile").html(html);
    if(!info &&location.pathname !="/" && location.pathname!="/index/login"){
        location.href="/"
    }
	
});
	