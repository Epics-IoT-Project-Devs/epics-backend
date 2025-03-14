import express from "express";
import dotenv from "dotenv";

import sensorRoutes from "./routes/sensor.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api', sensorRoutes);

app.get('/', (req, res) => {
	res.json({ message: "Sensors" });
  });

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
});
