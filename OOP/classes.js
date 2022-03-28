class User {
    constructor(name) {
        this.name = name;
        this.loginCount = 0;
    }

    sayHi() {
        console.log(`Привет, я ${this.name}`);
    }

    toString() {
        return this.name;
    }

    #incrementLoginCount() {
        this.#internalLoginCount++;
    }
    login() {
        this.#incrementLoginCount();
    }

    #internalLoginCount = 0;
    set loginCount(count) {
        this.#internalLoginCount = count;
    }
    get loginCount() {
        return this.#internalLoginCount;
    }
}

const vasya = new User("Вася");
console.log(vasya.name);
vasya.sayHi();

console.log(vasya + "");


vasya.login();
vasya.login();
vasya.login();
vasya.login();

vasya.loginCount = 1;
console.log(vasya.loginCount, vasya);
