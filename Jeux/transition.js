class transition extends Phaser.Scene{
	constructor(){
		super('transition');
}

init(data){
	
	
}


preload(){
	this.load.image('transi','assets/Ftransition.png');
	
	this.load.spritesheet('losange','assets/losange.png',{frameWidth: 354, frameHeight: 450});
}

create(){
	
	this.add.image(960,540,'transi');
	
	this.vie = this.physics.add.sprite(1251,266, 'losange').setImmovable(true);
	this.vie.body.setAllowGravity(false);
	

}
	
	


update(){
	
		



	



	}

}


