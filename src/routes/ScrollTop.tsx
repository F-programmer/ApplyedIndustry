import React, { useEffect } from "react";

function ScrollTop() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <div />;
}

export default ScrollTop;
