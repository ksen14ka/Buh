jQuery(function($) {
	var hash = window.location.href.split('#')[1];
	if ( location.hash ) {
		var hash = location.hash;
		hash = hash.substr(1);
		if ( $('.' + hash).length ) {
			$('.' + hash).show().siblings().hide();
			$(".textwidget ul.tabs-nav li").removeClass('current-tab');
			$("a[href='#" + hash + "']").parent('li').addClass('current-tab');
		}
		else {
			$(".textwidget ul.tabs-nav li:first-child").addClass('current-tab');
		}
	}
	$(".textwidget ul.tabs-nav li a").click( function(e) {
		var href = $(this).attr('href');
		hash = href.substr(1);
		$(".textwidget ul.tabs-nav li").removeClass('current-tab');
		$(this).parent('li').addClass('current-tab');
		$("div." + hash).show().siblings().hide();
		return false;
	});
	$(".widget ul.menu li.menu-item-has-children > a").click( function(e) {
		$(this).toggleClass('opened').siblings('ul').toggle();
	        e.preventDefault();
	});

	$('.single #text-2').before('<div id="toggle-menu-list">Рубрикатор</div>');
	$('#toggle-menu-list').on('click', function() {
		$('.single #text-2').toggle();
		$(this).toggleClass('opened');
	});

	$('.widget ul.sub-menu li.current-menu-item a').css('font-weight', 'bold').parents('ul').show(); // Bela

	$('.toc_widget_list li li').addClass('toc-child-li');
	$('.toc_widget_list li li').parent().parent().addClass('toc-has-children');
	$('.toc-has-children').prepend('<i></i>');
	$('.toc_widget_list .toc-has-children i').on('click', function() {
		$(this).parent().children('ul').toggle();
		$(this).toggleClass('opened');
	});


	$('#toc-widget-3 .toc_widget_list').wrap('<div class="scrollbar-inner"></div>');
	$('#toc-widget-3 .toc_widget_list').addClass('nav');

	function setToc3Height() {
		$('#toc-widget-3 .scrollbar-inner').scrollbar();
		var toc3Height = $(window).height() - 100;
		$('#toc-widget-3 .scrollbar-inner').height(toc3Height);
	}
	
	setToc3Height();
	
	$(window).on('resize', function() {
	  setToc3Height();
	});

	$('body').scrollspy({ target: '#toc-widget-3' });
});


jQuery(document).ready(function($) {
	// $('#custom_html-17 .custom-html-widget').append('<i class="btn-cat-arrow"></i>');
	$('#custom_html-17 .custom-html-widget .btn_cat_buh').after('<i class="btn-cat-arrow btn_cat_arrow_buh"></i>');
	$('#custom_html-17 .custom-html-widget .btn_cat_zup').after('<i class="btn-cat-arrow btn_cat_arrow_zup"></i>');
	// $( "<i class="btn-cat-arrow"></i>" ).insertAfter( "#custom_html-17 .custom-html-widget .button-сategory" );

	// $('.btn-cat-arrow').on('click', function() {
	// 	$(this).toggleClass('active');
	// 	$('#custom_html-16').toggle(); 
	// });

	$('.btn_cat_arrow_buh').on('click', function() {
		$(this).toggleClass('active');
		$('.cat_menucontent.cat_menucontent_buh').toggle();
	});
	$('.btn_cat_arrow_zup').on('click', function() {
		$(this).toggleClass('active');
		$('.cat_menucontent.cat_menucontent_zup').toggle();
	});

	$('.art-marker').find('li').prepend('<i class="fa fa-bars"></i>');
});

