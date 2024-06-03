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
	planet,
	open,
	handleClose,
	changeModal,
}) {
	const people = useSelector((state) => state.people);
	const residents = people.filter((person) =>
		planet.residents.includes(person.id)
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
					{planet.name} Fact Sheet
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
								Rotation Period: {planet.rotation_period}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Orbital Period: {planet.orbital_period}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Diameter: {planet.diameter}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Climate: {planet.climate}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Gravity: {planet.gravity}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Terrain: {planet.terrain}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Surface Water: {planet.surface_water}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper sx={{ p: 1 }}>
							<Typography align="center">
								Population: {planet.population}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				{planet.residents.length > 0 && (
					<Paper sx={{ p: 2, mt: 2 }}>
						<Typography
							id="modal-modal-description"
							sx={{ mb: 1 }}
							variant="h5"
						>
							Residents:
						</Typography>
						<Grid container>
							{residents.map((resident) => (
								<Grid item key={resident.id} xs={12} sm={6}>
									<Button
										onClick={changeModal}
										data-modal-type="person"
										data-modal-id={resident.id}
									>
										<Typography align="center">
											{resident.name}
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
