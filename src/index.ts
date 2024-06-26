import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(_) {
    const body = figlet.textSync("Hello, Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
