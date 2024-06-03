import React, { useEffect, useState } from "react";
// import "./App.css";
import { getPlanets } from "./actions/planets";
import { getPeople } from "./actions/people";
import { getStarships } from "./actions/starships";
import Header from "./components/Header";
import Planets from "./components/Planets";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import swtheme from "./components/theme";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPlanets());
		dispatch(getPeople());
		dispatch(getStarships());
	}, [dispatch]);
	const [currentModalId, setCurrentModalId] = useState(null);
	const [currentModalType, setCurrentModalType] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleOpen = () => setIsModalOpen(true);
	const handleClose = () => setIsModalOpen(false);
	const changeModal = (e) => {
		setCurrentModalId(e.currentTarget.dataset.modalId);
		setCurrentModalType(e.currentTarget.dataset.modalType);
		handleOpen();
	};
	return (
		<ThemeProvider theme={swtheme}>
			<CssBaseline />
			<Header changeModal={changeModal} />
			<Planets
				changeModal={changeModal}
				currentModalId={currentModalId}
				currentModalType={currentModalType}
				isModalOpen={isModalOpen}
				handleClose={handleClose}
			/>
		</ThemeProvider>
	);
};

export default App;
