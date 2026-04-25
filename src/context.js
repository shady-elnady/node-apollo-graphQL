const { PrismaClient } = require("@prisma/client");

module.exports = ({ req }) => {

    return {
        ...req,
        prisma: new PrismaClient(),
    }
};