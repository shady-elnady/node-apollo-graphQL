const Query = {
    hello: () => "Hello from Apollo",
    usersGet: async (parent, args, { prisma, userId }) => {
        console.log("userId", userId);
        return await prisma.user.findMany();
    },
    userGet: async (parent, { id }, { prisma }) => {
        return await prisma.user.finUnique({ where: { id: id } });
    },
    links: async () => {
        const links = await prisma.link.findMany();
        return links;
    }
};


module.exports = Query;