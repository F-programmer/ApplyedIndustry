import { SET_LOADER } from "../names";

// interfaces
import { RootState } from "../store";

export const setLoader = (value: boolean) => ({
	type: SET_LOADER,
	payload: { value },
});

export const getLoader = (state: RootState) => state.loader.value;
