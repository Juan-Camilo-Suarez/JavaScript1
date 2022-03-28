function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log(`Меня зовут ${this.name}`);
    }

    this.toString = function() {
        return this.name;
    }
}

const admin = new User("Вася");
console.log(admin);
admin.sayHi();

const admin2 = new User("Петя");
console.log(admin2);
admin2.sayHi();

console.log(admin2 + "")
