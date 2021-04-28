import produce from "immer";

import { SET_TESTE_P } from "../names";

// interfaces
import { PayloadAction } from "@reduxjs/toolkit";
import { Persisted } from "./interfaces";

const initialState: Persisted = {
	value: "",
};

const persisted = (state = initialState, action: PayloadAction<Persisted>) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_TESTE_P: {
				draft = {
					...draft,
					...action.payload,
				};
				return draft;
			}

			default:
				return state;
		}
	});

export default persisted;
export { persisted };
