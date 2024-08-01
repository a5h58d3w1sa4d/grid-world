let x = 0
player.onChat("grid", function () {
    for (let index = 0; index <= 19; index++) {
        x = index * 3
        blocks.fill(
        AIR,
        pos(x, -4, 0),
        pos(x, 5, 60),
        FillOperation.Replace
        )
        blocks.fill(
        AIR,
        pos(0, -4, x),
        pos(60, 5, x),
        FillOperation.Replace
        )
    }
})
