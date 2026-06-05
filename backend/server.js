const express = require("express");
const cors = require("cors");
const app = express();
const calculatorRoute =
require("./routes/calculator");
app.use(cors());
app.use(express.json());
app.use("/", calculatorRoute);
app.listen(5000, () => {
    console.log(
        "Server is running on port 5000"
    );
});