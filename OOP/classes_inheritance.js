class BaseUser {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
    //esto es para hacer un clase privada
    #internalLoginCount = 0;

    get loginCount() {
        return this.#internalLoginCount;
    }

    login() {
        this.#internalLoginCount++;
    }

    static checkStatus() {
        return true;
    }
}

class User extends BaseUser {
}

class Admin extends BaseUser {
    login() {
        console.log('ВХОДИТ АДМИН');
        super.login();
    }

    superLogin() {
        for (let i = 0; i < 10; i++) {
            this.login();
        }
    }
}

const vasya = new User("Вася");
vasya.login();
vasya.login();
console.log(`${vasya} вошел ${vasya.loginCount} раз`, vasya);


const petya = new Admin('Петя');
petya.superLogin();
console.log(`${petya} вошел ${petya.loginCount} раз`, petya);


console.log(
    vasya instanceof User,
    vasya instanceof Admin,
    vasya instanceof Object
);

console.log(User.checkStatus());
