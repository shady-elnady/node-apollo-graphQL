const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

async function main() {
    const newLink = await prisma.link.create({
        data: {
            title: "first Link",
            url: "URL",
            description: "Description",
        }
    });

    const links = await prisma.link.findMany();
    console.log(links);
}


main().catch(e => { throw e }).finally(async () => {
    await prisma.$disconnect();
})