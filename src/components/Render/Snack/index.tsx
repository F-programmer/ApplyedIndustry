// libs
import React, { useEffect } from "react";
import { useSnackbar } from "notistack";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getSnacks, resetSnack } from "store";

function Snack(): JSX.Element {
	const dispatch = useDispatch();

	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const snacks = useSelector(getSnacks);

	useEffect(() => {
		if (snacks && Object.keys(snacks).length > 0) {
			const snack = enqueueSnackbar(snacks.message, {
				variant: snacks.type,
				persist: true,
			});

			setTimeout(() => {
				closeSnackbar(snack);
				dispatch(resetSnack());
			}, 2500);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [snacks]);

	return <div />;
}

export default Snack;
