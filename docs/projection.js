let percentage = 0
let cap_voltage = 0
let on_perc = 30

basic.forever(function () {

    cap_voltage = pins.analogReadPin(AnalogPin.P0)
    percentage = cap_voltage / 10

    //basic.showNumber(cap_voltage)

    if (percentage > on_perc) {

        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)

        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {

        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)

        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
    }
})
