(function(){
	var iscrollWidget = {
		duration: 800,
		
		scroll_width: 1500,
		
		init: function(options) {
			$.extend(this, options);
			this.rePaint();
		},
		
		rePaint: function() {
			var self = this;
			$.each($(".row > .item"), function(index, item){
				var transform_value = self.scroll_width * (index-1);
				$(item).css({"-webkit-transform": "translateX(" + transform_value + "px)"});
			});
		},
		
		scroll: function(direction, url) {
			var self = this;
			$.get("_partial1.html", function(data) {
				switch(direction){
				case "left":
					$(".row > .item").last().html(data);
					$(".row > .item").first().html('').insertAfter($(".row > .item").last());
					break;
				case "right":
					$(".row > .item").first().html(data);
					$(".row > .item").last().html('').insertBefore($(".row > .item").first());
					break;
				}
				
				self.rePaint();
				
				setTimeout(function() {
					$(".row > .item").first().html("");
					$(".row > .item").last().html("");
				}, 1200)
			})
			
		},
		
		move: function(direction, url) {
			switch(direction){
			case "up":
				$.get("_partial2.html", function(data) {
					$(".move").html(data);
					$(".move").css({"top": window.pageYOffset+window.screen.availHeight});
					setTimeout(function() {
						$(".row").hide();
						// $(".move").css({"top": 0});
					}, 1200)
					
					var transform_length = -window.screen.availHeight;
					$(".move").css({"-webkit-transform": "translateY(" + transform_length + "px)"});
				})
				
				break;
			case "down":
				var transform_length = window.screen.availHeight;
				$(".move").css({"-webkit-transform": "translateY(" + transform_length + "px)"});
				$(".row").show();
				setTimeout(function() {
					// $(".move").hide();
				}, 400)
				break;
			}
		}
	};
	
	window.iscrollWidget = iscrollWidget;
})()