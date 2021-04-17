import produce from "immer";

import { SET_TESTE_N } from "../names";

const initialState = {
	value: "",
};

const normal = (state = initialState, action) =>
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
