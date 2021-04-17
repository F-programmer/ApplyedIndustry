// persist
import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

// outra criptografia
import { encryptTransform } from "redux-persist-transform-encrypt";

// criptograph
import CryptoJS from "crypto-js";

// crypto key
const CRYPTO_KEY = "CECA";

// encryptor
const encrypt = createTransform(
	((inboundState) => {
		if (!inboundState) return inboundState;

		const crypted = CryptoJS.AES.encrypt(
			JSON.stringify(inboundState),
			CRYPTO_KEY
		);

		return crypted.toString();
	},
	(outboundState) => {
		if (!outboundState) return outboundState;

		const bytes = CryptoJS.AES.decrypt(outboundState, CRYPTO_KEY);
		const decrypted = bytes.toString(CryptoJS.enc.Utf8);

		return JSON.stringify(decrypted);
	})
);

const rootPersist = (reducers) =>
	persistReducer(
		{
			key: "app",
			storage,
			whitelist: ["persisted"],
			transforms: [
				encryptTransform({
					secretKey: CRYPTO_KEY,
					onError: function (error) {
						// Handle the error.
					},
				}),
			],
		},
		reducers
	);

export default rootPersist;
export { rootPersist };
