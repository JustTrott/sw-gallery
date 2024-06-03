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
	starship,
	open,
	handleClose,
	changeModal,
}) {
	const people = useSelector((state) => state.people);
	const pilots = people.filter((person) =>
		starship.pilots.includes(person.id)
	);
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h4">
					{starship.name} Fact Sheet
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
								Model: {starship.model}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Manufacturer: {starship.manufacturer}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Cost in credits: {starship.cost_in_credits}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Length: {starship.length}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Max atmosphering speed:{" "}
								{starship.max_atmosphering_speed}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Crew: {starship.crew}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Passengers: {starship.passengers}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Cargo Capacity: {starship.cargo_capacity}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Consumables: {starship.consumables}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Hyperdrive Rating: {starship.hyperdrive_rating}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								MGLT: {starship.MGLT}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Starship Class: {starship.starship_class}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				{pilots.length > 0 && (
					<Paper sx={{ p: 2, mt: 2 }}>
						<Typography
							id="modal-modal-description"
							sx={{ mb: 1 }}
							variant="h5"
						>
							Pilots:
						</Typography>
						<Grid container>
							{pilots.map((pilot) => (
								<Grid item key={pilot.id} xs={12} sm={6}>
									<Button
										onClick={changeModal}
										data-modal-type="person"
										data-modal-id={pilot.id}
									>
										<Typography align="center">
											{pilot.name}
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
