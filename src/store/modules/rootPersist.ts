// persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// outra criptografia
import { encryptTransform } from "redux-persist-transform-encrypt";
import { CombinedState, AnyAction, Action } from "redux";

// crypto key
const CRYPTO_KEY = "CECA";

const rootPersist = (reducers: {
	(
		state:
			| CombinedState<{
					loader: { value: boolean };
					snacker: {};
					persisted: { value: string };
					normal: { value: string };
			  }>
			| undefined,
		action: AnyAction
	): CombinedState<{
		loader: { value: boolean };
		snacker: {};
		persisted: { value: string };
		normal: { value: string };
	}>;
	(state: any, action: Action<any>): any;
}) =>
	persistReducer(
		{
			key: "app",
			storage,
			whitelist: ["persisted"],
			transforms: [
				encryptTransform({
					secretKey: CRYPTO_KEY,
					onError: function (error) {
						console.log("A error ocurred on try to cryptograph");
					},
				}),
			],
		},
		reducers
	);

export default rootPersist;
export { rootPersist };
