// JavaScript Document

	(function ($) {
		var allContentTabs = $('.tabcontent');
		$(document).ready(function() {
			
			$('.alltablinks').on('click', function(){
				allContentTabs.show();
			});
			
			$('#tokyo').on('click', function(){
				allContentTabs.hide();
				$('#tokyoContainer').show();
			});
			
			$('#paris').on('click', function(){
				allContentTabs.hide();
				$('#parisContainer').show();
			});
			
			$('#london').on('click', function(){
				allContentTabs.hide();
				$('#londonContainer').show();
			});
			
		});
	})(jQuery);