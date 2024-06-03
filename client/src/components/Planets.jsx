import React from "react";
import { useSelector } from "react-redux";

import {
	Container,
	Grow,
	Grid,
	CircularProgress,
	Typography,
} from "@mui/material";

import Planet from "./Planet";

import PlanetModal from "./PlanetModal";
import PersonModal from "./PersonModal";
import StarshipModal from "./StarshipModal";
import SearchModal from "./SearchModal";

const Planets = ({
	changeModal,
	currentModalId,
	currentModalType,
	isModalOpen,
	handleClose,
}) => {
	const planets = useSelector((state) => state.planets);
	const people = useSelector((state) => state.people);
	const starships = useSelector((state) => state.starships);
	const currentPlanet = planets.find(
		(planet) => planet.id === currentModalId
	);
	const currentPerson = people.find((person) => person.id === currentModalId);
	const currentStarship = starships.find(
		(starship) => starship.id === currentModalId
	);
	return !planets.length ? (
		<CircularProgress />
	) : (
		<>
			<Grow in>
				<Container maxWidth="lg" sx={{ mt: 5 }}>
					<Typography variant="h4" align="center" sx={{ mb: 5 }}>
						Planets in Star Wars Universe
					</Typography>
					<Grid container justifyContent="space-between" spacing={3}>
						{planets.map((planet) => (
							<Grid
								key={planet._id}
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
							>
								<Planet
									planet={planet}
									changeModal={changeModal}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Grow>
			{currentModalType === "planet" && currentPlanet && (
				<PlanetModal
					planet={currentPlanet}
					open={isModalOpen}
					handleClose={handleClose}
					changeModal={changeModal}
				/>
			)}
			{currentModalType === "person" && currentPerson && (
				<PersonModal
					person={currentPerson}
					open={isModalOpen}
					handleClose={handleClose}
					changeModal={changeModal}
				/>
			)}
			{currentModalType === "starship" && currentStarship && (
				<StarshipModal
					starship={currentStarship}
					open={isModalOpen}
					handleClose={handleClose}
					changeModal={changeModal}
				/>
			)}
			{currentModalType === "search" && (
				<SearchModal
					open={isModalOpen}
					handleClose={handleClose}
					changeModal={changeModal}
				/>
			)}
		</>
	);
};

export default Planets;
