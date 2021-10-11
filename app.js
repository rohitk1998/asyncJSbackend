import express from "express";
import dbConnection from "./src/db/connection/index";
import cors from "cors";

import blogroute from "./src/routes/index"

const startServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  const app = express();
  app.use(cors())
  app.use(express.json())
  app.use(blogroute)
 
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(
`🚀 Subscriptions ready at ws://localhost:4000`
  );
  return { app };
};
startServer();
//ddddini