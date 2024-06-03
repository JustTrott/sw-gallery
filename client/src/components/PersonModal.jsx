import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
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
	maxHeight: "80vh",
	overflow: "auto",
};

export default function PlanetModal({
	person,
	open,
	handleClose,
	changeModal,
}) {
	const starships = useSelector((state) => state.starships);
	const planets = useSelector((state) => state.planets);
	const all_starships = starships.filter((starship) =>
		person.starships.includes(starship.id)
	);
	const homeworld = planets.find((planet) => planet.id === person.homeworld);
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h4">
					{person.name} Fact Sheet
				</Typography>
				<Grid
					container
					justifyContent="center"
					spacing={2}
					pt={3}
					pb={3}
				>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Height: {person.height}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Mass: {person.height}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Hair color: {person.hair_color}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Skin color: {person.skin_color}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Eye color: {person.eye_color}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Birth year: {person.birth_year}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Gender: {person.gender}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Homeworld:
								<Button
									onClick={changeModal}
									data-modal-type="planet"
									data-modal-id={homeworld.id}
								>
									<Typography align="center">
										{homeworld.name}
									</Typography>
								</Button>
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				{person.starships.length > 0 && (
					<Paper sx={{ p: 2, mt: 2 }}>
						<Typography
							id="modal-modal-description"
							sx={{ mb: 1 }}
							variant="h5"
						>
							Belongs to Starships:
						</Typography>
						<Grid container>
							{all_starships.map((starship) => (
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
				)}
			</Box>
		</Modal>
	);
}
