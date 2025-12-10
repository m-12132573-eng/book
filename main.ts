radio.onReceivedNumber(function (receivedNumber) {
    if (led.point(0, 0)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.pause(100)
    }
    break;
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
