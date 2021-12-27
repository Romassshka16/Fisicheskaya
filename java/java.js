$('.part').click(function(){
  $(".Ustie").fadeToggle(10);
  $(".Ozero").fadeOut(10);
  $(".h1").fadeOut(10);
  $(".h2").fadeOut(10);
  $(".h3").fadeOut(10);
  $(".h4").fadeOut(10);
});

$('.part_two').click(function(){
	$(".Ozero").fadeToggle(10);
	$(".Ustie").fadeOut(10);
	$(".h1").fadeOut(10);
  	$(".h2").fadeOut(10);
  	$(".h3").fadeOut(10);
  	$(".h4").fadeOut(10);
});

$(".yellow").click(function() {
  $('.h1').fadeIn(10);
  $(".Ustie").fadeOut(10);
  $(".Ozero").fadeOut(10);
  $(".h2").fadeOut(10);
  $(".h3").fadeOut(10);
  $(".h4").fadeOut(10);
});

$(".green").click(function() {
  $('.h2').fadeIn(10);
  $(".Ustie").fadeOut(10);
  $(".Ozero").fadeOut(10);
  $(".h1").fadeOut(10);
  $(".h3").fadeOut(10);
  $(".h4").fadeOut(10);
});

$(".white").click(function() {
  $('.h3').fadeIn(10);
  $(".Ustie").fadeOut(10);
  $(".Ozero").fadeOut(10);
  $(".h1").fadeOut(10);
  $(".h2").fadeOut(10);
  $(".h4").fadeOut(10);
});

$(".blue").click(function() {
  $('.h4').fadeIn(10);
  $(".Ustie").fadeOut(10);
  $(".Ozero").fadeOut(10);
  $(".h1").fadeOut(10);
  $(".h2").fadeOut(10);
  $(".h3").fadeOut(10);
});

$('.yellow').hover(function(){
		$('.a').toggleClass("colored");
});

$('.green').hover(function(){
		$('.b').toggleClass("colored_one");
});

$('.white').hover(function(){
		$('.c').toggleClass("colored_two");
});

$('.blue').hover(function(){
		$('.d').toggleClass("colored_three");
});




		