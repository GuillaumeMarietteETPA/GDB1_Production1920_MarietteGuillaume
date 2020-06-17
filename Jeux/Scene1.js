class Scene1 extends Phaser.Scene{
	constructor(){
		super({
			key:'Scene1',
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 300 }
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
	this.add.image(960,540,'fall2');
	
	this.homme2 = this.physics.add.staticGroup();
	this.homme2.create(960,830,'hom2').setScale(0.25).refreshBody();
	
	//caisse 1
	
	this.caisse = this.physics.add.sprite(960, -500, 'caisse').setScale(0.25);
	this.physics.add.collider(this.caisse,this.homme2,hitHomme, null, this);
	this.caisse.setInteractive();
	this.input.setDraggable(this.caisse);

    this.caisse.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;
	  });
	
	//caisse 2
	
	this.caisse2 = this.physics.add.sprite(960, -900, 'caisse').setScale(0.25);
	this.physics.add.collider(this.caisse2,this.homme2,hitHomme, null, this);
	this.caisse2.setInteractive();
	this.input.setDraggable(this.caisse2);
	
	this.caisse2.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;
	  });
	
	//caisse 3
	
	this.caisse3 = this.physics.add.sprite(960, -1400, 'caisse').setScale(0.25);
	this.physics.add.collider(this.caisse3,this.homme2,hitHomme, null, this);
	this.caisse3.setInteractive();
	this.input.setDraggable(this.caisse3);

	this.caisse3.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;
	  });


	this.fallwin = this.physics.add.sprite(2721, -1600, 'sol');
	this.physics.add.overlap(this.homme2, this.fallwin, WinPass, null, this);
	
	
	function WinPass(homme2, fallwin){
		this.winText = this.add.text(960,540, 'Win !', {fontSize: '100px', fill:'#000'}).setOrigin(0.5);
		this.score += 100;
		
		this.time.addEvent({
			delay: 1300,
			callback: ()=>{
			this.niv = 2;
			this.scene.start('transition',{vie: this.vie, niv: this.niv, score: this.score});
			console.log("Transition");
			},
			loop: false
			})
		
		
	}



}
	
	


update(){
	
		



	



	}

}

function hitHomme(homme2, caisse){
	this.vie --;
	this.niv = 2;
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
}
