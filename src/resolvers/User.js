const User = {
    id: (parent) => parent.id,
    name: (parent) => parent.name.toUpperCase(),
    age: (parent) => parent.age + 10,
};



module.exports = User;