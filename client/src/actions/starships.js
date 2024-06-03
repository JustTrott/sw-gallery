import * as api from "../api";

// Action Creators
export const getStarships = () => async (dispatch) => {
	try {
		const { data } = await api.fetchStarships();
		dispatch({ type: "FETCH_ALL_STARSHIPS", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
