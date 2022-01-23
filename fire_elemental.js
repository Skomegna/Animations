class FireElemental {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y} );

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/fire_elemental.png");
        
        console.log(this.spritesheet);

        this.animation = new Animator(this.spritesheet, 0, 0, 48, 48, 6, 0.21, false, true);
        this.animationb = new Animator(this.spritesheet, 48*6, 0, 48, 48, 6, 0.21,false, true);
        this.animationc = new Animator(this.spritesheet, 48*12, 0, 48, 48, 6, 0.21, false, true);
        this.animationd = new Animator(this.spritesheet, 48*18, 0, 48, 48, 6, 0.21, false, true);
        this.animatione = new Animator(this.spritesheet, 48*24, 0, 48, 48, 6, 0.21, false, true);
        this.animationf = new Animator(this.spritesheet, 48*30, 0, 48, 48, 6, 0.21, false, true);

        this.animationg = new Animator(this.spritesheet, 48*36, 0, 48, 48, 6, 0.21, false, true);
        this.animationh = new Animator(this.spritesheet, 48*42, 0, 48, 48, 4, 0.21, false, true);
        this.animationi = new Animator(this.spritesheet, 48*48, 0, 48, 48, 4, 0.21, false, true);
        this.animationj = new Animator(this.spritesheet, 48*54, 0, 48, 48, 4, 0.21, false, true);
        
    };


    update() {

    };

    draw(ctx) {
        let x = 100;
        let y = 100;
        let w = 51;
        let h = 105;

        ctx.save();
        // ctx.scale(-1, -1);
        //ctx.drawImage(this.spritesheet, 110, 48, 17, 36, x, y, w, h);
        // ctx.restore


         this.animation.drawFrame(this.game.clockTick, ctx, 100, 400, 3)
        this.animationb.drawFrame(this.game.clockTick, ctx, 100, 100, 3)

        this.animationc.drawFrame(this.game.clockTick, ctx, 100, 250, 3)

        this.animationd.drawFrame(this.game.clockTick, ctx, 250, 250, 3)
        this.animatione.drawFrame(this.game.clockTick, ctx, 250, 100, 3)

        this.animationf.drawFrame(this.game.clockTick, ctx, 100, 550, 3)

        this.animationg.drawFrame(this.game.clockTick, ctx, 250, 400, 3)

        this.animationh.drawFrame(this.game.clockTick, ctx, 250, 550, 3)
        this.animationi.drawFrame(this.game.clockTick, ctx, 250, 700, 3)

        this.animationj.drawFrame(this.game.clockTick, ctx, 100, 700, 3)


        // var offscreenCanvas = document.createElement('canvas');
        // offscreenCanvas.width = 48;
        // offscreenCanvas.height = 48;
        // var offscreenCtx = offscreenCanvas.getContext('2d');
        // offscreenCtx.save();
        // offscreenCtx.translate(48, 48);
        // offscreenCtx.rotate(Math.PI);
        // offscreenCtx.translate(-48, -48);
        // offscreenCtx.drawImage(this.spritesheet, 110, 48, 17, 35, 8, 0, 17, 35);
        // offscreenCtx.restore();
        

        //ctx.drawImage(offscreenCanvas, x-24, y, h, h);
    };



};