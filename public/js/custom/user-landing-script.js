
$(".info").on("click", function() {
	console.log("Additional Information is unfinished...");

	/*
	var prevRequested = $(this).data("previously-requested");
	if (prevRequested !== "true") {
		var self = this;
		var username = $(this).closest('.card').attr("data-teacherusername");
		var userId = $(this).attr('data-teacheruserid');
		var linksContainer = $(this).closest('.links');
		var interestsContainer = $(this).closest('.interests');
		var excelsContainer = $(this).closest('.excels');
		$.ajax({
			url: "/"+ username +"/info",
			data: userId,
			method: 'GET',
			success: function(userInfo) {
				console.log(userInfo);

				var links = userInfo.links;
				var interests = userInfo.interests;
				var excels = userInfo.excels;

				links.forEach(function(link) {
					linksContainer.append("<a src="+ link +"><span class='glyphicon glyphicon-link'></span></a>");
				});

				interests.forEach(function(interest) {
					interestsContainer.append("<tr><td>"+ interest +"</td></tr>");
				});

				excels.forEach(function(excel) {
					excelsContainer.append("<tr><td>"+ excel +"</td></tr>");
				});

				$(self).closest('.card').toggleClass('show-more');
				$(self).toggleClass('active');
				$(self).data("previously-requested", "true");
			},
			error: function(err) {
				console.log("There was an error processing the request: " + err);
			}
		});
	}
	else {
		$(this).closest('.card').toggleClass('show-more');
		$(this).toggleClass('active');
	}
	*/
});
