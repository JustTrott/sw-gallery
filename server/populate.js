import axios from "axios";

import Planet from "./models/planet.js";
import Starship from "./models/starship.js";
import Person from "./models/person.js";

async function fetchAll(url) {
	try {
		const { data } = await axios.get(url);
		const items = data.results;
		if (data.next) {
			const nextItems = await fetchAll(data.next);
			return items.concat(nextItems);
		}
		return items;
	} catch (error) {
		console.log(error.message);
	}
}

async function saveAll(items, Model) {
	for (let item of items) {
		const urlParts = item.url.split("/");
		item.id = urlParts[urlParts.length - 2];
		if (Model === Person) {
			// change homeworld from URL to ID
			const planetUrlParts = item.homeworld.split("/");
			item.homeworld = planetUrlParts[planetUrlParts.length - 2];
			// change starships from URL to ID
			item.starships = item.starships.map((starship) => {
				const starshipUrlParts = starship.split("/");
				return starshipUrlParts[starshipUrlParts.length - 2];
			});
		}
		if (Model === Starship) {
			// change pilots from URL to ID
			item.pilots = item.pilots.map((pilot) => {
				const pilotUrlParts = pilot.split("/");
				return pilotUrlParts[pilotUrlParts.length - 2];
			});
		}
		if (Model === Planet) {
			// change residents from URL to ID
			item.residents = item.residents.map((resident) => {
				const residentUrlParts = resident.split("/");
				return residentUrlParts[residentUrlParts.length - 2];
			});
		}
		const newItem = new Model(item);
		await newItem.save();
	}
}

async function populate() {
	var start = process.hrtime();
	var elapsed_time = function (note) {
		var precision = 3; // 3 decimal places
		var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
		console.log(
			process.hrtime(start)[0] +
				" s, " +
				elapsed.toFixed(precision) +
				" ms - " +
				note
		); // print message + time
		start = process.hrtime(); // reset the timer
	};
	await Promise.all([
		fetchAll("https://swapi.dev/api/planets/"),
		fetchAll("https://swapi.dev/api/starships/"),
		fetchAll("https://swapi.dev/api/people/"),
	]).then((values) => {
		const planets = values[0];
		const starships = values[1];
		const people = values[2];
		elapsed_time("Data fetched");
		saveAll(planets, Planet);
		saveAll(starships, Starship);
		saveAll(people, Person);
		elapsed_time("Database populated");
	});
}

export default populate;
