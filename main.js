const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/cutscene.png");

ASSET_MANAGER.queueDownload("./sprites/fire_elemental.png");
ASSET_MANAGER.queueDownload("./sprites/wizard.png");
ASSET_MANAGER.queueDownload("./sprites/zombie.png");
ASSET_MANAGER.queueDownload("./sprites/orc_2.png");
ASSET_MANAGER.queueDownload("./sprites/zombie-attack-right.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);
	
	new SceneManager(gameEngine);
	gameEngine.start();
});
