import express from "express";
import dbConnection from "./src/db/connection/index";
import cors from "cors";

import { post_route , user_route } from "./src/routes/index";

const startServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  const app = express();
  app.use(cors())
  app.use(express.json())
  app.use(user_route)
  app.use(post_route)
 
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(
`🚀 Server started at localhost:: 4000 `
  );
  return { app };
};
startServer();

//hello oosaodoasodaosdoaosdoa