// libs
import React from "react";
import { Button, Grid, Box, TextField } from "@material-ui/core";

// componentes
import { UIInput } from "components/UI";

// icons
import { AiFillLock } from "react-icons/ai";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
	setLoader,
	addSnack,
	getPersisted,
	getNormal,
	setPersist,
	setNormal,
} from "store";

// shared
import { useRouter } from "utils";

function Root() {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLoader = () => {
		dispatch(setLoader(true));
		setTimeout(() => dispatch(setLoader(false)), 2500);
	};
	const handleSnack = () => {
		dispatch(
			addSnack({
				message: "Está eh uma notificação de sucesso, deu bom!",
				type: "success",
			})
		);
		setTimeout(
			() =>
				dispatch(
					addSnack({
						message: "Está eh uma notificação de erro, deu ruim!",
						type: "error",
					})
				),
			1000
		);
		setTimeout(
			() =>
				dispatch(
					addSnack({
						message: "Está eh uma notificação de aviso, se atenta ai!",
						type: "warning",
					})
				),
			2000
		);
	};
	const handleLink = () => router.push("/teste");

	const normal = useSelector(getNormal);
	const handleNormal = (props) => dispatch(setNormal(props.target.value));
	const persisted = useSelector(getPersisted);
	const handlePersisted = (value) => dispatch(setPersist(value));

	return (
		<Box p={3}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Button
						onClick={handleLoader}
						variant="contained"
						color="primary"
					>
						Me aperte para carregar a tela
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button onClick={handleSnack} variant="outlined" color="primary">
						Me aperte para lançar uma notificação
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button onClick={handleLink} variant="text" color="primary">
						Me aperte para ser redirecionado
					</Button>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Sem redux"
						variant="outlined"
						name="redux-none"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Redux normal"
						variant="filled"
						name="redux-normal"
						value={normal}
						onChange={handleNormal}
					/>
				</Grid>
				<Grid item xs={12}>
					<UIInput
						label="Redux persistente"
						name="redux-persist"
						value={persisted}
						onChange={handlePersisted}
						endIcon={<AiFillLock />}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Root;
