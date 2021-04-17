import produce from "immer";
import { SET_LOADER } from "../names";

const initialState = {
	value: false,
};

const loader = (state = initialState, action) =>
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
