class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.cutScene = new CutSceneScreen(this.game, 0, 0 );
       // this.fireElemental = new FireElemental(this.game, 0, 0 );
        //this.zombie = new Zombie(this.game, 0, 0 );
        //this.zombie1 = new ZombieSmall(this.game, 0, 0 );
        //this.orc = new Orc(this.game, 0, 0 );
        //this.wizard = new Wizard(this.game, 0, 0);

    

        this.game.addEntity(this.cutScene);
       // this.game.addEntity(this.fireElemental);
        //this.game.addEntity(this.zombie);
        //this.game.addEntity(this.zombie1);
        //this.game.addEntity(this.wizard);
        //this.game.addEntity(this.orc);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
      
    };

    draw(ctx) {
       
    };
};

