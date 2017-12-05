// JavaScript Document
$(document).ready(function(){
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
	
	var instrumentBtns = [$(".double-bass"), $(".percussion"), $(".speech"), $(".trumpet")];
	var reverbBtns = [$(".dry"), $(".crypt"), $(".hall-floor"), $(".round-room")];
	
	loadAudioFiles();
	
	// button click handler
	$('button').click(function() {
		if($.inArray($(this), instrumentBtns) !== -1 || $.inArray($(this), instrumentBtns) > -1) {
			instrumentBtns.forEach(function(button) {
				if(button.hasClass('pressed')) {
					button.removeClass('pressed');
				}
			});
		} else {
			reverbBtns.forEach(function(button) {
				if(button.hasClass('pressed')) {
					button.removeClass('pressed');
				}
			});
		}
		
		$(this).addClass('pressed');
		
		// this is where LINQ would be useful
		
		var instrumentBtn;
		var reverbBtn;
		var twoButtonsPressed = instrumentBtns.some(function(button) {
			button.hasClass('pressed');
		});
		
		if(twoButtonsPressed) {
			console.log("this is true");
			twoButtonsPressed = reverbBtns.some(function(button) { 
				button.hasClass('pressed'); 
			});
		}
		
		if(twoButtonsPressed) {
			
			instrumentBtn = instrumentBtns.find(function(button) {
				button.hasClass('pressed');
			});
			reverbBtn = reverbBtn.find(function(button) {
				button.hasClass('pressed');
			});
			var audioFile = findAudioFile(instrumentBtn, reverbBtn);
			playAudio(audioFile);
		}	
	});
	
	function loadAudioFiles() {
		bassArray.forEach(function(audioFile) {
			audioFile.trigger('load');
		});
		percussionArray.forEach(function(audioFile) {
			audioFile.trigger('load');
		});
		speechArray.forEach(function(audioFile) {
			audioFile.trigger('load');
		});
		trumpetArray.forEach(function(audioFile) {
			audioFile.trigger('load');
		});
	}
	
	function playAudio(audioToPlay) {
		bassArray.forEach(function(audioFile) {
			if(audioFile.prop('currentTime') > 0 ) {
				audioFile.animate({volume:0}, 500);
			}
		});
		
		percussionArray.forEach(function(audioFile) {
			if(audioFile.prop('currentTime') > 0 ) {
				audioFile.animate({volume:0}, 500);
			}
		});
		
		speechArray.forEach(function(audioFile) {
			if(audioFile.prop('currentTime') > 0 ) {
				audioFile.animate({volume:0}, 500);
			}
		});
		
		trumpetArray.forEach(function(audioFile) {
			if(audioFile.prop('currentTime') > 0 ) {
				audioFile.animate({volume:0}, 500);
			}
		});
		
		stopAudio();
		
		audioToPlay.trigger('play');
		audioToPlay.animate({volume:0.7}, 1000);
	}
	
	function stopAudio() {
		bassArray.forEach(function(audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0); 
		});
		
		percussionArray.forEach(function(audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0); 
		});
		
		speechArray.forEach(function(audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0); 
		});
		
		trumpetArray.forEach(function(audioFile) {
			audioFile.trigger('pause');
			audioFile.prop('currentTime', 0); 
		});
	}
	
	function findAudioFile(instrumentButton, reverbButton) {
		console.log("finding audio file");

		if(instrumentButton === $('.double-bass')) {
			if(reverbButton === $('.dry')) {
				return bassDry;
			}
			if(reverbButton === $('.crypt')) {
				return bassCrypt;
			}
			if(reverbButton === $('.hall')) {
				return bassHall;
			}
			if(reverbButton === $('.room')) {
				return bassRoom;
			}
		}
		if(instrumentButton === $('.percussion')) {
			if(reverbButton === $('.dry')) {
				return percussionDry;
			}
			if(reverbButton === $('.crypt')) {
				return percussionCrypt;
			}
			if(reverbButton === $('.hall')) {
				return percussionHall;
			}
			if(reverbButton === $('.room')) {
				return percussionRoom;
			}
		}
		if(instrumentButton === $('.speech')) {
			if(reverbButton === $('.dry')) {
				return speechDry;
			}
			if(reverbButton === $('.crypt')) {
				return speechCrypt;
			}
			if(reverbButton === $('.hall')) {
				return speechHall;
			}
			if(reverbButton === $('.room')) {
				return speechRoom;
			}
		}
		if(instrumentButton === $('.trumpet')) {
			if(reverbButton === $('.dry')) {
				return trumpetDry;
			}
			if(reverbButton === $('.crypt')) {
				return trumpetCrypt;
			}
			if(reverbButton === $('.hall')) {
				return trumpetHall;
			}
			if(reverbButton === $('.room')) {
				return trumpetRoom;
			}
		}
	}
});