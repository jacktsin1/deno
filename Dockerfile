FROM denoland/deno:latest
WORKDIR /app
COPY . .
CMD ["run", "--allow-net", "server.ts"]