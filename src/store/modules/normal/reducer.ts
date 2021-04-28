import produce from "immer";

import { SET_TESTE_N } from "../names";
import { PayloadAction } from "@reduxjs/toolkit";
import { Persisted } from "../persisted";

const initialState: Persisted = {
	value: "",
};

const normal = (state = initialState, action: PayloadAction<Persisted>) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_TESTE_N: {
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

export default normal;
export { normal };
