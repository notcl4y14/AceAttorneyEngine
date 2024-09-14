import DialogBox from "../source/DialogBox.js";

const dialogBox = new DialogBox();

dialogBox.htmlBox = document.getElementById("message-box");
dialogBox.htmlText = document.getElementById("message-box-text");
dialogBox.htmlSpeaker = document.getElementById("message-box-speaker");

dialogBox.show("AAAAeaeaeae", "E");

function onDone() {
	document.getElementById("message-box-arrow").style.visibility = "visible";
}

async function step(ms) {
	if (dialogBox.isDone) {
		onDone();
		return;
	}

	dialogBox.advance();
	dialogBox.update();

	setTimeout(step, ms, ms);
}

step(25);