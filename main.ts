input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
    }
})
