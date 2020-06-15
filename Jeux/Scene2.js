class Scene2 extends Phaser.Scene{
	constructor(){
		super({
			key:'Scene2',
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 0 }
				}
			}
		});
}

init(data){
	
	
}


preload(){
	
	
}

create(){
	this.add.image(960,540,'taupe2');
	
	//ligne taupe haut
	this.taupe = this.physics.add.sprite(1320,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	this.taupe = this.physics.add.sprite(850,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	this.taupe = this.physics.add.sprite(385,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	
	//ligne taupe millieu
	this.taupe = this.physics.add.sprite(1392,394, 'taupeS').setOrigin(0,0);
	this.taupe = this.physics.add.sprite(836,394, 'taupeS').setOrigin(0,0);
	this.taupe = this.physics.add.sprite(280,394, 'taupeS').setOrigin(0,0);
	
	//ligne taupe bas
	this.taupe = this.physics.add.sprite(1500,610, 'taupeS').setOrigin(0,0).setScale(1.20);
	this.taupe = this.physics.add.sprite(812,610, 'taupeS').setOrigin(0,0).setScale(1.20);
	this.taupe = this.physics.add.sprite(124,610, 'taupeS').setOrigin(0,0).setScale(1.20);
}
	
	


update(){
	
		



	



	}

}


