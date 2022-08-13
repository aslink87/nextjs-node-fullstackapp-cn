"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        yield prisma.hero.create({
            data: {
                content: "Create a Node.js tasks application",
            },
        });
        yield prisma.hero.create({
            data: {
                content: "Creating some Java APIs",
            },
        });
        yield prisma.hero.create({
            data: {
                content: "Set up some Flask APIs",
            },
        });
        const tasks = yield prisma.tasks.findMany();
        console.dir(tasks, { depth: Infinity });
    });
}
//# sourceMappingURL=test.js.map