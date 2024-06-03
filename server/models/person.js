import mongoose from "mongoose";

const personSchema = mongoose.Schema({
	name: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String,
	homeworld: String,
	// films: [String],
	// planets: [String],
	starships: [String],
	id: {
		type: String,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	updatedAt: {
		type: Date,
		default: new Date(),
	},
});

const Person = mongoose.model("Person", personSchema);

export default Person;
