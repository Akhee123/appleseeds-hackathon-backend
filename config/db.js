import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionString = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log( `DB connected: ${connectionString.connection.host}`)
    
  } catch (error) {
    console.log(`$$$$$ ${error}`);
  }
};

module.exports = dbConnect;
