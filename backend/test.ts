const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.hero.create({
    data: {
      content: "Create a Node.js tasks application",
    },
  });

  await prisma.hero.create({
    data: {
      content: "Creating some Java APIs",
    },
  });

  await prisma.hero.create({
    data: {
      content: "Set up some Flask APIs",
    },
  });

  const tasks = await prisma.tasks.findMany();

  console.dir(tasks, { depth: Infinity });
}
