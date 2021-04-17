// libs
import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Box } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { getLoader } from "store";

function Loader() {
	const loader = useSelector(getLoader);

	const [children, setChildren] = useState(null);

	useEffect(() => {
		if (loader)
			setChildren(
				<Box position="absolute" zIndex="tooltip">
					<Backdrop open={true}>
						<CircularProgress color="primary" size={80} />
					</Backdrop>
				</Box>
			);
		else setChildren(null);
	}, [loader]);

	return <>{children}</>;
}

export default Loader;
