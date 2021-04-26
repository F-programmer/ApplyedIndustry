import produce from "immer";

// interfaces
import { Snacker } from "./interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

const { SET_SNACKER, RESET_SNACKER } = require("../names");

const initialState: Partial<Snacker> = {};

const snacker = (state = initialState, action: PayloadAction<Snacker>) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_SNACKER: {
				draft = {
					...draft,
					...action.payload,
				};
				return draft;
			}

			case RESET_SNACKER: {
				draft = initialState;
				return draft;
			}

			default:
				return state;
		}
	});

export default snacker;
export { snacker };
