import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
	prefix: "transactions",
});

app.addHook("preHandler", async (request, reply) => {
	console.log(`[${request.method}] ${request.url}`);
});
