import express from "express";
import dbConnection from "./src/db/connection/index";
import cors from "cors";

import { post_route , user_route } from "./src/routes/index";

   dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  const app = express();
  app.use(cors())
  app.use(express.json())
  app.use(user_route)
  app.use(post_route)
  
app.listen(process.env.PORT || 4000, 
	() => console.log("Server is running..."));

