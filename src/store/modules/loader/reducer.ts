import produce from "immer";
import { SET_LOADER } from "../names";

// interfaces
import { PayloadAction } from "@reduxjs/toolkit";
import { Loader } from "./interfaces";

const initialState: Loader = {
	value: false,
};

const loader = (state = initialState, action: PayloadAction<Loader>) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_LOADER:
				draft = {
					...draft,
					...action.payload,
				};
				return draft;
			default:
				return state;
		}
	});

export default loader;
export { loader };
