// * Les objets en JS

const user = {
    firstname: 'Laurent',
    age: 25
}

console.log(user.firstname);
console.log(user['firstname']);

const user2 = {
    firstnam: 'Laurent',
    age: 25,
    lastname: 'oclock'
};

function User(data) {
    if(!data.firstname) {
        throw new Error('une erreur');
    }
    return {
        firstname: data.firstname,
        age: data.age,
    };
}

const userObj = new User(user);
console.log(userObj);
const userObj2 = new User(user2);
console.log(userObj2);
