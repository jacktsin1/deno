import { serve } from 'https://deno.land/std@0.107.0/http/server.ts';

const server = serve({ port: 8000 });
console.log('Deno server running on http://localhost:8000');

for await (const req of server) {
  req.respond({ body: 'Hello from Deno!\n' });
}
