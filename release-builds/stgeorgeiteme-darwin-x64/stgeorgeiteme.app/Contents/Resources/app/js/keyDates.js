// JavaScript Document
$(document).ready(function() {
	"use strict";
	var scrolled = 0;
	$('.scroll-down').click(function() {
		scrolled = scrolled + 500 >= 2100 ? 3000 : scrolled + 500;
		$('.carousel-caption').animate( {
			scrollTop: scrolled
		}, "slow");
		console.log("Down button pressed, scrolling " + scrolled);
	});
	
	$('.scroll-up').click(function() {
		scrolled = scrolled - 500 <= 0 ? 0 : scrolled - 500;
		$('.carousel-caption').animate( {
			scrollTop: scrolled
		}, "slow");
	});
	
	$('.carousel-control').click(function() {
		scrolled = 0;
	});
});