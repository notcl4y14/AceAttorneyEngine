import Character from "../source/Character.js";
import DialogBox from "../source/DialogBox.js";
import Animation from "../source/Animation.js";

const dialogBox = new DialogBox();
const character = new Character();

dialogBox.htmlBox = document.getElementById("message-box");
dialogBox.htmlText = document.getElementById("message-box-text");
dialogBox.htmlSpeaker = document.getElementById("message-box-speaker");

character.htmlImage = document.getElementById("character");

const frame1 = new Image();
frame1.src = "sprite1.png";
const frame2 = new Image();
frame2.src = "sprite2.png";

const timeInterval = 100;

const animation = new Animation();
animation.frames = [frame1, timeInterval, frame2, timeInterval, frame1, timeInterval, frame2, timeInterval, frame1, timeInterval, frame2, timeInterval, frame1, timeInterval, frame2, timeInterval];

character.loadAnimation(animation);
character.playAnimation();

dialogBox.show("DialogBox", "HMMMMMMMMMMMMMMMMMMMMMMMMMMM eh");

function onDone() {
	document.getElementById("message-box-arrow").style.visibility = "visible";
}

async function step(ms) {
	if (dialogBox.isDone) {
		onDone();
		return;
	}

	dialogBox.step();

	setTimeout(step, ms, ms);
}

step(25);