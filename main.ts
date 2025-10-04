input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.InBackground)
})
