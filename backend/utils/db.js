const mongoose = require("mongoose");

async function connectDB() {
  try {
    const uri = process.env.CLOUD_DB_URI;
    // const url = process.env.DB_URI;

    const data = await mongoose.connect(uri);
    console.log(
      `mongoDB connected with: ${data.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log("DB connection error:", error.message);
  }
}
module.exports = { connectDB };