jQuery(function($) {
	var hash = window.location.href.split('#')[1];
	$(".do_login").click( function(e) {
		$("#login-popup").fadeIn('fast');
		e.stopPropagation();
		$("#login-popup-login").css("display", "block");
		$("#login-popup-register").css("display", "block");
		return false;
	});
	$(".do_login_comment").click( function(e) {
		$("#login-popup").fadeIn('fast');
		e.stopPropagation();
		$("#login-popup-login").css("display", "block");
		$("#login-popup-register").css("display", "block");
		return false;
	});
	$(".do_login_log").click( function(e) {
		$("#login-popup").fadeIn('fast');
		e.stopPropagation();
		$("#login-popup-login").css("display", "block");
		$("#login-popup-register").css("display", "none");
		return false;
	});
	$(".do_login_reg").click( function(e) {
		$("#login-popup").fadeIn('fast');
		e.stopPropagation();
		$("#login-popup-login").css("display", "none");
		$("#login-popup-register").css("display", "block");
		return false;
	});
	$(".log-popup-h5sml-log a").click( function(e) {
		$("#login-popup-login").css("display", "none");
		$("#login-popup-register").css("display", "block");
		return false;
	});
	$(".log-popup-h5sml-reg a").click( function(e) {
		$("#login-popup-register").css("display", "none");
		$("#login-popup-login").css("display", "block");
		return false;
	});

	$("#login-popup-close").click( function(e) {
		$("#login-popup").fadeOut('fast');
	});

	$('body').on('DOMNodeInserted', function (e) {
		if ( $(e.target).hasClass("imgl") ) {
			$(e.target).append('<div class="imgl-zoom"></div>');
			$('body').append('<div class="imgl-overlay"></div>');
		}
	});
	$('body').on('click', '.imgl-zoom', function() {
		var $imgl = $(this).parent(".imgl");
		var $img = $imgl.find('.imgl-img img');
		if ( $imgl.hasClass('zoomed') ) {
			$imgl.removeClass('zoomed')
			     .css({position:'', width:'', height:'', top:'', left:'', maxWidth:'', maxHeight:'', zIndex:''})
			$img.css({maxWidth:'',maxHeight:''});
			$('.imgl-overlay').hide();
		}
		else {
			$imgl.attr('data-width', $imgl.width())
			     .attr('data-height', $imgl.height())
			     .css({position:'fixed',  zIndex: 9999})
			     .addClass('zoomed');
			$img.css({maxWidth:$(window).width() - 64, maxHeight:$(window).height() - 64});
			var top = ($(window).height() - $imgl.outerHeight()) / 2;
	                var left = ($(window).width() - $imgl.outerWidth()) / 2;
			$imgl.css({left:left, top:top})
			$('.imgl-overlay').show();
		} 
		window.dispatchEvent(new Event('resize'));
		return false;
	});

	$('.textwidget .tabs > ul > li').on('click', function() {
		$('.textwidget .tabs > ul > li').each(function(i, el) {
			if ($(el).attr('aria-expanded') === 'true') {
				var date = new Date();
				var minutes = 10;
				date.setTime(date.getTime() + (minutes * 60 * 1000));
				$.cookie('activeTab-textwidget', i, { expires: date });
			}
		});
	});

	$( ".textwidget .tabs" ).tabs({
	  active: $.cookie('activeTab-textwidget')
	});

	$('.archive-tabs .tabs > ul > li').on('click', function() {
		$('.archive-tabs .tabs > ul > li').each(function(i, el) {
			if ($(el).attr('aria-expanded') === 'true') {
				var date = new Date();
				var minutes = 10;
				date.setTime(date.getTime() + (minutes * 60 * 1000));
				$.cookie('activeTab-archive', i, { expires: date });
			}
		});
	});

	$( ".archive-tabs .tabs" ).tabs({
	  active: $.cookie('activeTab-archive')
	});

});


