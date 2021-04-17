import { SET_SNACKER, RESET_SNACKER } from "../names";

export const addSnack = ({ message, type }) => ({
	type: SET_SNACKER,
	payload: { message, type },
});

export const resetSnack = () => ({
	type: RESET_SNACKER,
});

export const getSnacks = (state) => state.snacker;
