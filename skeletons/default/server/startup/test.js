class A {
    constructor() {
    }
}

class B extends A {
    _a = 1
    constructor() {
        super()

        console.log(this.hello)
    }

    hello() {

    }

    get a() {
        return this._a
    }
}

var b = new B()
