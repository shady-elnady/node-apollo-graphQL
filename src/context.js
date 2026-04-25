const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const APP_SECRET = "app_secret";



function getUserId(req) {
    if (req) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            new Error("Hed=ader Not Found")
        }

        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            new Error("Token Not Found")
        }

        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }

    throw new Error("Not authentication");
}


module.exports = ({ req }) => {

    return {
        ...req,
        prisma: new PrismaClient(),
        userId: req && req.headers.authorization ? getUserId(req) : null,
    }
};