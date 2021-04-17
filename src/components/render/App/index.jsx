// libs
import React from "react";
import { Slide } from "@material-ui/core";

// providers
import { ThemeProvider as MUProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SnackbarProvider } from "notistack";

// styles
import "styles/styles.css";

// configs
import theme from "styles/theme";
import { store, persistor } from "store";

// roteamento
import Routes from "routes/Router";

/* obdeça a ordem hierarquica dos providers

página
- usa persist-redux
- que usa redux
- que usa o material-ui

*/

// my render configs
import Snack from "components/render/Snack";
import Loader from "../Loader";

function App() {
	return (
		<MUProvider theme={theme}>
			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				TransitionComponent={Slide}
			>
				<ReduxProvider store={store}>
					<PersistGate persistor={persistor}>
						<Routes />
						<Snack />
						<Loader />
					</PersistGate>
				</ReduxProvider>
			</SnackbarProvider>
		</MUProvider>
	);
}

export default App;
