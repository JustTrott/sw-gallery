import mongoose from "mongoose";

const starshipSchema = mongoose.Schema({
	name: String,
	model: String,
	manufacturer: String,
	cost_in_credits: String,
	length: String,
	max_atmosphering_speed: String,
	crew: String,
	passengers: String,
	cargo_capacity: String,
	consumables: String,
	hyperdrive_rating: String,
	MGLT: String,
	starship_class: String,
	pilots: [String],
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

const Starship = mongoose.model("Starship", starshipSchema);

export default Starship;
