import { SET_TESTE_N } from "../names";

// interfaces
import { RootState } from "../store";

export const setNormal = (value: boolean) => ({
	type: SET_TESTE_N,
	payload: { value },
});

export const getNormal = (state: RootState) => state.normal.value;
