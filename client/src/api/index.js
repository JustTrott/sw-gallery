import axios from "axios";

const planetsUrl = "http://localhost:5000/planets";
const peopleUrl = "http://localhost:5000/people";
const starshipsUrl = "http://localhost:5000/starships";

export const fetchPlanets = () => axios.get(planetsUrl);
export const fetchPeople = () => axios.get(peopleUrl);
export const fetchStarships = () => axios.get(starshipsUrl);
