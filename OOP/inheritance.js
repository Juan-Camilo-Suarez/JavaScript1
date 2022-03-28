const admin = {name: 'Вася'};
const admin2 = {name: 'Петя'};

const isSuperadminParams = {
    isSuperadmin: true,
    checkAccess() {
        return true;
    }
};

admin.__proto__ = isSuperadminParams;

console.log(admin);
console.log(admin.isSuperadmin);
console.log(admin.checkAccess());
