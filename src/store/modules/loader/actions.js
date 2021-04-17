import { SET_LOADER } from "../names";

export const setLoader = (value) => ({
	type: SET_LOADER,
	payload: { value },
});

export const getLoader = (state) => state.loader.value;
