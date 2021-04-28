import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";

import ScrollTop from "./ScrollTop";

export interface ICustomizedRoute {
	component: FunctionComponent;
	path: string;
	scrollTop?: boolean;
	noLayout?: boolean;
	exact?: boolean;
}

function CustomizedRoute({
	component,
	path,
	scrollTop = true,
	noLayout = false,
	exact = false,
}: ICustomizedRoute): JSX.Element {
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
