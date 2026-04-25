const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const APP_SECRET = "app_secret";


const signup = (parent, args, { users }) => {
    const { name, email, password, age } = args;
    const hashedPassword = bcrypt.hash(password, 10);

    let newUser = {
        id: 3,
        name,
        email,
        password: hashedPassword,
        age,
    }
    users.push(newUser);
    const token = jwt.sign({ userId: newUser.id }, APP_SECRET);
    return {
        user: newUser,
        token
    };
};


const logIn = (parent, args, { users, ...req }) => {
    const { email, password } = args;

    const user = users.find(user => email === user.email) || null;

    if (!user) {
        throw new Error("User Not Found");
    }

    const valid = bcrypt.compare(password, user.password);

    if (!valid) {
        throw new Error("Invalid Password");
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
        user,
        token
    };
};


module.exports = {
    signup,
    logIn
};