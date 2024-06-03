import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import peopleRoutes from "./routes/people.js";
import planetsRoutes from "./routes/planets.js";
import starshipsRoutes from "./routes/starships.js";

import populate from "./populate.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/people", peopleRoutes);
app.use("/planets", planetsRoutes);
app.use("/starships", starshipsRoutes);

const PORT = 5000;

mongoose
	.connect(process.env.CONNECTION_URL)
	.then(async () => {
		console.log("Connected to the database");
		await mongoose.connection.dropDatabase();
		console.log("Database cleared");
		await populate();
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
	})
	.catch((error) => console.log(error.message));
