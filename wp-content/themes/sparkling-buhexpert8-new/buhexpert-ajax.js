jQuery(document).ready(function($) {
	
	$('.paginateBox').each(function(i,e) {
		if ($.cookie('savePage' + '-' + $(e)[0].id) !== null) {
			var data = {
				catName: $(e)[0].id,
				pageID: $.cookie('savePage' + '-' + $(e)[0].id)
			}
			paginateBox(data);
		}
	});

	$('.paginateBoxType').each(function(i,e) {
		if ($.cookie('savePage' + '-' + $(e)[0].id) !== null) {
			var data = {
				catName: $(e)[0].id,
				pageID: $.cookie('savePage' + '-' + $(e)[0].id)
			}
			paginateBoxType(data);
		}
	});

	setTimeout(function() {

		$('.multibox').each(function(i,e) {
			if ($.cookie('savePage' + '-' + $(e)[0].id) !== null) {
				var data = {
					catID: $(e)[0].id,
					pageID: $.cookie('savePage' + '-' + $(e)[0].id),
					dataset: $(e)
				}

				multibox(data);
			}
		});
	}, 100);

	$('.paginateBox').on('click', '.page-numbers', paginateBox);
	$('.paginateBoxType').on('click', '.page-numbers', paginateBoxType);
	$('.multibox').on('click', '.page-numbers', multibox);

	function dateExpires(set) {
		var date = new Date();
		var minutes = set;
		date.setTime(date.getTime() + (minutes * 60 * 1000));
		return date;
	}

	function multibox(e) {
		var box;
		var clickLink;

		if (typeof(e.dataset) !== 'undefined') {
			 box = $(e.dataset);
		} else {
			 box = $(this).parent().parent().parent();
		}

		if (typeof($(this).attr('href')) !== 'undefined') {
			clickLink = $(this).attr('href').split('#')[1];
		} else {
			clickLink = false;
		}

		if (typeof(e.catID) !== 'undefined') {
			catID = e.catID;
		} else {
			catID = box.attr('id');
		}

		if (typeof(e.pageID) !== 'undefined') {
			currentPage = e.pageID;
		} else {
			currentPage = clickLink;
		}

		if (currentPage !== false) {
			$.cookie('savePage' + '-' + catID, currentPage, { expires: dateExpires(10), path: location.pathname });

			$.ajax({
				url: buhexpertAjax.buhexpertAjaxUrl,
				type: 'POST',
				async: false,
				data: {
					action: 'multibox',
					multiboxJsonData : box.attr('data-multibox'),
					currentPage : currentPage
				},
				beforeSend: function(xhr){
					$('#' + catID).text('Загрузка...');
				},
				success: function (data) {
						$('#' + catID).html(data);
				}
			});
		}

	}

	function paginateBox(e) {

		var idAndCatName;
		var curPage;
		var clickLink;

		if (typeof($(this).attr('href')) !== 'undefined') {
			clickLink = $(this).attr('href').split('#')[1];
		} else {
			clickLink = false;
		}

		if (typeof(e.catName) !== 'undefined') {
			idAndCatName = e.catName;
		} else {
			idAndCatName = $(this).parent().parent().parent().attr('id');
		}

		if (typeof(e.pageID) !== 'undefined') {
			curPage = e.pageID;
		} else {
			curPage = clickLink;
		}

		if (!idAndCatName) {
			idAndCatName = false;
		}

		if (curPage !== false) {
			$.cookie('savePage' + '-' + idAndCatName, curPage, { expires: dateExpires(10) });

			$.ajax({
				url: buhexpertAjax.buhexpertAjaxUrl,
				type: 'POST',
				data: {
					action: 'paginateBox',
					catName : idAndCatName,
					postsPerPage : $('#' + idAndCatName + ' #postsPerPage').val(),
					postIn : $('#' + idAndCatName + ' #postIn').val(),
					metaKey : $('#' + idAndCatName + ' #metaKey').val(),
					dateShow : $('#' + idAndCatName + ' #dateShow').val(),
					commentShow : $('#' + idAndCatName + ' #commentShow').val(),
					statusShow : $('#' + idAndCatName + ' #statusShow').val(),
					excerptShow : $('#' + idAndCatName + ' #excerptShow').val(),
					currentPage : curPage
				},
				beforeSend: function(xhr){
					$('#' + idAndCatName).text('Загрузка...');
				},
				success: function (data) {
					$('#' + idAndCatName).html(data);
				}
			});
		}
	}

	function paginateBoxType(e) {

		var idAndTypeName;
		var curPage;
		var clickLink;

		if (typeof($(this).attr('href')) !== 'undefined') {
			clickLink = $(this).attr('href').split('#')[1];
		} else {
			clickLink = false;
		}

		if (typeof(e.catName) !== 'undefined') {
			idAndTypeName = e.catName;
		} else {
			idAndTypeName = $(this).parent().parent().parent().attr('id');
		}

		if (typeof(e.pageID) !== 'undefined') {
			curPage = e.pageID;
		} else {
			curPage = clickLink;
		}

		if (!idAndTypeName) {
			idAndTypeName = false;
		}

		if (curPage !== false) {
			$.cookie('savePage' + '-' + idAndTypeName, curPage, { expires: dateExpires(10) });

			$.ajax({
				url: buhexpertAjax.buhexpertAjaxUrl,
				type: 'POST',
				data: {
					action: 'paginateBoxType',
					postsPerPage : $('#' + idAndTypeName + ' #postsPerPage').val(),
					type : idAndTypeName,
					queriedCat : $('#' + idAndTypeName + ' #queriedCat').val(),
					dateShow : $('#' + idAndTypeName + ' #dateShow').val(),
					commentShow : $('#' + idAndTypeName + ' #commentShow').val(),
					statusShow : $('#' + idAndTypeName + ' #statusShow').val(),
					excerptShow : $('#' + idAndTypeName + ' #excerptShow').val(),
					currentPage : curPage
				},
				beforeSend: function(xhr){
					$('#' + idAndTypeName).text('Загрузка...');
				},
				success: function (data) {
					$('#' + idAndTypeName).html(data);
				}
			});
		}
	}

});