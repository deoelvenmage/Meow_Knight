import pop from "./pop/index.js";
const { Game, KeyControls, Camera, entity, math } = pop;
import Player from "./entities/player/player.mjs";
import Level from "./resources/Levels/testLevel.mjs";
import MouseControls from "./pop/controls/MouseControls.js";
import Baddie from "./entities/baddies/baddie.mjs";
import constants from "./constants/constants.mjs";
const {goblin_animations} = constants; 

const game = new Game(window.innerWidth, window.innerHeight - 4);
const {scene, w, h} = game; 
const level = new Level(w * 4, h * 4)
const controls = new KeyControls(); 
const mousecontrols = new MouseControls(); 

const player = new Player(controls, mousecontrols);
player.pos = {x: w / 4 + 140, y: h / 4};

const camera = scene.add(new Camera(player, {w: w, h: h}, {w: level.w, h: level.h}))
camera.add(level)

const baddie = new Baddie(player, 1, goblin_animations, goblin_animations["idle"]);
baddie.pos = {x: w/4 , y: h/4}

camera.add(player);
camera.add(baddie)

entity.addDebug(baddie)
entity.addDebug(player)


game.run(() => {
    if(entity.hurtToHit(player, baddie)) baddie.dead = true

});