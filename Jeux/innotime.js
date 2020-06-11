var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	scene: [Scene0],
	physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }

};
	var game = new Phaser.Game(config);


