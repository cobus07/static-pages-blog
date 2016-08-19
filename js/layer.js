// ;(function($){
// 	$.fn.extend({

// 		layer: function(options){
// 			$container = $('<div id="container"></div>');
// 			$overLay = $('<div class="over-lay"></div>').appendTo($container);
// 			$layer = $('<div class="layer"></div>').appendTo($overLay);
// 			$layerContent = $('<div class="layer-content"></div>').appendTo($layer);
// 			$overLay.on('click',function(){
// 				$container.remove();
// 			})
// 			$container.appendTo(document.body);
// 				for(var i=0; i<options.imgData.length; i++){
// 					var img = options.imgData[i];
// 					var oImg = new Image();
// 					oImg.src = img.src;
// 					oImg.onload =function(){
// 						$container.append(oImg);
// 					}
// 				}
// 			}
// 		});
// })(jQurey);