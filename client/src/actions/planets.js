import * as api from "../api";

// Action Creators
export const getPlanets = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPlanets();
		dispatch({ type: "FETCH_ALL_PLANETS", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
