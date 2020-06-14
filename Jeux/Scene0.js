class Scene0 extends Phaser.Scene{
	constructor(){
		super('Scene0');
}

init(data){
	var player;
	var cursors;
	var vie;
}


preload(){
	this.load.image('background','assets/Fond Saut.png');
	this.load.image('sol','assets/Sautsol.png');
	this.load.image('paille','assets/BDP2.png');
	
	this.load.spritesheet('homme','assets/perso2.png',{frameWidth: 255, frameHeight: 377});
	
}

create(){
	
	this.fond = this.physics.add.sprite(2721, 540, 'background').setImmovable(true);
	this.fond.body.setAllowGravity(false);
	this.fond.setVelocityX(-900);
	this.sol = this.physics.add.staticGroup();
	this.sol.create(2721,835,'sol');
	
	
	
	this.paille = this.physics.add.sprite(2500, 703, 'paille');
	this.paille.setVelocityX(-900);
	this.physics.add.collider(this.paille,this.sol);
	
	
	this.player = this.physics.add.sprite(300,628,'homme');
	this.physics.add.collider(this.player,this.sol);
	this.physics.add.collider(this.paille,this.player,hitPlayer, null, this);

	this.player.setInteractive();
	
	this.anims.create({
		key:'jump',
		frames: this.anims.generateFrameNumbers('homme', {start: 0, end: 2}),
		frameRate: 10
	});
	
	this.anims.create({
		key:'stop',
		frames: [{key: 'homme', frame:0}],
		frameRate: 20
	});	
  
  


}
	
	


update(){
	
	this.player.on("pointerup",()=>{
		if (this.player.body.touching.down) {
			this.player.setVelocityY(-1000);
			this.player.anims.play('jump', true);
			}
		})
	
	if (this.player.body.touching.down) {
			this.player.anims.play('stop', true);
			}


	}

}




function hitPlayer(Player, Paille){
	this.deathText = this.add.text(960,540, 'Perdu !', {fontSize: '100px', fill:'#000'}).setOrigin(0.5);
	this.physics.pause();
	this.gameOver=true;
	
	this.scene.start('transition',{vie: this.vie});
		console.log("Transition");


}