jQuery(function($) {
	var hash = window.location.href.split('#')[1];
	$(".ask_question").click( function(e) {
		//$("#ask-popup").fadeIn('fast');
		$("#ask-popup").addClass('active');
		e.stopPropagation();
		return false;
	});
	$(".sml-header-ask").click( function(e) {
		//$("#ask-popup").fadeIn('fast');
		$("#ask-popup").addClass('active');
		e.stopPropagation();
		return false;
	}); 
	$(".header-ask").click( function(e) {
		//$("#ask-popup").fadeIn('fast');
		$("#ask-popup").addClass('active');
		e.stopPropagation();
		return false;
	}); 
	// $(".activity-feed-container").on("click", "#menu-activityrubrikator li.rubrikator-ask a", function(e) {
	// 	e.stopPropagation();
	// 	$("#ask-popup").fadeIn('fast');
	// 	return false;
	// });

	$("#ask-popup-close").click( function(e) {
		//$("#ask-popup").fadeOut('fast');
		$("#ask-popup").removeClass('active')
	});
	if ( location.hash ) {
		var hash = location.hash;
		var hash = hash.substr(1);
		if ( $('.' + hash).length ) {
			$('.' + hash).show().siblings().hide();
			$(".textwidget ul.tabs-nav li").removeClass('current-tab');
			$("a[title='" + hash + "']").parent('li').addClass('current-tab');
		}
	}
});

// jQuery(function($) {
// 	$('#carousel-comment').carousel({
// 	  interval: 1000; 
// 	});
// });

jQuery(function($) {
	$(".like-news > h4.visible-xs").on('click', function() {
		$(".like-news .tabs > ul").addClass('like-news-active-tabs');
		$('ul.like-news-active-tabs').toggle();
	});
	$(".like-news .tabs > ul li").on('click', function() {
		$('ul.like-news-active-tabs').toggle();
	});
});


//test
jQuery(function($) {
	$('.fields_calculator input:radio[name="field1"]').change(function(){
	    if($(this).val() == 'company') {
	       $('.fields_calculator .field2_company').css('display', 'block');
	       $('.fields_calculator .field2_ip').css('display', 'none');
	    }
	    else {
	       $('.fields_calculator .field2_company').css('display', 'none');
	       $('.fields_calculator .field2_ip').css('display', 'block');
	    }
	});
});

jQuery(function($) {
$("#activete_phone .phone").attr("placeholder", "+7 (___) ___-__-__");
$("#personal_data .phone").attr("placeholder", "+7 (___) ___-__-__");
});


jQuery(function($) {
	$(".search_in_type legend").click( function(e) {
		$(this).toggleClass('search_in_type_opened');
		$(".search_in_type > div").toggleClass('search_in_type_divopened');
		//$(".search_in_type > div").toggle('');
	});
});

jQuery( document ).ready( function( $ ){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 68){
			$('body > header').addClass("sml-header");
			$('#wpadminbar').css('display', 'none');
			$('#page').addClass("scroll-page");
		}
		else{
			$('body > header').removeClass("sml-header");
			$('#wpadminbar').css('display', 'block');
			$('#page').removeClass("scroll-page");
		}

	});
});

jQuery( document ).ready( function( $ ){
	// if ($('#head-notice').html().trim() !== '') {
	// 	console.log($('#head-notice').firstChild);
	// 	//$('.activity-feed-container').addClass("headnoticetop"); 
	// }
	// console.log(document.getElementByID("head-notice")[0].textContent);
	// if(document.getElementByID("head-notice")[0].textContent == "") {
	// 	document.getElementByID("main_block")[0].style.display = "none";
	// }
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$('.activity-feed-container').addClass("activity-scroll");
			$('#wpadminbar').css('display', 'none');
			$('.panelleftmenu').addClass("panelleft-scroll");
			$(".panelleftmenu.panelleft-scroll").height( $(window).height() - $("body > header.sml-header").innerHeight() );
		}
		else{
			$('.activity-feed-container').removeClass("activity-scroll");
			$('#wpadminbar').css('display', 'block');
			$('.panelleftmenu').removeClass("panelleft-scroll");
			$(".panelleftmenu").height( $(window).height() - $("body > header").innerHeight() - parseInt($(".main-content-area").css( "margin-top")) );
		}
	});
});

jQuery( document ).ready( function( $ ){
    if($(".site").children(".activity-feed-container").length > 0 || $("body").children(".activity-feed-container").length > 0){
		$('body > header').addClass("activity-pad");
		$('.site-content').addClass("activity-pad");
		$('#footer .social-net').addClass("activity-pad");
		$('#footer .foot_links').addClass("activity-pad");
		$('#footer .foot_main').addClass("activity-pad");
    }
});

