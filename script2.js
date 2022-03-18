class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
    }
}

const acc1 = new Account('Devin', 'USD', 1111);
console.log(acc1)
