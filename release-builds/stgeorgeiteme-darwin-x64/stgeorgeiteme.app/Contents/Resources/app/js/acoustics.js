// JavaScript Document
$(document).ready(function () {
	"use strict";
	
	var bassDry = $(".bass-dry");
	var bassCrypt = $(".bass-crypt");
	var bassHall = $(".bass-hall");
	var bassRoom = $(".bass-room");
	var bassArray = [bassDry, bassCrypt, bassHall, bassRoom];
	
	var percussionDry = $(".percussion-dry");
	var percussionCrypt = $(".percussion-crypt");
	var percussionHall = $(".percussion-hall");
	var percussionRoom = $(".percussion-room");
	var percussionArray = [percussionDry, percussionCrypt, percussionHall, percussionRoom];
	
	var speechDry = $(".speech-dry");
	var speechCrypt = $(".speech-crypt");
	var speechHall = $(".speech-hall");
	var speechRoom = $(".speech-room");
	var speechArray = [speechDry, speechCrypt, speechHall, speechRoom];
	
	var trumpetDry = $(".trumpet-dry");
	var trumpetCrypt = $(".trumpet-crypt");
	var trumpetHall = $(".trumpet-hall");
	var trumpetRoom = $(".trumpet-room");
	var trumpetArray = [trumpetDry, trumpetCrypt, trumpetHall, trumpetRoom];
	
	function loadAudioFiles() {
		bassArray.forEach(function (audioFile) {
			audioFile.trigger('load');
		});
		percussionArray.forEach(function (audioFile) {
			audioFile.trigger('load');
		});
		speechArray.forEach(function (audioFile) {
			audioFile.trigger('load');
		});
		trumpetArray.forEach(function (audioFile) {
			audioFile.trigger('load');
		});
	}

	function stopAudio() {
		bassArray.forEach(function (audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0);
		});
		
		percussionArray.forEach(function (audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0);
		});
		
		speechArray.forEach(function (audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0);
		});
		
		trumpetArray.forEach(function (audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0);
		});
	}
	
	loadAudioFiles();

	$(".double-bass").click(function() {
		stopAudio();

	if ($(".double-bass").hasClass("pressed")) {
		$(".double-bass").removeClass("pressed");
		return;
	}

	if ($(".percussion").hasClass("pressed")) {
		$(".percussion").removeClass("pressed");
	}
	if ($(".speech").hasClass("pressed")) {
		$(".speech").removeClass("pressed");
	}
	if ($(".trumpet").hasClass("pressed")) {
		$(".trumpet").removeClass("pressed");
	}

	$(".double-bass").addClass("pressed");

	if ($(".dry").hasClass("pressed")) {
		bassDry.trigger("play");
	}
	if ($(".crypt").hasClass("pressed")) {
		bassCrypt.trigger("play");
	}
	if ($(".hall-floor").hasClass("pressed")) {
		bassHall.trigger("play");
	}
	if ($(".round-room").hasClass("pressed")) {
		bassRoom.trigger("play");
	}
	});

	$(".percussion").click(function() {
		stopAudio();

	if ($(".percussion").hasClass("pressed")) {
		$(".percussion").removeClass("pressed");
		return;
	}

	if ($(".double-bass").hasClass("pressed")) {
		$(".double-bass").removeClass("pressed");
	}
	if ($(".speech").hasClass("pressed")) {
		$(".speech").removeClass("pressed");
	}
	if ($(".trumpet").hasClass("pressed")) {
		$(".trumpet").removeClass("pressed");
	}

	$(".percussion").addClass("pressed");

	if ($(".dry").hasClass("pressed")) {
		percussionDry.trigger("play");
	}
	if ($(".crypt").hasClass("pressed")) {
		percussionCrypt.trigger("play");
	}
	if ($(".hall-floor").hasClass("pressed")) {
		percussionHall.trigger("play");
	}
	if ($(".round-room").hasClass("pressed")) {
		percussionRoom.trigger("play");
	}
	});

	$(".trumpet").click(function() {
		stopAudio();

	if ($(".trumpet").hasClass("pressed")) {
		$(".trumpet").removeClass("pressed");
		return;
	}

	if ($(".double-bass").hasClass("pressed")) {
		$(".double-bass").removeClass("pressed");
	}
	if ($(".speech").hasClass("pressed")) {
		$(".speech").removeClass("pressed");
	}
	if ($(".percussion").hasClass("pressed")) {
		$(".percussion").removeClass("pressed");
	}

	$(".trumpet").addClass("pressed");

	if ($(".dry").hasClass("pressed")) {
		trumpetDry.trigger("play");
	}
	if ($(".crypt").hasClass("pressed")) {
		trumpetCrypt.trigger("play");
	}
	if ($(".hall-floor").hasClass("pressed")) {
		trumpetHall.trigger("play");
	}
	if ($(".round-room").hasClass("pressed")) {
		trumpetRoom.trigger("play");
	}
	});

	$(".speech").click(function() {
		stopAudio();

	if ($(".speech").hasClass("pressed")) {
		$(".speech").removeClass("pressed");
		return;
	}

	if ($(".double-bass").hasClass("pressed")) {
		$(".double-bass").removeClass("pressed");
	}
	if ($(".percussion").hasClass("pressed")) {
		$(".percussion").removeClass("pressed");
	}
	if ($(".trumpet").hasClass("pressed")) {
		$(".trumpet").removeClass("pressed");
	}

	$(".speech").addClass("pressed");

	if ($(".dry").hasClass("pressed")) {
		speechDry.trigger("play");
	}
	if ($(".crypt").hasClass("pressed")) {
		speechCrypt.trigger("play");
	}
	if ($(".hall-floor").hasClass("pressed")) {
		speechHall.trigger("play");
	}
	if ($(".round-room").hasClass("pressed")) {
		speechRoom.trigger("play");
	}
	});

	$(".dry").click(function() {
		stopAudio();

		if ($(".dry").hasClass("pressed")) {
			$(".dry").removeClass("pressed");
			return;
		}
	
		if ($(".crypt").hasClass("pressed")) 		{ $(".crypt").removeClass("pressed"); }
		if ($(".hall-floor").hasClass("pressed")) 	{ $(".hall-floor").removeClass("pressed"); }
		if ($(".round-room").hasClass("pressed")) 	{ $(".round-room").removeClass("pressed"); }
	
		$(".dry").addClass("pressed");
	
		if ($(".double-bass").hasClass("pressed")) 	{ bassDry.trigger("play"); }
		if ($(".percussion").hasClass("pressed")) 	{ percussionDry.trigger("play"); }
		if ($(".trumpet").hasClass("pressed")) 		{ trumpetDry.trigger("play"); }
		if ($(".speech").hasClass("pressed")) 		{ speechDry.trigger("play"); }
	});
	
	$(".crypt").click(function() {
		stopAudio();

		if ($(".crypt").hasClass("pressed")) {
			$(".crypt").removeClass("pressed");
			return;
		}
	
		if ($(".dry").hasClass("pressed")) 			{ $(".dry").removeClass("pressed"); }
		if ($(".hall-floor").hasClass("pressed")) 	{ $(".hall-floor").removeClass("pressed"); }
		if ($(".round-room").hasClass("pressed")) 	{ $(".round-room").removeClass("pressed"); }
	
		$(".crypt").addClass("pressed");
	
		if ($(".double-bass").hasClass("pressed")) 	{ bassCrypt.trigger("play"); }
		if ($(".percussion").hasClass("pressed")) 	{ percussionCrypt.trigger("play"); }
		if ($(".trumpet").hasClass("pressed")) 		{ trumpetCrypt.trigger("play"); }
		if ($(".speech").hasClass("pressed")) 		{ speechCrypt.trigger("play"); }
	});
	
	$(".hall-floor").click(function() {
		stopAudio();

		if ($(".hall-floor").hasClass("pressed")) {
			$(".hall-floor").removeClass("pressed");
			return;
		}
	
		if ($(".crypt").hasClass("pressed")) 		{ $(".crypt").removeClass("pressed"); }
		if ($(".dry").hasClass("pressed")) 			{ $(".dry").removeClass("pressed"); }
		if ($(".round-room").hasClass("pressed")) 	{ $(".round-room").removeClass("pressed"); }
	
		$(".hall-floor").addClass("pressed");
	
		if ($(".double-bass").hasClass("pressed")) 	{ bassHall.trigger("play"); }
		if ($(".percussion").hasClass("pressed")) 	{ percussionHall.trigger("play"); }
		if ($(".trumpet").hasClass("pressed")) 		{ trumpetHall.trigger("play"); }
		if ($(".speech").hasClass("pressed")) 		{ speechHall.trigger("play"); }
	});
	
	$(".round-room").click(function() {
		stopAudio();

		if ($(".round-room").hasClass("pressed")) {
			$(".round-room").removeClass("pressed");
			return;
		}
	
		if ($(".crypt").hasClass("pressed")) 		{ $(".crypt").removeClass("pressed"); }
		if ($(".dry").hasClass("pressed")) 			{ $(".dry").removeClass("pressed"); }
		if ($(".hall-floor").hasClass("pressed")) 	{ $(".hall-floor").removeClass("pressed"); }
	
		$(".round-room").addClass("pressed");
	
		if ($(".double-bass").hasClass("pressed")) 	{ bassRoom.trigger("play"); }
		if ($(".percussion").hasClass("pressed")) 	{ percussionRoom.trigger("play"); }
		if ($(".trumpet").hasClass("pressed")) 		{ trumpetRoom.trigger("play"); }
		if ($(".speech").hasClass("pressed")) 		{ speechRoom.trigger("play"); }
	});
});