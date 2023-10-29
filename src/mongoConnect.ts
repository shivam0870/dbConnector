import mongoose from "mongoose";

async function connect(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Database!");
    
  } catch (err) {
    console.log("Error Connection failed!");
  }
}

export{connect}