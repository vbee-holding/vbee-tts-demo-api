const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

console.log("MONGO_URI", MONGO_URI);

mongoose.connect(MONGO_URI, {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error.");
    console.error(err);
    process.exit();
});

mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB: ${MONGO_URI}`);
});
