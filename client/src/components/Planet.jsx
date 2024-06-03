import React from "react";
// import { Container, Grow, Grid } from "@mui/material";
import { CardActionArea, Typography, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Planet = ({ planet, changeModal }) => {
	const theme = useTheme();
	return (
		<>
			<Card>
				<CardActionArea
					sx={{ p: 2 }}
					onClick={changeModal}
					data-modal-id={planet.id}
					data-modal-type="planet"
				>
					<Typography
						variant="h5"
						align="center"
						color={theme.palette.primary.main}
					>
						{planet.name}
					</Typography>
				</CardActionArea>
			</Card>
		</>
	);
};

export default Planet;
