input.onButtonPressed(Button.A, function () {
    basic.showNumber(Revolutions)
})
input.onButtonPressed(Button.B, function () {
    elapsed_time = control.millis() - start
    minutes = elapsed_time / 60000
    RPM = Revolutions / minutes
    basic.showNumber(RPM)
})
let RPM = 0
let minutes = 0
let elapsed_time = 0
let start = 0
let Revolutions = 0
Revolutions = 0
start = control.millis()
basic.forever(function () {
    if (touch.getTap(touch.TouchPin.P0)) {
        Revolutions += 1
    }
    basic.pause(20)
})
