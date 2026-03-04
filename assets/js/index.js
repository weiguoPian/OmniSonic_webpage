window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);


    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();

})



// ###############################

// bulmaCarousel.attach('.collage-carousel', {
//   slidesToScroll: 1,   // 1 "bunch" at a time
//   slidesToShow: 1,     // show one collage row per view
//   loop: true,
//   infinite: true,
//   autoplay: false
// });

// ###############################
document.addEventListener('DOMContentLoaded', function () {

  // Attach ONLY ONCE to the collage carousel
  bulmaCarousel.attach('.collage-carousel', {
    slidesToScroll: 1,     // scroll one collage at a time
    slidesToShow: 1,       // always show ONE collage group
    loop: true,
    autoplay: false,
    navigation: true,
    pagination: true
  });

});
