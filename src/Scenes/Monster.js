class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.smileX = 300;
        this.smileY = 350;
        
        this.leftArmX = 210;
        this.leftArmY = 410;

        this.rightArmX = 390;
        this.rightArmY = 410;

        this.leftLegX = 250;
        this.leftLegY = 460;

        this.rightLegX = 350;
        this.rightLegY = 460;

        this.mouthSmileX = 300;
        this.mouthSmileY= 370;

        this.mouthFangsX = 300;
        this.mouthFangsY= 375;

        this.leftEyeX = 265;
        this.leftEyeY = 330;

        this.rightEyeX = 335;
        this.rightEyeY = 330;
        
        this.leftEarX = 230;
        this.leftEarY = 290;

        this.rightEarX = 370;
        this.rightEarY = 290;

        this.leftHornX = 255;
        this.leftHornY = 285;

        this.rightHornX = 345;
        this.rightHornY = 285;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_blue_ear.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_blue_ear.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueC.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueE.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueE.png");

        my.sprite.mouthSmile = this.add.sprite(this.mouthSmileX, this.mouthSmileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthFangs = this.add.sprite(this.mouthFangsX, this.mouthFangsY, "monsterParts", "mouthB.png");

        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.leftEye.flipX = true;
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_angry_green.png");

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_green_horn_small.png");

        my.sprite.mouthFangs.visible = false;

        this.input.keyboard.on('keydown', (event) => {
            console.log("A key was pressed.");
            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
                // console.log(event.keyCode);
                my.sprite.mouthSmile.visible = true;
                my.sprite.mouthFangs.visible = false;
            } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
                // console.log(event.keyCode);
                my.sprite.mouthSmile.visible = false;
                my.sprite.mouthFangs.visible = true;
            } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.A) {
                // console.log(event.keyCode);
                my.sprite.bodyX -= 10;
                // my.sprite.smileX -= 10;
                // my.sprite.leftArmX += 10;
                // my.sprite.rightArmX += 10;
                // my.sprite.leftLegX += 10;
                // my.sprite.rightLegX += 10;
                // my.sprite.mouthSmileX += 10;
                // my.sprite.mouthFangsX += 10;
                // my.sprite.leftEyeX += 10;
                // my.sprite.rightEyeX += 10;
                // my.sprite.leftEarX += 10;
                // my.sprite.rightEarX += 10;
                // my.sprite.leftHornX += 10;
                // my.sprite.rightHornX += 10;
                
            } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
                console.log(event.keyCode);
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability


       
    }

}