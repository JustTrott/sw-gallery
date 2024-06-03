const reducer = (planets = [], action) => {
	switch (action.type) {
		case "FETCH_ALL_PLANETS":
			return action.payload;
		default:
			return planets;
	}
};

export default reducer;
