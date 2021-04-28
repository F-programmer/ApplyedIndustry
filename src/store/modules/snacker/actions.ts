import { SET_SNACKER, RESET_SNACKER } from "../names";

// interfaces
import type { RootState } from "../store";
import { Snacker } from "./interfaces";

export const addSnack = ({ message, type }: Snacker) => ({
	type: SET_SNACKER,
	payload: { message, type },
});

export const resetSnack = () => ({
	type: RESET_SNACKER,
});

export const getSnacks = (state: RootState) => state.snacker;
