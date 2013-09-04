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
				var transform_length = self.scroll_width * (index-1);
				$(item).css({"-webkit-transform": "translateX(" + transform_length + "px)"});
			});
		},
		
		scroll: function(direction, url) {
			switch(direction){
			case "left":
				$(".row > .item").last().html(this.iframeData("_partial1.html"));
				$(".row > .item").first().html('').insertAfter($(".row > .item").last());
				break;
			case "right":
				$(".row > .item").first().html(this.iframeData("_partial1.html"));
				$(".row > .item").last().html('').insertBefore($(".row > .item").first());
				break;
			}
			
			this.rePaint();
			
			setTimeout(function() {
				$(".row > .item").first().html("");
				$(".row > .item").last().html("");
			}, 1200)
			
		},
		
		iframeData: function(url) {
			return '<iframe frameborder=0 src=' + url +'></iframe>';
		},
		
		move: function(direction, url) {
			switch(direction){
			case "up":
				$(".move").html(this.iframeData("_partial2.html"));
				$(".move").css({"top": window.pageYOffset+window.screen.availHeight});
				setTimeout(function() {
					$(".row").hide();
					// $(".move").css({"top": 0});
				}, 1200)
				
				var transform_length = -window.screen.availHeight;
				$(".move").css({"-webkit-transform": "translateY(" + transform_length + "px)"});
				break;
			case "down":
				var transform_length = window.screen.availHeight;
				$(".move").css({"-webkit-transform": "translateY(" + transform_length + "px)"});
				$(".row").show();
				setTimeout(function() {
					$(".move").html('');
				}, this.duration)
				break;
			}
		}
	};
	
	window.iscrollWidget = iscrollWidget;
})()