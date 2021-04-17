import produce from "immer";

import { SET_TESTE_P } from "../names";

const initialState = {
	value: "",
};

const persisted = (state = initialState, action) =>
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
