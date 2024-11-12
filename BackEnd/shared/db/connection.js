// change the user url to the new url(Make a new DB connection)
const userURL = "mongodb://localhost:27017/QuizDb";

import mongoose from "mongoose";

const DataConnection= mongoose.connect(userURL);
  DataConnection.then(data=>{
    console.log(" DB Connected..");
}).catch(err=>{
    console.log("Error during DB Connection...", err);
});

export  default mongoose;