import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Route from "./Route";

// pages
import Root from "pages/Root";
import AuxRoot from "pages/AuxRoot";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Root} />
				<Route path="/teste" exact component={AuxRoot} />
			</Switch>
		</Router>
	);
}

export default Routes;
