export default class Animation {

	// frames[even] - image
	// frames[odd] - pause of an image in ms
	
	frames = [];
	index = 0;
	playing = false;

	get currentFrame () {
		return this.frames[this.index];
	}

	get currentTime () {
		return this.frames[this.index + 1];
	}

	get isFinished () {
		// console.log(this.index >= this.frames.length);
		// console.log(this.index, this.frames.length);
		// console.log(this.currentFrame);
		return this.index >= this.frames.length - 2;
	}

	play () {
		this.playing = true;
		this.index -= 2;
		// this.update();
	}

	stop () {
		this.playing = false;
	}

	advance () {
		this.index += 2;
	}

	// update () {
	// 	// if (!this.playing || this.isFinished) {
	// 	// 	return;
	// 	// }

	// 	// this.index += 2;
	// 	// const time = this.frames[this.index * 2 + 1];

	// 	// setTimeout(() => this.update.call(this), time);
	// }

}