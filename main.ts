namespace SpriteKind {
    export const teleporteur3 = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const teleporteurjardin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    tiles.placeOnRandomTile(boss, sprites.dungeon.collectibleRedCrystal)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporteur3, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`niveau5`)
    teleporteur_boss.destroy(effects.disintegrate, 500)
    TELEPORTEUR_JARDIN = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 5 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . 7 7 . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.teleporteurjardin)
    tiles.placeOnRandomTile(TELEPORTEUR_JARDIN, sprites.castle.tileDarkGrass2)
    téléporteur = sprites.create(img`
        ..aa.......a........
        .a99aa....a9a....a..
        ..aa99aa...a9a..a9a.
        ....aa99a..a9a..a9a.
        ......aa9aa9a..a9a..
        ..aa....aaa9a..a9a..
        .a99aa..aa9a..a9a...
        a9aa99aaaa9a..a9a...
        .a..aa99aaaaaa9a....
        ....aaaaa9aaaaa.....
        ...a9aaaaaa99aa..a..
        ..a9a..a9aaaa99aa9a.
        ..a9a..a9aa..aa99a..
        .a9a..a9aaa....aa...
        .a9a..a9aa9aa.......
        a9a..a9a..a99aa.....
        a9a..a9a...aa99aa...
        .a....a9a....aa99a..
        .......a.......aa...
        ....................
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(téléporteur, sprites.dungeon.floorLight4)
    boss = sprites.create(img`
        .........................fffff..........
        ...........ffff..............f..........
        ............fffffff..........fffff......
        .............ffffffff........f222fff....
        .............ffffffff........ffff22ff2ff
        ..............ffffffff........ffffffffff
        ..............fffffffffff....fffffffffff
        ................fffffffffffffff.ffffffff
        .................ffffffffffffff.........
        ....................fffffffffff.........
        ...............fffffffffffffff..........
        ............fffffffffffffffff...........
        ..........fffffffffffffffffff...........
        ........ffffffffffffffffffff............
        .......fffffffffffffffffffff............
        .....fffffffffffffffffff.fff............
        ....fffffffffffffffff....fff............
        ....fffffffffffff........ffffff....f....
        ...ffffffffffff...........fffffff.ffff..
        ..ffffffffffff.............fffffffff....
        .ffffffffffff.................ffffffff..
        .fffffffffff....................ffff....
        ffffffffffff......................ffff..
        fffffffffff........................f....
        fffffffffff.............................
        fffffffffff.............................
        ffffffffff..............................
        ffffffffff..............................
        fffffffff...............................
        fffffffff...............................
        fffffffff...............................
        ffffffff................................
        ffffffff................................
        fffffff.................................
        fffffff.................................
        .fffff..................................
        .fffff..................................
        .ffff...................................
        ..fff...................................
        ..ff....................................
        `, SpriteKind.boss)
    tiles.placeOnRandomTile(boss, sprites.dungeon.collectibleRedCrystal)
    boss.follow(mySprite, 80)
    statusbar = statusbars.create(50, 4, StatusBarKind.EnemyHealth)
    statusbar.max = 1000
    statusbar.value = 1000
    statusbar.attachToSprite(boss)
    statusbar.setColor(7, 2, 3)
})
controller.combos.attachCombo("uuddlrlrba", function () {
    music.playMelody("C E G C5 G E C - ", 120)
    princesse = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(princesse, sprites.dungeon.collectibleInsignia)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
    if (controller.down.isPressed() && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . f 1 f 1 f 1 f . . . . . 
            . . . . . f 1 1 1 f . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . f f e f f . . . . . . 
            . . . . f d d d d d f . . . . . 
            . . . . . f d d d f . . . . . . 
            . . . . . . f d f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `, mySprite, 0, 100)
    }
})
info.onCountdownEnd(function () {
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . f 2 b 2 f . . . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . f f . . . f f . . . . . 
        . . f f f . . . . . f f f . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f f f f f f f f f f f f . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Enemy)
    mysprite_5 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mysprite_6 = sprites.create(img`
        ........................
        .......fffffffff........
        .....fffffffffffff......
        ...fffffffffffffffff....
        ...ff2fffffffffff2ff....
        ...fff22fffffff22fff....
        ...fffff22fff22fffff....
        ...ff2fffffffffff2ff....
        ...fff22fffffff22fff....
        ...fffff22fff22fffff....
        ....fffffffffffffff.....
        ......fffffffffff.......
        ......ff.......ff.......
        ......ff.......ff.......
        ......ff.......ff.......
        .......ff.....ff........
        ........fff.fff.........
        .........ff.ff..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mysprite_5, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mysprite_6, sprites.dungeon.collectibleInsignia)
    mySprite2.setVelocity(10, 10)
    mySprite3.setVelocity(15, 15)
    mySprite4.setVelocity(25, 25)
    mysprite_5.setVelocity(10, 10)
    mysprite_6.setVelocity(10, 10)
    mySprite2.follow(mySprite, 40)
    mySprite3.follow(mySprite, 43)
    mySprite4.follow(mySprite, 55)
    mysprite_5.follow(mySprite, 50)
    mysprite_6.follow(mySprite, 25)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    boss.destroy(effects.disintegrate, 500)
    game.showLongText("VOUS AVEZ VAINCU LE DEMON ET LIBERE LA PRINCESSE VOUS ETES UN HERO", DialogLayout.Bottom)
    princesse = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(princesse, sprites.dungeon.floorLightMoss)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
    if (controller.up.isPressed() && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f d f . . . . . . . 
            . . . . . f d d d f . . . . . . 
            . . . . f d d d d d f . . . . . 
            . . . . . f f e f f . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . . f e f . . . . . . . 
            . . . . . f 1 1 1 f . . . . . . 
            . . . . f 1 f 1 f 1 f . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    false
    )
    if (controller.right.isPressed() && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . . . . f . . . 
            . f 1 f . . . . . . . f d f . . 
            . . f 1 f f f f f f f f d d f . 
            . f 1 1 e e e e e e e e d d d f 
            . . f 1 f f f f f f f f d d f . 
            . f 1 f . . . . . . . f d f . . 
            . . f . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("VOUS PARTEZ AVEC LA PRINCESSE ET VIVEZ UNE VIE HEUREUSE", DialogLayout.Full)
    game.splash("CREATEURS : QUENTIN JOUSON / ARIA AYMERICK / BERTAND BOUTIN EYMERIC           AYANT PARTICIPE A LA CREATION : SENGLER ANTOINE / lEFRANCOIS MATHIAS")
    game.over(true)
})
info.onLifeZero(function () {
    music.wawawawaa.play()
    game.showLongText("LES MONSTRES ON EU RAISON DE VOUS ET LA PRINCESSE RESTERA ENFERMEE A JAMAIS", DialogLayout.Full)
    game.splash("CREATEURS : QUENTIN JOUSON / ARIA AYMERICK / BERTAND BOUTIN EYMERIC           AYANT PARTICIPE A LA CREATION : SENGLER ANTOINE / lEFRANCOIS MATHIAS", "")
    game.over(false)
})
controller.combos.attachCombo("ULDRULDRBB", function () {
    info.changeLifeBy(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`niveau2`)
    téléporteur.destroy(effects.disintegrate, 500)
    TELEPORTEUR_JARDIN = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 5 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . 7 7 . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.teleporteurjardin)
    tiles.placeOnRandomTile(TELEPORTEUR_JARDIN, sprites.castle.tileDarkGrass2)
    teleporteur_boss = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.teleporteur3)
    tiles.placeOnRandomTile(teleporteur_boss, sprites.dungeon.chestOpen)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporteurjardin, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`niveau1`)
    TELEPORTEUR_JARDIN.destroy(effects.disintegrate, 500)
    téléporteur = sprites.create(img`
        ..aa.......a........
        .a99aa....a9a....a..
        ..aa99aa...a9a..a9a.
        ....aa99a..a9a..a9a.
        ......aa9aa9a..a9a..
        ..aa....aaa9a..a9a..
        .a99aa..aa9a..a9a...
        a9aa99aaaa9a..a9a...
        .a..aa99aaaaaa9a....
        ....aaaaa9aaaaa.....
        ...a9aaaaaa99aa..a..
        ..a9a..a9aaaa99aa9a.
        ..a9a..a9aa..aa99a..
        .a9a..a9aaa....aa...
        .a9a..a9aa9aa.......
        a9a..a9a..a99aa.....
        a9a..a9a...aa99aa...
        .a....a9a....aa99a..
        .......a.......aa...
        ....................
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(téléporteur, sprites.dungeon.floorLight4)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    false
    )
    if (controller.left.isPressed() && controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . . . . f . . 
            . . f d f . . . . . . . f 1 f . 
            . f d d f f f f f f f f 1 f . . 
            f d d d e e e e e e e e 1 1 f . 
            . f d d f f f f f f f f 1 f . . 
            . . f d f . . . . . . . f 1 f . 
            . . . f . . . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
})
let mysprite_6: Sprite = null
let mysprite_5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let princesse: Sprite = null
let statusbar: StatusBarSprite = null
let TELEPORTEUR_JARDIN: Sprite = null
let teleporteur_boss: Sprite = null
let boss: Sprite = null
let téléporteur: Sprite = null
let mySprite: Sprite = null
game.splash("BIENVENUE DANS LE JEU DUEL")
game.setDialogFrame(img`
    88888..8888888888888888....88888.
    87768888777877787778777888867778.
    87777686767876767678767688777778.
    87767767667676676676766786776768.
    8677676767767767677677678676778..
    .877768777686767776867678667768..
    .886668888888888888888888886688..
    .888888866666666666666668877768..
    88677786666666666666666668766778.
    87766686666666666666666668776678.
    87667786666666666666666668677778.
    87777686666666666666666668866888.
    88866886666666666666666668677778.
    87777686666666666666666668776678.
    87667786666666666666666668666778.
    87766786666666666666666668777688.
    88677786666666666666666668766778.
    87766686666666666666666668776678.
    87667786666666666666666668677778.
    87777686666666666666666668866888.
    88866886666666666666666668677778.
    87777686666666666666666668776678.
    87667786666666666666666668666778.
    87766786666666666666666668777688.
    .867778866666666666666668888888..
    .886688888888888888888888866688..
    .867766876768677767686777867778..
    .8776768767767767677677676767768.
    86767768766767667667676676776778.
    87777788676787676767876768677778.
    87776888877787778777877788886778.
    88888..88888888888888888....8888.
    .................................
    `)
