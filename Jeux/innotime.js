var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	scene: [Scene0, transition],
	physics: {
        default: 'arcade',
        arcade: {
           gravity: { y: 1300 },
		   debug: true
        }
    }

};
	var game = new Phaser.Game(config);


