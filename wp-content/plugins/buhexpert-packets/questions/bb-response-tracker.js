function setCommentStatus(commentid) {
	var status = jQuery("#status-change-" + commentid + " option:selected").text();
	var data = { action: 'tracker_comment_status', id: commentid, status: status, nonce: nonce };
	jQuery('#comment-' + commentid + ' .column-comment').animate({opacity:0.25}, 50);
	jQuery.post(ajaxurl, data,
		function(response) {
			if( 'ERROR' == response.substr(0,5) ) {
				alert(response);
				return(false);
			}
			jQuery('#comment-' + commentid + ' .column-comment').css({'background-color': statuscolor[status], 'opacity':1});
			jQuery('#status-change-' + commentid).css('background-color', statuscolor[status]);
			jQuery('#comment-' + commentid + ' .comment-status-changed').text(response);

        }
    );
    return(false);
}
