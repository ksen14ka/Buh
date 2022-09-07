jQuery(document).ready(function($){

	console.log('$.cookie(activity-feed) = ', $.cookie('activity-feed'));

/*
	if ( $.cookie('activity-feed') == undefined ) {
		var section = 'rubrikator';
		get_activity_feed(section);
	} else {
		var section = $.cookie('activity-feed');
	}
*/
	var section = 'rubrikator'; /* всегда! */


	// if ( ( $.cookie('activity-feed-collapsed') == 'collapsed' && ( window.innerWidth < 1200 ) ) || isMobile() || ( window.innerWidth < 1200 ) ) {
	// 	$('.activity-feed-container').addClass('collapsed');
	// }

	if ( window.innerWidth < 1200 ) {
		$('.activity-feed-container').addClass('collapsed');
	}

	$('.activity-feed-container').show();

	if ( $.cookie('activity-feed-collapsed') != 'collapsed' && section != null ) {
		$('.activity-feed-' + section).addClass('active');
		get_activity_feed(section);
	}
	get_activity_feed(section);


	$('.activity-feed-collapse').click( function() {
		$('.activity-feed-container').addClass('collapsed');
		$.cookie('activity-feed-collapsed', 'collapsed', { expires: 1, path: '/' });
	});

	$('.activity-feed-expand').click( function() {
		$('.activity-feed-container').removeClass('collapsed');
		$.cookie('activity-feed-collapsed', 'expanded', { expires: -1, path: '/' });
		if ( $('.activity-feed-content').text().length == 0 )  {
			get_activity_feed(section);
		}
	});

	$('.activity-feed-comments').click( function() {
		if ($(this).hasClass('active') && !$('.activity-feed-container').hasClass('collapsed')) {
			//get_activity_feed('all');
		}
		else {
			get_activity_feed('comments');
		}
	});

	$('.activity-feed-questions').click( function() {
		if ($(this).hasClass('active') && !$('.activity-feed-container').hasClass('collapsed')) {
			//get_activity_feed('all');
		}
		else {
			get_activity_feed('questions');
		}
	});

	$('.activity-feed-articles').click( function() {
		if ($(this).hasClass('active') && !$('.activity-feed-container').hasClass('collapsed')) {
			//get_activity_feed('all');
		}
		else {
			get_activity_feed('articles');
		}
	});

	$('.activity-feed-rubrikator').click( function() {
		if ($(this).hasClass('active') && !$('.activity-feed-container').hasClass('collapsed')) {
			//get_activity_feed('all');
		}
		else {
			get_activity_feed('rubrikator');
		}
	});

	$('.activity-feed-leaders').click( function() {
		if ($(this).hasClass('active') && !$('.activity-feed-container').hasClass('collapsed')) {
			//get_activity_feed('all');
		}
		else {
			get_activity_feed('leaders');
		}
	});

	$('.collapsed .activity-feed-comments').on('click', function() {
		$('.activity-feed-container.collapsed').removeClass('collapsed');
	});
	$('.collapsed .activity-feed-questions').on('click', function() {
		$('.activity-feed-container.collapsed').removeClass('collapsed');
	});
	$('.collapsed .activity-feed-articles').on('click', function() {
		$('.activity-feed-container.collapsed').removeClass('collapsed');
	});
	$('.collapsed .activity-feed-leaders').on('click', function() {
		$('.activity-feed-container.collapsed').removeClass('collapsed');
	});
	$('.collapsed .activity-feed-rubrikator').on('click', function() {
		$('.activity-feed-container.collapsed').removeClass('collapsed');
	});

	$('.activity-feed-header-week').click( function() {
		$('.activity-feed-header-submenu > span').removeClass('active');
		$('.activity-feed-content').html(leaders_content_week);
		$('.activity-feed-header-week').addClass('active');
	});
	$('.activity-feed-header-month').click( function() {
		$('.activity-feed-header-submenu > span').removeClass('active');
		$('.activity-feed-content').html(leaders_content_month);
		$('.activity-feed-header-month').addClass('active');
	});
	$('.activity-feed-header-year').click( function() {
		$('.activity-feed-header-submenu > span').removeClass('active');
		$('.activity-feed-content').html(leaders_content_total);
		$('.activity-feed-header-year').addClass('active');
	});

	function get_activity_feed(section) {
		console.log('Get Activity Feed', section);
		$('.activity-feed-menu > div').removeClass('active');
		$('.activity-feed-header-title').removeClass('active');
		$('.activity-feed-' + section).addClass('active');
		$('.activity-feed-header-' + section).addClass('active');
		$('.count-new-' + section).hide();
		$.cookie('activity-feed', section, { expires: 365, path: '/' });
		$('.activity-feed-content').html('<img src="'+activity_feed_loader+'">');
		if (section == 'rubrikator') {
			$('.activity-feed-content').html(activity_rubrikator);
		}
		else if (section == 'leaders') {
			$('.activity-feed-header-submenu > span').removeClass('active');
			$('.activity-feed-content').html(leaders_content_week);
			$('.activity-feed-header-week').addClass('active');
		}
		else {
			$.get(ajax_url + '?action=get_activity_feed&section=' + section, function(data) {
				$('.activity-feed-content').html(data);
			});
		}
	}

	function isMobile() {
		try {
			if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
				return true;
			};
			return false;
		}
		catch(e){
			console.log("Error in isMobile");
			return false;
		}
	}
});

