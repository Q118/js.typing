function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) {
		return;
	} //stop function from running if key us invalid
	audio.currentTime = 0; //rewind to start each keydown
	audio.play();
	document.getElementById("loop").loop = true;
	key.classList.add("playing");
}

function stopLoop() {
	const audio = document.querySelector(`audio[data-key="81"]`);
	const audio1 = document.querySelector(`audio[data-key="90"]`);
	const audio2 = document.querySelector(`audio[data-key="80"]`);
	const audio3 = document.querySelector(`audio[data-key="191"]`);
	const audio4 = document.querySelector(`audio[data-key="77"]`);

	audio.pause();
	audio1.pause();
	audio2.pause();
	audio3.pause();
	audio4.pause();
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return; //skip it if its not a transform
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

const screen = document.getElementById("screen");


// mobile devices
screen.addEventListener("touchstart", stopLoop);

// TODO: create functionality to clear the input with every keydown



