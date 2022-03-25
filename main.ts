let num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    num1 = randint(1, 9)
    basic.showNumber(num1)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    num2 = randint(1, 9)
    basic.showNumber(num2)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.showNumber(num1 * num2)
})
