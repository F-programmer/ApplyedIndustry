import produce from "immer";

const { SET_SNACKER, RESET_SNACKER } = require("../names");

const initialState = {};

const snacker = (state = initialState, action) =>
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
