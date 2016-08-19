require(['jquery'], function($){
	//导航栏
	var $nav = $('#nav'),
	$navClose = $('.nav-close', $nav),
	$navMenu = $('.nav-menu', $nav),
	$header = $('#header'),
	$navShow = $('.nav-show', $header);
	$navShow.on('click', function(){
		$nav.animate({top: 0});
		// this.style.display = "none";
	});
	$navClose.on('click', function(){
		$nav.animate({top: -192});
		// $navShow.style.display = "block";
	});
	//导航栏字体悬浮变色
	$('#nav li').children().hover(function(){
		$(this).css({
			'color': 'blue'
		});
	},function(){
		$(this).css({
			'color': '#fff'
		});
	});
	// $('#nav .nav-close').hover(function(){
	// 	$(this).css({
	// 		'background-color': '#1B242F'
	// 	});
	// },function(){
	// 	$(this).css({
	// 		"background-color": '#fff'
	// 	});
	// });
	// projects

	$('#projects span').hover(function(){
		$(this).css("backgroundColor", "blue");
	},function(){
		$(this).css("backgroundColor", "#fff");
	});
	
	// portfolio特效

	$('#portfolio .container').hover(function(){
		$(this).children('.hover').stop().fadeIn();
		$(this).find('.pc').stop().animate({
			'width': 305,
			'marginLeft': -10,
			'marginTop': -10
		})
	},function(){
		$(this).children('.hover').stop().fadeOut();
		$(this).find('.pc').stop().animate({
			'width': 285,
			'marginLeft': 0,
			'marginTop': 0
		})
	}).on('click',function(){
		$container = $('<div id="container"></div>');
		$overLay = $('<div class="over-lay"></div>').appendTo($container);
		$layer = $('<div class="layer"></div>').appendTo($overLay);
		$layerContent = $('<div class="layer-content"></div>').appendTo($layer);
		$overLay.on('click',function(){
			$container.remove();
		})
		$container.appendTo(document.body);
	});


	// myblog 瀑布流
	function loadData(){
			$('#loading').show();
			$.getJSON('js/myblog.json', function(data){
				setTimeout(function(){
					for(var i=0; i<data.length; i++){
						var blog = data[i];
						var $minUl = getMinUl();
						$minUl.append('<li><img src="imgs/'+blog.blog_img+'" alt=""><h3>'+blog.blog_title+'</h3><span>BRUNO MARS |'+blog_comment+'</span><p>'+blog.blog_content+'</p><a class="see-more" href="#">SEE MORE</a></li>');
					}
					$('#loading').hide();
				}, 1000);
			});
		}
		loadData();

		$(window).on('scroll', function(){
			var $minUl = getMinUl();
			var scrollTop = $(window).scrollTop();
			if(scrollTop + $(window).height() >= $minUl.height()){
				loadData();
			}
		});

		function getMinUl(){
			var $minUl = $('.col').eq(0);
			for(var i=1; i<3; i++){
				if($minUl.height() > $('.col').eq(i).height()){
					$minUl = $('.col').eq(i);
				}
			}
			return $minUl;
		}
	// loading 显示
	$(window).on('scroll',function(){ 
				 $('#loading').hide();				
                if ($(window).scrollTop()>2800 && $(window).scrollTop()<3800){  
                    $("#loading").fadeIn(500);  
                   	// $('#loading').display = 'block';
                }  
                // else  
                // {  
                // 	$('#loading').hide();
                //     // $("#loading").fadeOut(500);
                //     // $('#loading').display = 'none';
                // }  
            });  

	// nav链接

	$('#nav .about').on('click', function(){
		// $(window).scrollTop(1000);
		$('body,html').animate({scrollTop: 900},500);
	});
	$('#nav .services').on('click', function(){
		// $(window).scrollTop(1000);
		$('body,html').animate({scrollTop: 1580}, 700);
	});
	$('#nav .portfolio').on('click', function(){
		// $(window).scrollTop(1000);
		$('body,html').animate({scrollTop: 2270}, 700);
	});
	$('#nav .blog').on('click', function(){
		// $(window).scrollTop(1000);
		$('body,html').animate({scrollTop: 2800}, 700);
	})
	// 回到顶部
	$(window).on('scroll',function(){  
                if ($(window).scrollTop()>100){  
                    $("#to-top").fadeIn(1000);  
                }  
                else  
                {  
                    $("#to-top").fadeOut(1000);  
                }  
            });  
            //当点击跳转链接后，回到页面顶部位置  
            $("#to-top").click(function(){  
                $('body,html').animate({scrollTop:0},500);  
                return false;  
            }); 


});


















