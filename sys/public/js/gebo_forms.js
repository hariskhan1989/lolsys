/* [ ---- Gebo Admin Panel - extended form elements ---- ] */

	$(document).ready(function() {
		gebo_datepicker.init();		
		gebo_auto_expand.init();
		$('.open_modal_form').click(function(e) {
			$.colorbox({
				href: '#modal_form',
				inline: true,
				opacity: '0.2',
				fixed: true,
				scrolling: false
			});
			e.preventDefault();
		})
		
	});
	
	//* bootstrap datepicker
	gebo_datepicker = {
		init: function() {
			$('#dp1').datepicker();
			$('#dp2').datepicker();
			$('#dp_modal').datepicker();
		}
	};
	//* textarea autosize
	gebo_auto_expand = {
		init: function() {
			$('#auto_expand').autosize();
		}
	};
