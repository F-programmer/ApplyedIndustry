import { SET_TESTE_P } from "../names";

export const setPersist = (value) => ({
	type: SET_TESTE_P,
	payload: { value },
});

export const getPersisted = (state) => state.persisted.value;
