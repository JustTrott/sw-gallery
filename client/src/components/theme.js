import { createTheme } from "@mui/material/styles";

const themeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#ffe300",
		},
		secondary: {
			main: "#f50057",
		},
	},
};

const swtheme = createTheme(themeOptions);

export default swtheme;
