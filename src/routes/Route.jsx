import React from "react";
import { Route } from "react-router-dom";

import ScrollTop from "./ScrollTop";

function CustomizedRoute({
	component,
	path,
	scrollTop = true,
	noLayout = false,
	exact = false,
}) {
	const page = () => {
		const Component = component;
		return (
			<>
				{scrollTop ? <ScrollTop /> : ""}
				<Component />
			</>
		);
	};

	return <Route path={path} exact={exact} component={page} />;
}

export default CustomizedRoute;
