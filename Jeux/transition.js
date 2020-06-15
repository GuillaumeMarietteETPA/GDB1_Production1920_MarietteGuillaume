class transition extends Phaser.Scene{
	constructor(){
		super('transition');
}

init(data){
	
	console.log('init', data);
    this.vie = data.vie;
	this.niv = data.niv;
	
}


preload(){
	this.load.image('transi','assets/Ftransition.png');
	this.load.image('taupe2','assets/FondTaupe.png');
	this.load.image('fall2','assets/FondFall2.png');
	this.load.image('taupe','assets/FondTaupe.png');
	this.load.image('hom2','assets/persofall.png');
	this.load.spritesheet('losange1','assets/losange.png',{frameWidth: 354, frameHeight: 450});
	
}

create(){
	this.transi = this.physics.add.staticImage(960, 540, 'transi');
	this.transi.setInteractive();
	
	this.vie1 = this.physics.add.sprite(1351,390, 'losange1').setImmovable(true);
	this.vie1.body.setAllowGravity(false);
	
	this.vie2 = this.physics.add.sprite(951,390, 'losange1').setImmovable(true);
	this.vie2.body.setAllowGravity(false);

	this.vie3 = this.physics.add.sprite(551,390, 'losange1').setImmovable(true);
	this.vie3.body.setAllowGravity(false);

	this.anims.create({
		key:'death',
		frames: [{key: 'losange1', frame:1}],
		frameRate: 20
	});	
	
	


}
	
	


update(){
	
	//sytème de vie
		if(this.vie == 2) {
			this.time.addEvent({
				delay: 500,
				callback: ()=>{
				this.vie1.anims.play('death', true);
				},
				loop: false
				})
		}

		if(this.vie == 1) {
			this.vie1.anims.play('death', true);
			this.time.addEvent({
				delay: 500,
				callback: ()=>{
				this.vie2.anims.play('death', true);
				},
				loop: false
				})
		}

		if(this.vie == 0) {
			this.vie1.anims.play('death', true);
			this.vie2.anims.play('death', true);
			this.time.addEvent({
				delay: 500,
				callback: ()=>{
				this.vie3.anims.play('death', true);
				},
				loop: false
				})
		}


	//pointeur de niveau

		if(this.niv == 1) {
			this.transi.on("pointerup",()=>{
			this.scene.start('Scene1',{vie: this.vie, niv: this.niv});
			console.log("Scene1");
		})
		}
		
		if(this.niv == 2) {
			this.transi.on("pointerup",()=>{
			this.scene.start('Scene2',{vie: this.vie, niv: this.niv});
			console.log("Scene2");
		})
		}

	}

}


