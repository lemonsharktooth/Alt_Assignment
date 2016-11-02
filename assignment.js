// put your javascript code here
/*
 *		This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var category_template, animals_template, photo_template, src_template, slideshow_template;

// variables to store the current displayed album and photo

// current_album okay
//squared away 
var current_category = animals_data.category[0];
var current_name = current_category.name[0];
var current_animals = current_category.animals[0];
var current_photo = current_animals.image[0];
// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);
	
	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source   = $("#photo-template").html();
	photo_template = Handlebars.compile(source);
	
	source   = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);

	source   = $("#src-template").html();
	src_template = Handlebars.compile(source);


	// 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	$("#albums-tab").click(function () {

		// displays the albums template (all the categories)
		showTemplate(category_template, animals_data);

		// make the albums tab the active one
		// first make the currently active tab inactive
		//makes the tab grey
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$("#albums-tab").addClass("active");

		// add a click callback to each album 
		// thumbnail which displays the photos
		// template on that album
		// (I have written out the code for this 
		// function for clarity but it is actually
		// pretty much the same as the photos tab
		// function so we could acutally just
		// call $(".photo-thumbnail").click() ) 
		//when you click on the thumbnail of a category...
		$(".album-thumbnail").click(function (){
			
			// get the index (position in the array)
			// of the album we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the album in
			// the array - @index)
			var index = $(this).data("id");
            console.log('index:', index);

			// set the current album to this album
			// displays the different categories

			current_category = animals_data.category[index];
            

			// displays the different animals in the category
			showTemplate(animals_template, current_category);

			// add an on click al all the photo thumbnails
			// which displays the photo in a modal popup

				//when you click on a category of animals 
				$(".photo-thumbnail").click(function (){
			
					// get the index (position in the array)
					// of the album we clicked on
					// "this" is the element that was clicked on
					// data("id") gets the attribute data-id
					// (which we set to the index of the album in
					// the array - @index)
					var index = $(this).data("id");
                    console.log('index 2: ', index)

					// set the current album to this animal type
					current_name = current_category.animals[index];
                    console.log('current_name: ', current_name);

					// displays the photos of animal

					showTemplate(src_template, current_name);
							//clicking on a thumbnail of the category>animal>image
							$(".photo-thumbnail").click(function (){
								// get the index (position in the array)
								// of the photo we clicked on
								// "this" is the element that was clicked on
								// data("id") gets the attribute data-id
								// (which we set to the index of the photo in
								// the array - @index)
								var index = $(this).data("id");

								// set the current photo to this photo
								current_photo = current_name.image[index];
								
								// displays the single photo template
								showTemplate(photo_template, current_photo);
					
				});
			});
		});
	});

	// 
	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	$("#src-tab").click(function () {
		
		// displays the photos template
		
		showTemplate(src_template, current_name);

		// make the photos tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make photos tab active
		$("#src-tab").addClass("active");

		// add an on click al all the photo thumbnails
		// which displays the photo in a modal popup
		$(".photo-thumbnail").click(function (){
			// get the index (position in the array)
			// of the photo we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the photo in
			// the array - @index)
			var index = $(this).data("id");

			// set the current photo to this photo
			current_phtos = current_name.image[index];
			
			// displays the single photo template
			showTemplate(photo_template, current_photo);
		});
	});





	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	$("#animals-tab").click(function () {
		
		// displays the photos template
		
		showTemplate(src_template, current_name);

		// make the photos tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make photos tab active
		$("#animals-tab").addClass("active");

		// add an on click al all the photo thumbnails
		// which displays the photo in a modal popup
		$(".photo-thumbnail").click(function (){
			// get the index (position in the array)
			// of the photo we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the photo in
			// the array - @index)
			var index = $(this).data("id");

			// set the current photo to this photo
			current_phtos = current_name.image[index];
			
			// displays the single photo template
			showTemplate(photo_template, current_photo);
		
				showTemplate(animals_template, current_category);

			// add an on click al all the photo thumbnails
			// which displays the photo in a modal popup

				//when you click on an animal in the category of animals 
				$(".album-thumbnail").click(function (){
			
					// get the index (position in the array)
					// of the album we clicked on
					// "this" is the element that was clicked on
					// data("id") gets the attribute data-id
					// (which we set to the index of the album in
					// the array - @index)
					var index = $(this).data("id");

					// set the current album to this animal
					current_name = animals_data.category.name[index];

					// displays the photos of animal

					showTemplate(src_template, current_name);
							//clicking on a thumbnail of the category>animal>image
							$(".photo-thumbnail").click(function (){
								// get the index (position in the array)
								// of the photo we clicked on
								// "this" is the element that was clicked on
								// data("id") gets the attribute data-id
								// (which we set to the index of the photo in
								// the array - @index)
								var index = $(this).data("id");

								// set the current photo to this photo
								current_photo = current_name.image[index];
								
								// displays the single photo template
								showTemplate(photo_template, current_photo);
					});
				});


		});
	});

	// 
	//  clicking on the slideshow tab displays the
	//  current album as a slide show
	//
	$("#slideshow-tab").click(function () {
		// display the slideshow template using the 
		// current album
		showTemplate(slideshow_template, current_name);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make slideshow tab active
		$("#slideshow-tab").addClass("active");
	});

	// start the page by showing the albums view
	// we do this by virtually clicking on the 
	// albums tab
	$("#animals-tab").click();

});