jQuery(function($) { 
  $(".activity-feed-container").css('top', $("body > header").height() + $("#head-notice").height() + $("#wpadminbar").height() + "px");
  $(".panelleftmenu").css('top', $("body > header").height() + $("#head-notice").height() + $("#wpadminbar").height() + "px");
  $( window ).resize(function(){
    $(".activity-feed-container").css('top', $("body > header").height() + $("#head-notice").height() + $("#wpadminbar").height() + "px");
    $(".panelleftmenu").css('top', $("body > header").height() + $("#head-notice").height() + $("#wpadminbar").height() + "px");
  });
});  


jQuery(document).ready(function($){
	var paramcookie = 'popupvideo';
	if( $("#popupvideo").data("paramcookie") != undefined ){
		paramcookie += $("#popupvideo").data("paramcookie");
		console.log('2 paramcookie = ', paramcookie);
	} 

	if ($.cookie(paramcookie) != 'collapsed') {
		$('#popupvideo').addClass('active');
	}

	$("#popupvideo-close").click( function(e) {
		$.cookie(paramcookie, 'collapsed', { expires: 60, path: '/' });
		$("#popupvideo").fadeOut('fast');	
	});
	$("#popupvideo .popupvideo-content > div").click( function(e) {
		$.cookie(paramcookie, 'collapsed', { expires: 60, path: '/' });
		$("#popupvideo").fadeOut('fast');
	});
	$("#popupvideo .popupvideo-footer > span").click( function(e) {
		$.cookie(paramcookie, 'collapsed', { expires: 60, path: '/' });
		$("#popupvideo").fadeOut('fast');
	});
}); 


// jQuery(document).ready(function($){
// 	var othertags = $('.other-tags .other-tag').length;
// 	var activetags = $('.other-tags .other-tag.active').length;
// 	console.log('other-tag = ' , othertags);
// 	console.log('other-tag.active = ' , activetags);
// 		var tag = '.other-tag:nth-child(' + (activetags + 10) + ')';
// 	if((othertags - activetags) > 10) {
// 		$(tag).after($('<div class="other-tag hidden-tags"></div>'));
// 		$(".other-tags .other-tag.hidden-tags").click( function(e) {
// 			$(".other-tag:nth-child(10) ~ .other-tag").css('display', 'block');
// 			$(".other-tags .other-tag.hidden-tags").css('display', 'none');
// 		});
// 	}
// 	$('.other-tag.reset').after($('<div class="other-tag divider"> </div>'));

// }); 

jQuery(document).ready(function($){
	var hideafter = 10;
	var othertags = $('.other-tags .other-tag').length;
	var activetags = $('.other-tags .other-tag.active').length;
	var resettag = 1;
	console.log('other-tag = ' , othertags);
	console.log('other-tag.active = ' , activetags);
	var tag = '.other-tag:nth-child(' + (activetags + hideafter) + ')';
	$(tag + " ~ .other-tag").css('display', 'none');
	if((othertags - activetags - resettag) > hideafter) {
		$(tag).after($('<div class="other-tag hidden-tags"></div>'));
		$(".other-tags .other-tag.hidden-tags").click( function(e) {
			$(tag + " ~ .other-tag").css('display', 'block');
			$(".other-tags .other-tag.hidden-tags").css('display', 'none');
		});
	}
	$('.other-tag.reset').after($('<div class="other-tag divider"> </div>'));

}); 


jQuery(document).ready( function($) {
  $(".lib-menu .theme > ul").parent().addClass('fold');
  $(".lib-menu .theme span").click( function(e) {
  	if($(this).next( "ul" ).length > 0) {
	    if ( $(this).parent().hasClass('fold') ) {
	      $(this).parent().removeClass('fold').addClass('unfold').find('ul').slideDown();
	    } else {
	      $(this).parent().removeClass('unfold').addClass('fold').find('ul').slideUp();
	    }
    }
  })

  $(".theme .subtheme").click( function(e) {
  	$(this).closest('.theme').siblings('.theme').find('.subtheme').removeClass('active').children('.nav-link').attr("aria-expanded","false");
  })
});