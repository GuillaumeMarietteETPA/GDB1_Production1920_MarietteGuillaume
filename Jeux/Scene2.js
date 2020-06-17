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
	console.log('init', data);
    this.vie = data.vie;
	this.niv = data.niv;
	this.score = data.score;
}


preload(){
	
	
}

create(){
	this.add.image(960,540,'taupe2');
	
	this.tp = 0;
	
	//ligne taupe haut
	this.taupe1 = this.physics.add.sprite(1320,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	this.taupe1.setInteractive();
	this.taupe2 = this.physics.add.sprite(852,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	this.taupe2.setInteractive();
	this.taupe3 = this.physics.add.sprite(385,194, 'taupeS').setOrigin(0,0).setScale(0.87);
	this.taupe3.setInteractive();
	
	//ligne taupe millieu
	this.taupe4 = this.physics.add.sprite(1392,394, 'taupeS').setOrigin(0,0);
	this.taupe4.setInteractive();
	this.taupe5 = this.physics.add.sprite(836,394, 'taupeS').setOrigin(0,0);
	this.taupe5.setInteractive();
	this.taupe6 = this.physics.add.sprite(280,394, 'taupeS').setOrigin(0,0);
	this.taupe6.setInteractive();

	//ligne taupe bas
	this.taupe7 = this.physics.add.sprite(1500,610, 'taupeS').setOrigin(0,0).setScale(1.20);
	this.taupe7.setInteractive();
	this.taupe8 = this.physics.add.sprite(812,610, 'taupeS').setOrigin(0,0).setScale(1.20);
	this.taupe8.setInteractive();
	this.taupe9 = this.physics.add.sprite(124,610, 'taupeS').setOrigin(0,0).setScale(1.20);
	this.taupe9.setInteractive();
	
	
	
	this.anims.create({
		key:'taupanim',
		frames: this.anims.generateFrameNumbers('taupeS', {start: 0, end: 2}),
		frameRate: 10
	});
	
	this.anims.create({
		key:'tauprevers',
		frames: this.anims.generateFrameNumbers('taupeR', {start: 1, end: 2}),
		frameRate: 10
	});
	
	this.time.addEvent({
    delay: 500,
    callback: ()=>{
       this.taupe1.anims.play('taupanim', true);
	   
    },
    loop: false
})

	this.time.addEvent({
    delay: 1200,
    callback: ()=>{
       this.taupe5.anims.play('taupanim', true);
	   
    },
    loop: false
})

	this.time.addEvent({
    delay: 2400,
    callback: ()=>{
       this.taupe6.anims.play('taupanim', true);
	   
    },
    loop: false
})

		this.time.addEvent({
    delay: 1800,
    callback: ()=>{
       this.taupe8.anims.play('taupanim', true);
	   
    },
    loop: false
})

	
	this.time.addEvent({
    delay: 5500,
    callback: ()=>{
       this.vie --;
		this.niv = 3;
		this.deathText = this.add.text(960,540, 'Lose !', {fontSize: '100px', fill:'#000'}).setOrigin(0.5);
		this.physics.pause();
		this.gameOver=true;
	
		this.time.addEvent({
		delay: 1300,
		callback: ()=>{      
		this.scene.start('transition',{vie: this.vie, niv: this.niv, score: this.score});
		console.log("Transition");
		},
		loop: false
	})

	   
    },
    loop: false
})





}
	
	


update(){
	
		this.taupe1.on("pointerup",()=>{
		this.taupe1.anims.play('tauprevers', true);	
		this.tp ++;
		console.log("Tp");
		})

		this.taupe5.on("pointerup",()=>{
		this.taupe5.anims.play('tauprevers', true);	
		this.tp ++;
		console.log("Tp");
		})

		this.taupe6.on("pointerup",()=>{
		this.taupe6.anims.play('tauprevers', true);	
		this.tp ++;
		console.log("Tp");
		})
		
		this.taupe8.on("pointerup",()=>{
		this.taupe8.anims.play('tauprevers', true);	
		this.tp ++;
		console.log("Tp");
		})

		
		
		
		
		
		
		
		if (this.tp == 1) {
			this.winText = this.add.text(960,540, 'Win !', {fontSize: '100px', fill:'#000'}).setOrigin(0.5);
			this.score += 100;
			
			this.time.addEvent({
			delay: 1300,
			callback: ()=>{
			this.niv = 3;
			this.scene.start('transition',{vie: this.vie, niv: this.niv, score: this.score});
			console.log("Transition");
			},
			loop: false
			})
			
			
		}
		
		
		
		
		
		
		

	}

}


