const admin = {name: 'Вася'};
const admin2 = {name: 'Петя'};

const isSuperadminParams = {
    isSuperadmin: true,
    checkAccess() {
        return true;
    }
};

function User(name) {
    this.name = name;
}

function Admin(name) {
    this.name = name;
}
Admin.prototype = isSuperadminParams


const vasya = new User("Вася");
console.log(vasya);

const petya = new Admin("Петя");
console.log(petya);

