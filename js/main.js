document.addEventListener("DOMContentLoaded", function() {
	// LOADER
	var loader = document.getElementById("loader");
	var preloader = document.getElementById("preloader");
    function hidePreloader() {
		preloader.style.visibility = "hidden";
	}
	setTimeout(function() {
	  loader.style.opacity = 0;
	  preloader.style.opacity = 0;
	}, 1000);
	preloader.addEventListener("transitionend", hidePreloader);

	// SHOW & HIDE NAVBAR

	var toggleButton = document.querySelector('.menu-toggle');
	var navigation = document.getElementById('main-nav-wrap');

	toggleButton.addEventListener('click', function(e) {
		e.preventDefault();
		toggleButton.classList.toggle('is-clicked');
		navigation.classList.toggle('clicked');
	}); 
});