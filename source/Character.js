import Animation from "./Animation.js";

export default class Character {

	htmlImage = null;
	animation = new Animation();
	
	loadAnimation (animation) {
		this.animation = animation;
	}

	update () {
		// if (!this.animation.currentFrame) {
		// 	return;
		// }

		this.htmlImage.src = this.animation.currentFrame.src;
	}

	playAnimation () {
		this.animation.play();
		this.step();
	}

	async step () {
		if (!this.animation.playing || this.animation.isFinished) {
			return;
		}

		this.animation.advance();

		this.update();

		const time = this.animation.currentTime;

		setTimeout(() => this.step.call(this), time);
	}
	
}