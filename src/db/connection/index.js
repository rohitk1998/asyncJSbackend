import mongoose from "mongoose";

const dbConnection = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(`mongodb+srv://root:root@cluster0.v5abc.mongodb.net/JS?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useNewUrlParser: true,
      });

    
    const db = mongoose.connection;

    db.on("error", () => {
      console.error.bind(console, "connection error:");
      reject(
        new Error(
          "Connection error has occurred when trying to connect to the database!"
        )
      );
    });
    db.once("open", () => resolve("🚀 Successful database connection."));
  });

export default dbConnection;