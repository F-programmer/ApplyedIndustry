/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";

// class
import { Main } from "modules/core/Main";

interface ApplicationProps {}

// eslint-disable-next-line no-empty-pattern
function Application({}: ApplicationProps) {
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		Main.getInstance().setup(canvas, window);
		Main.getInstance().run();
	}, []);

	return (
		<Box
			width="800px"
			height="800px"
			border="1px solid #000"
			position="absolute"
			margin="auto"
			top="0"
			left="0"
			right="0"
			bottom="0"
		>
			<canvas ref={canvas} style={{ width: "100%", height: "100%" }} />
		</Box>
	);
}

export default Application;
export { Application };
