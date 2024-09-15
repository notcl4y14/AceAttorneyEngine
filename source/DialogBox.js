export default class DialogBox {

	message = "";
	speaker = "";
	visible = false;

	index = 0;

	htmlSpeaker = null;
	htmlText = null;
	htmlBox = null;

	get isDone () {
		return this.index >= this.message.length;
	}

	get messageOut () {
		return this.message.substring(0, this.index);
	}

	show (speaker, message) {
		this.message = message;
		this.speaker = speaker;
		this.visible = true;
		this.index = 0;
	}

	advance () {
		this.index += 1;
	}

	step () {
		this.advance();
		this.update();
	}

	// HTML
	update () {
		this.htmlBox.style.visibility = this.visible
			? "visible" : "hidden";
		this.htmlSpeaker.innerHTML = this.speaker;
		this.htmlText.innerHTML = this.messageOut;
	}

	// Canvas
	drawBox (context, x, y, width, height) {
		context.fillStyle = "#000000";
		context.fillRect(x, y, width, height);
	}

	drawText (context, text, x, y) {
		context.fillStyle = "#ffffff";
		context.fillText(text, x, y);
	}
	
}