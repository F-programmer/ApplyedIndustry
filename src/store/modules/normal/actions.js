import { SET_TESTE_N } from "../names";

export const setNormal = (value) => ({
	type: SET_TESTE_N,
	payload: { value },
});

export const getNormal = (state) => state.normal.value;
