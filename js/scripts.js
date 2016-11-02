jQuery(document).ready(function($) {

	$('.lightbox_trigger').click(function(e) {

		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = $(this).attr("href");

		/*
		If the lightbox window HTML already exists in document,
		change the img src to to match the href of whatever link was clicked

		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

		if ($('#lightbox').length > 0) { // #lightbox exists

			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}

	});

	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});

});

// $(function() {
//   new Maplace({
//       locations: LocsB,
//       map_div: '#gmap-list',
//       controls_type: 'list',
//       controls_title: 'Choose a location:'
//   }).Load();
// });
//
// var LocsB = [
//     {
//         lat: 52.1,
//         lon: 11.3,
//         title: 'Title A2',
//         html: [
//             '<h3>Content A2</h3>',
//             '<p>Lorem Ipsum..</p>'
//         ].join(''),
//         zoom: 8
//     },
//     {
//         lat: 51.2,
//         lon: 22.2,
//         title: 'Title B2',
//         html: [
//             '<h3>Content B2</h3>',
//             '<p>Lorem Ipsum..</p>'
//         ].join(''),
//         zoom: 8
//     },
//     {
//         lat: 49.4,
//         lon: 35.9,
//         title: 'Title C2',
//         html: [
//             '<h3>Content C2</h3>',
//             '<p>Lorem Ipsum..</p>'
//         ].join(''),
//         zoom: 4
//     },
//     {
//         lat: 47.8,
//         lon: 15.6,
//         title: 'Title D2',
//         html: [
//             '<h3>Content D2</h3>',
//             '<p>Lorem Ipsum..</p>'
//         ].join(''),
//         zoom: 6
//     }
// ];
