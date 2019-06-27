var viewportHeight = $(window).height();

var map = $('.map');
var mapBlock = $('.map-block');
var fade = $('.fade');
var imgGallery = $('.images');
var closeBtn = $('.close-btn');
var prev = $('.prev');
var next = $('.next');

var images;
var selected;
var index = 0;

$('.gallery').toggle();

mapBlock.on('click', function(){
	selected = $(this);
	images = selected.find('.img-feature');
	console.log(images.length);
	// console.log(images);
	imgGallery.html(images);
	images.toggle();
	// console.log(selected);
	toggleGallery();
	map.css('background-image', selected.css('background-image'));
	map.css('top', 45 + '%');
	map.css('transform', 'scale(' + 0.2 +')');
});

closeBtn.on('click', function(){
	toggleGallery();

	index = 0;
	selected.html(images);
	images.toggle();
	map.css('top', '0%');
	map.css('transform', 'scale(' + 1 +')');

});

 function toggleGallery(){
	mapBlock.toggle();
	fade.fadeToggle(500);
	$('.gallery').fadeToggle(500);
}


prev.on('click', function(){
	console.log('previous', index);
	if(index > 0){
		index--;
		imgGallery.find('.img-feature').hide();
		imgGallery.find('.img-feature').get(index).show();
	}
});

next.on('click', function(){
	console.log('next', index);
	if(index < images.length-1){
		
		images.fadeOut(100);
		// current.get(index).fadeOut(100);
		index++;
		// ;
		images.get(index).fadeIn(100);
	}
});

console.log(viewportHeight / 10);