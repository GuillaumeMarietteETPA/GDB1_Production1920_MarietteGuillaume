class Scene0 extends Phaser.Scene{
	constructor(){
		super('Scene0');
}

init(data){
	var player;
	
}


preload(){
	this.load.image('background','assets/Fond Saut.png');
	this.load.image('paille','assets/BDP2.png');
	
	
	
}

create(){
	
	this.fond = this.physics.add.sprite(2721, 540, 'background');
	
	this.paille = this.physics.add.sprite(1500, 703, 'paille');
	
	this.load.spritesheet('homme','assets/perso.png',{frameWidth: 31, frameHeight: 34});

}
	
	


update(){
	
		



	



	}

}


