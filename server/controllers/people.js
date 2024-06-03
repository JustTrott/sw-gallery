import Person from "../models/person.js";

export const getPeople = async (req, res) => {
	try {
		const people = await Person.find();

		res.status(200).json(people);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// export const createPerson = async (req, res) => {
// 	const person = req.body;

// 	const newPerson = new Person(person);

// 	try {
// 		await newPerson.save();

// 		res.status(201).json(newPerson);
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };
