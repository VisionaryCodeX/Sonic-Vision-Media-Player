<script>
	var video = document.getElementById("myVideo");
	var volumeSlider = document.getElementById("volume");

	function playPause() {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	}

	function makeFullScreen() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		}
	}

	function setVolume() {
		video.volume = volumeSlider.value;
	}
</script>
