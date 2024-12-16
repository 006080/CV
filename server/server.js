const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware to parse form data (URL-encoded)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests (optional)

// Serve the static files (your HTML project)
app.use(express.static("public"));

// Handle form submissions
app.post("/submit", (req, res) => {
    const { message } = req.body; // Access form data
    console.log("Received message:", message);

    // Send a response to the client
    res.json({ status: "success", message: "Message received successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
