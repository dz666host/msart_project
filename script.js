// paralax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// bungkus-1
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if( wScroll > 0 ){
			$('.bungkus-1 .naMA').each(function(i){
				setTimeout(function(){
					$('.bungkus-1 .naMA').eq(i).addClass('muncul');
				}, 200 * (i+1));
			});
		}
	});

	// bungkus-2
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if( wScroll > 477 ){
			$('.bungkus-2 .conn').each(function(i){
				setTimeout(function(){
					$('.bungkus-2 .conn').eq(i).addClass('muncul');
				}, 300 * (i+1));
			});
		}
	});

	// myportfolio
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if( wScroll > 920 ){
			$('.myportfolio .thumbnail').each(function(i){
				setTimeout(function(){
					$('.myportfolio .thumbnail').eq(i).addClass('muncul');
				}, 100 * (i+1));
			});
		}
	});

	// Cards
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		if( wScroll > 1300 ){
			$('.allCards .card').each(function(i){
				setTimeout(function(){
					console.log('ok');
					// $('.allCards .card').eq(i).addClass('muncul');
				}, 100 * (i+1));
			});
		}
	});

});

// back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}