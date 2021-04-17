// libs
import React from "react";
import { Grid, Typography, Button, Box, TextField } from "@material-ui/core";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getPersisted, getNormal, setPersist, setNormal } from "store";

// componentes
import { UIInput } from "components/ui/";

// icons
import { AiFillLock } from "react-icons/ai";

// shared
import { useRouter } from "utils";

function AuxRoot() {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLink = () => router.goBack();

	const normal = useSelector(getNormal);
	const handleNormal = (props) => dispatch(setNormal(props.target.value));
	const persisted = useSelector(getPersisted);
	const handlePersisted = (value) => dispatch(setPersist(value));

	return (
		<Box p={3}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography>Está eh uma página teste</Typography>
				</Grid>
				<Grid item xs={12}>
					<Button color="primary" onClick={handleLink}>
						Me aperte para voltar
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

export default AuxRoot;
