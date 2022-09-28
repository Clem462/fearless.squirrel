function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle*-1);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    var km = enemy.graphic.position.x + WIDTH / 2;
    if (km < 0)
        enemy.turnLeft(Math.PI);
    if (km > WIDTH)
        enemy.turnLeft(Math.PI);
    enemy.accelerate(moveDistance);

    player1.move();
    enemy.move();
    controls.update();
}