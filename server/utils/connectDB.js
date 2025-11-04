const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    // Safely replace password placeholder with encoded password
    const DB = process.env.DATABASE.replace(
      "<db_password>",
      encodeURIComponent(process.env.DATABASE_PASSWORD)
    );

    await mongoose.connect(DB);

    console.log("✅ MongoDB connection established successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};
