const reducer = (starships = [], action) => {
	switch (action.type) {
		case "FETCH_ALL_STARSHIPS":
			return action.payload;
		default:
			return starships;
	}
};

export default reducer;
