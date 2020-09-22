window.onload = function () {

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	const canvas = document.getElementById("scene");
	const computed = getComputedStyle(canvas);
	canvas.width = parseInt(computed.width) * window.devicePixelRatio;
	canvas.height = parseInt(computed.height) * window.devicePixelRatio;

	const ctx = canvas.getContext('2d');

	const fps = document.getElementById("fps");
	
	let offset = 0;

	function tick() {
		const beforeDraw = performance.now();
		
		// ctx.beginPath();
		ctx.fillStyle = 'rgb(' + getRandomInt(256) + ', ' + getRandomInt(256) + ', ' + getRandomInt(256) + ')';
		const width = 145;
		for (var i = 0; i < 30000; i++) {
			const x = 10 + (i % width) * 13 + getRandomInt(10) + 0.00001;
			const y = 10 + Math.floor(i / width) * 25 + getRandomInt(10) + 0.00001;
			ctx.fillRect(x, y, 2, 2);
			
			offset = (offset + 3) % 100;
			
			// ctx.getImageData(0, 0, 1, 1);
		}
		ctx.fill();
		

		requestAnimationFrame(tick);
		
		const CALC_FPS = true;
		if (CALC_FPS) {
			
			ctx.getImageData(0, 0, 1, 1);
			
			const afterDraw = performance.now();
			const frameTime = afterDraw - beforeDraw;	
			if (frameTime > 0) {
				fps.textContent = Math.round(1000 / frameTime);
			}
		}
	}

	requestAnimationFrame(tick);
}