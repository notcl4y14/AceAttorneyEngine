export default class DialogBox {

	static message = "";
	static speaker = "";
	static visible = false;

	static index = 0;

	static htmlSpeaker = null;
	static htmlText = null;
	static htmlBox = null;

	static get isDone () {
		return this.index >= this.message.length;
	}

	static get messageOut () {
		return this.message.substring(0, this.index);
	}

	static show(message, speaker) {
		this.message = message;
		this.speaker = speaker;
		this.visible = true;
		this.index = 0;
	}

	static advance() {
		this.index += 1;
	}

	// HTML
	static update() {
		this.htmlBox.style.visibility = this.visible
			? "visible" : "hidden";
		this.htmlSpeaker.innerHTML = this.speaker;
		this.htmlText.innerHTML = this.messageOut;
	}

	// Canvas
	static drawBox(context, x, y, width, height) {
		context.fillStyle = "#000000";
		context.fillRect(x, y, width, height);
	}

	static drawText(context, text, x, y) {
		context.fillStyle = "#ffffff";
		context.fillText(text, x, y);
	}
	
}