const reducer = (people = [], action) => {
	switch (action.type) {
		case "FETCH_ALL_PEOPLE":
			return action.payload;
		default:
			return people;
	}
};

export default reducer;
