import { SET_TESTE_P } from "../names";

// interfaces
import { RootState } from "../store";

export const setPersist = (value: string) => ({
	type: SET_TESTE_P,
	payload: { value },
});

export const getPersisted = (state: RootState) => state.persisted.value;
