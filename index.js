const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MongoDB connection
connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("Mongodb Connected");
});

// Routes
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    try {
      const shortId = req.params.shortId;
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitedHistory: {
              timestamp: Date.now() // Correct invocation of Date.now()
            }
          }
        }
      );
  
      if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
      }
  
      res.redirect(entry.redirectURL);
    } catch (error) {
      console.error("Error handling GET request:", error); // Adding error handling for GET request
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log("Server Started");
});