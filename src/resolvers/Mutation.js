const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const APP_SECRET = "app_secret";


const signup = async (parent, args, { prisma }) => {
    const { name, email, password, age } = args;
    const hashedPassword = bcrypt.hash(password, 10);

    let newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            age,
        }
    });
    const token = jwt.sign({ userId: newUser.id }, APP_SECRET);
    return {
        user: newUser,
        token
    };
};


const logIn = async (parent, args, { prisma, ...req }) => {
    const { email, password } = args;

    const user = await prisma.user.findUnique({ where: { email } }) || null;

    if (!user) {
        throw new Error("User Not Found");
    }

    const valid = await bcrypt.compare(password, user.password);

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