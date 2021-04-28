/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React, { useRef, useEffect } from "react";
import {} from "@material-ui/core";

// class
import { Main } from "modules/core/main";

interface ApplicationProps {}

// eslint-disable-next-line no-empty-pattern
function Application({}: ApplicationProps) {
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		Main.getInstance().setup(canvas, window);
		Main.getInstance().run();
	}, []);

	return (
		<div
			style={{ width: "500px", height: "500px", border: "1px solid #000" }}
		>
			<canvas
				ref={canvas}
				style={{ width: "500px", height: "500px", cursor: "pointer" }}
			/>
		</div>
	);
}

export default Application;
export { Application };
