import DialogBox from "../source/DialogBox.js";

DialogBox.htmlBox = document.getElementById("message-box");
DialogBox.htmlText = document.getElementById("message-box-text");
DialogBox.htmlSpeaker = document.getElementById("message-box-speaker");

DialogBox.show("AAAAeaeaeae", "E");
// DialogBox.show("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "AAAAAAAAAAAAAAA");

function onDone() {
	document.getElementById("message-box-arrow").style.visibility = "visible";
}

async function step(ms) {
	if (DialogBox.isDone) {
		onDone();
		return;
	}

	DialogBox.advance();
	DialogBox.update();

	setTimeout(step, ms, ms);
}

step(25);