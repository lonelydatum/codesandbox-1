var width = 800;
var height = 500;

var config = {
  width: width,
  height: height,
  physics: {
    default: "arcade"
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
var group;
var cat;
var cursors;

function preload() {
  this.load.image("stary", "pics/star.png");
  this.load.image("pussycat", "pics/cat.png");
}

function create() {
  group = this.physics.add.group({
    key: "stary",
    frameQuantity: 2
  });

  var stars = group.getChildren();

  stars.map(function (item) {
    var x = Phaser.Math.Between(0, 800);
    var y = Phaser.Math.Between(0, 500);
    item.setPosition(x, y);
  });

  cat = this.physics.add.image(width / 2, height / 2 - 50, "pussycat");

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.overlap(stars, cat, function (a, b) {
    a.disableBody(true, true);
  });
}

function update() {
  if (cursors.right.isDown) {
    cat.setVelocityX(100);
  } else if (cursors.left.isDown) {
    cat.setVelocityX(-100);
  } else if (cursors.down.isDown) {
    cat.setVelocityY(100);
  } else if (cursors.up.isDown) {
    cat.setVelocityY(-100);
  } else {
    cat.setVelocity(0);
  }
}
