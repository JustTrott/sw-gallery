import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Container, Input } from "@mui/material";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minwidth: 400,
	width: "60%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	pl: 8,
	pr: 8,
	maxHeight: "80vh",
	overflow: "auto",
};

export default function SearchModal({ open, handleClose, changeModal }) {
	const [search, setSearch] = React.useState("");
	const starships = useSelector((state) => state.starships);
	const planets = useSelector((state) => state.planets);
	const people = useSelector((state) => state.people);
	const [filteredPeople, setFilteredPeople] = React.useState(
		useSelector((state) => state.people)
	);
	const [filteredPlanets, setFilteredPlanets] = React.useState(
		useSelector((state) => state.planets)
	);
	const [filteredStarships, setFilteredStarships] = React.useState(
		useSelector((state) => state.starships)
	);
	const onChange = (e) => {
		setSearch(e.target.value);
		setFilteredPeople(
			people.filter((person) =>
				person.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
		setFilteredPlanets(
			planets.filter((planet) =>
				planet.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
		setFilteredStarships(
			starships.filter((starship) =>
				starship.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			)
		);
	};
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "end",
					}}
				>
					<Typography id="modal-modal-title" variant="h4">
						Search
					</Typography>
					<Input
						variant="filled"
						label="Search"
						value={search}
						onChange={onChange}
					/>
				</Container>
				<Typography id="modal-modal-title" variant="h5" sx={{ mt: 5 }}>
					Planets
				</Typography>
				<Paper sx={{ p: 2, mt: 1 }}>
					<Grid container>
						{filteredPlanets.map((planet) => (
							<Grid item key={planet.id} xs={12} sm={6}>
								<Button
									onClick={changeModal}
									data-modal-type="planet"
									data-modal-id={planet.id}
								>
									<Typography align="center">
										{planet.name}
									</Typography>
								</Button>
							</Grid>
						))}
					</Grid>
				</Paper>
				<Typography id="modal-modal-title" variant="h5" sx={{ mt: 5 }}>
					People
				</Typography>
				<Paper sx={{ p: 2, mt: 1 }}>
					<Grid container>
						{filteredPeople.map((person) => (
							<Grid item key={person.id} xs={12} sm={6}>
								<Button
									onClick={changeModal}
									data-modal-type="person"
									data-modal-id={person.id}
								>
									<Typography align="center">
										{person.name}
									</Typography>
								</Button>
							</Grid>
						))}
					</Grid>
				</Paper>
				<Typography id="modal-modal-title" variant="h5" sx={{ mt: 5 }}>
					Starships
				</Typography>
				<Paper sx={{ p: 2, mt: 1 }}>
					<Grid container>
						{filteredStarships.map((starship) => (
							<Grid item key={starship.id} xs={12} sm={6}>
								<Button
									onClick={changeModal}
									data-modal-type="starship"
									data-modal-id={starship.id}
								>
									<Typography align="center">
										{starship.name}
									</Typography>
								</Button>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Box>
		</Modal>
	);
}
