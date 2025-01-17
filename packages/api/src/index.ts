import { connectToDB } from "./config/db";
import { env } from "./config/envConfig";
import { createServer, logger } from "./server";

const server = createServer();

server.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  logger.info(
    ` 🏁 Server (${NODE_ENV}) running on port http://${HOST}:${PORT} 🚀`
  );
  connectToDB();
});