/* Aktivity Rubrikator */
jQuery(document).ready(function($){
	$(".activity-feed-container").on("click", "#menu-activityrubrikator li.menu-item-has-children", function() {
		var title = $(this).children("a").text();
		var submenu = $(this).children("ul").html();
		if($(this).hasClass('rubrikator-zup')) { $(".block-rubr-submenu-content-upperlist").html('<div><a class="submenu-upperlist-nextsem" href="/online?razdel=631">Ближайшие семинары 1С ЗУП</a><a class="submenu-upperlist-pastsem" href="/past-seminars?razdel=631">Записи эфиров 1С ЗУП</a></div><a href="/zup-obzori">Обзоры релизов ЗУП</a><a href="/1s-zup/samouchiteli-zup">Самоучители ЗУП</a><a href="/1s-zup/bazovyj-zup-3-1">Базовый ЗУП 3.1</a><a href="/1s-zup/prodvinutyj-zup-3-1">Продвинутый ЗУП 3.1</a>'); }
		else if ($(this).hasClass('rubrikator-buh')) { $(".block-rubr-submenu-content-upperlist").html('<div><a class="submenu-upperlist-nextsem" href="/online?razdel=630">Ближайшие семинары 1С БП</a><a class="submenu-upperlist-pastsem" href="/past-seminars?razdel=630">Записи эфиров 1С БП</a></div><a href="/1s-buhgalteriya/lajfhaki-dlya-buhgaltera/pomoshhniki-buhgaltera/kalendar-buhgaltera">Календарь Бухгалтера</a><a href="/buh-lifehack">Лайфхаки 1С БП</a>'); }
		else if ($(this).hasClass('rubrikator-law')) { $(".block-rubr-submenu-content-upperlist").html('<a href="/past-seminars?razdel=1455">Записи эфиров по законодательству</a><a href="/online?razdel=1455">Ближайшие семинары</a>'); }
		else $(".block-rubr-submenu-content-upperlist").html('');
		$(".block-rubr-submenu-title span").text(title);
		$(".block-rubr-submenu-content-list ul").html(submenu);
		//$(".block-rubr-submenu-content-list ul").html(submenu).children(".rubrikator-l2-title").before( "</ul><ul>" );;
		$(".block-rubr-submenu").show();
		$(".block-rubr-submenu ul.sub-menu").hide();
		$(".block-rubr-subsubmenu").hide();
		if ( $(".block-rubr-submenu .current-menu-parent").length > 0 ) {
			var title = $(".block-rubr-submenu .current-menu-parent").children("a").text();
			var submenu = $("#menu-activityrubrikator ul.sub-menu li.current-menu-item").parents("ul").html();
			$(".block-rubr-subsubmenu-title span").text(title);
			$(".block-rubr-subsubmenu-content-list ul").html(submenu);
			$(".block-rubr-subsubmenu").show();
		}
		return false;
	});

	$(".activity-feed-container").on("click", "li.rubrikator-l2-title a", function() {
		return false;
	});


	$(".activity-feed-container").on("click", ".block-rubr-submenu-close", function() {
		$(".block-rubr-submenu").hide();
	});

	$(".activity-feed-container").on("click", ".block-rubr-submenu-content-list li.menu-item-has-children", function() {
		$('.block-rubr-submenu-content-list > ul > li').removeClass('active-submenu-li');
		$(this).addClass('active-submenu-li');
		var title = $(this).children("a").text();
		var submenu = $(this).children("ul").html();
		$(".block-rubr-subsubmenu-title span").text(title);
		$(".block-rubr-subsubmenu-content-list ul").html(submenu);
		$(".block-rubr-subsubmenu").show();
		$('.block-rubr-submenu').addClass('active');
		return false;
	});

	$(".activity-feed-container").on("click", ".block-rubr-subsubmenu-close", function() {
		$('.block-rubr-submenu-content-list > ul > li').removeClass('active-submenu-li');
		$(".block-rubr-subsubmenu").hide();
		$('.block-rubr-submenu').removeClass('active');
	});

});
