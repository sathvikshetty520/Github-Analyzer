require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const analyzeRoute = require("./routes/analyze");

// ✅ Middleware
app.use(cors({
    origin: "*"
}));

app.use(express.json());

// ✅ API route
app.use("/analyze", analyzeRoute);

// ✅ Health check route
app.get("/", (req, res) => {
    res.send("GitHub Analyzer API is running");
});

// ✅ IMPORTANT: Render port fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});