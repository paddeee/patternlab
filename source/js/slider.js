
jQuery(document).ready(function ($) {

	var touchEvents = function() {

		var bool;

		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		}
		return bool;
	};

	var sliderOptions = {
		$AutoPlay: false,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$ThumbnailNavigatorOptions: {
			$Class: $JssorThumbnailNavigator$,
			$Cols: 10,
			$SpacingX: 8,
			$SpacingY: 8,
			$Align: 360
		}
	};

	var $slider = document.querySelector('#Slider');
	var $sliderArrowsContainer = document.querySelector('#SliderArrowsContainer');

	// Hide navigation arrows if viewing on touch screen device

	if (touchEvents()) {
		$sliderArrowsContainer.classList.add('is-hidden');
	}

	if ($slider) {

		var slider = new $JssorSlider$("Slider", sliderOptions);

		function ScaleSlider() {
			var refSize = slider.$Elmt.parentNode.clientWidth;
			if (refSize) {
				refSize = Math.min(refSize, 19200);
				slider.$ScaleWidth(refSize);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}
		ScaleSlider();
		$(window).bind("load", ScaleSlider);
		$(window).bind("resize", ScaleSlider);
		$(window).bind("orientationchange", ScaleSlider);
		//responsive code end
	}
});