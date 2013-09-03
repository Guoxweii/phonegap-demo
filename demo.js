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
			
		}
	};
	
	window.iscrollWidget = iscrollWidget;
})()