game.showLongText("VOUS ETES UN AVENTURIER VENU DELIVRER LA PRINCESSE MAIS VOUS VOUS ETES FAIT PIEGER PAR LES MONSTRES ", DialogLayout.Center)
game.showLongText("LE BUT DE CE JEU EST DE MARQUER UN MAXIMUM DE POINTS ET TUER LE DEMON DANS SON DONJON SANS SE FAIRE TUER PAR LES ENNEMIS. ATTENTION TOUt CE QUI BOUGE VEUT VOUS TUER!", DialogLayout.Full)
game.showLongText("BOUGEZ AVEC LES FLECHES DIRECTIONELLES. POUR TIRER, RESTEZ APPUYER SUR A ET LA FLECHE DANS LA DIRECTION DAN LAQUELLE VOUS VOULEZ TIRER. ", DialogLayout.Full)
game.showLongText("TOUTES LES 3 SECONDES LES ENNEMIS APPARAISSENT SUR LES TELEPORTEURS", DialogLayout.Full)
game.showLongText("IL Y AS UN TELEPORTEUR QUI VA T'AMENER DANS UN JARDIN ET LA BAS UN AUTRE POUR T'AMENER DANS LE DONJON DU DEMON", DialogLayout.Full)
game.showLongText("UNE CELEBRE COMBINAISON DE TOUCHES EST PRESENTE DANS CE JEU A TOI DE LA RETROUVER ;)", DialogLayout.Full)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(10)
tiles.setTilemap(tilemap`niveau1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
mySprite.setVelocity(100, 100)
téléporteur = sprites.create(img`
    ..aa.......a........
    .a99aa....a9a....a..
    ..aa99aa...a9a..a9a.
    ....aa99a..a9a..a9a.
    ......aa9aa9a..a9a..
    ..aa....aaa9a..a9a..
    .a99aa..aa9a..a9a...
    a9aa99aaaa9a..a9a...
    .a..aa99aaaaaa9a....
    ....aaaaa9aaaaa.....
    ...a9aaaaaa99aa..a..
    ..a9a..a9aaaa99aa9a.
    ..a9a..a9aa..aa99a..
    .a9a..a9aaa....aa...
    .a9a..a9aa9aa.......
    a9a..a9a..a99aa.....
    a9a..a9a...aa99aa...
    .a....a9a....aa99a..
    .......a.......aa...
    ....................
    `, SpriteKind.Food)
tiles.placeOnRandomTile(téléporteur, sprites.dungeon.floorLight4)
game.onUpdateInterval(5000, function () {
    info.startCountdown(4)
})
