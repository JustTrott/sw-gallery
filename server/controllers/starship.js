import Starship from "../models/starship.js";

export const getStarships = async (req, res) => {
	try {
		const starships = await Starship.find();

		res.status(200).json(starships);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// export const createStarship = async (req, res) => {
// 	const starship = req.body;

// 	const newStarship = new Starship(starship);

// 	try {
// 		await newStarship.save();

// 		res.status(201).json(newStarship);
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };
