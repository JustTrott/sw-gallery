import mongoose from "mongoose";

const planetSchema = mongoose.Schema({
	name: String,
	rotation_period: String,
	orbital_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	population: String,
	residents: [String],
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

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
