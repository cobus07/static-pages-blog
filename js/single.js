require(['jquery','index'],function($){
	$('[type="submit"]').hover(function(){
		$(this).css('backgroundColor','#0CC7E8');
	},function(){
		$(this).css('backgroundColor','#02D7FD');
	});
});

