import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { MovieFilter } from "@mui/icons-material";
import { ButtonBase, Button } from "@mui/material";
import { useTheme } from "@mui/material";

// import { Link } from "react-router-dom";

const Header = ({ changeModal }) => {
	const theme = useTheme();
	return (
		<AppBar
			position="relative"
			sx={{ flexDirection: "row", justifyContent: "space-between" }}
		>
			<Toolbar>
				<ButtonBase sx={{ gap: 1 }}>
					{/* component={Link} to="/"> */}
					<MovieFilter />
					<Typography variant="h6" color={theme.palette.primary.main}>
						Star Wars Gallery
					</Typography>
				</ButtonBase>
			</Toolbar>
			<Button
				onClick={changeModal}
				data-modal-type="search"
				sx={{ mr: 3 }}
			>
				Search
			</Button>
		</AppBar>
	);
};

export default Header;
