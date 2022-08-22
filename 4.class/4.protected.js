class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = this.voltage
    }
}

console.log(CoffeeMachine)
/*
class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = this.voltage
    }
}
*/
console.log(Object.keys(CoffeeMachine)) //[]
console.log(CoffeeMachine.prototype) // {constructor: ƒ}

let machine = new CoffeeMachine(220)
console.log(machine) // CoffeeMachine {waterAmount: undefined, voltage: undefined}

machine.waterAmount = 1
machine.voltage = 100
console.log(machine)
//
CoffeeMachine = class {
    _waterAmount

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype)

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine)
console.log(machine.waterAmount)

machine._waterAmount = 11
console.log