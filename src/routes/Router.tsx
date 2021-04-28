import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Route from "./Route";

// pages
import Aplication from "pages/Aplication";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Aplication} />
			</Switch>
		</Router>
	);
}

export default Routes;
