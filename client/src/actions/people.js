import * as api from "../api";

export const getPeople = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPeople();
		dispatch({ type: "FETCH_ALL_PEOPLE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
