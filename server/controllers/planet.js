import Planet from "../models/planet.js";

export const getPlanets = async (req, res) => {
	try {
		const planets = await Planet.find();

		res.status(200).json(planets);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// export const createPlanet = async (req, res) => {
// 	const planet = req.body;

// 	const newPlanet = new Planet(planet);

// 	try {
// 		await newPlanet.save();

// 		res.status(201).json(newPlanet);
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };
