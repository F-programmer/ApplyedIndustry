import { ToolBar } from "../scenery/toolbar/config/config";
import { Enviroments } from "../../controllers/enviroments";
import { Colors } from "../../layout/styles/colors";
import { CButton } from "../scenery/button/config/config";

export class MainCreate {
	// singleton
	private static instance: MainCreate;
	private constructor() {}
	public static getInstance(): MainCreate {
		if (!this.instance) this.instance = new MainCreate();
		return this.instance;
	}

	public run(): void {
		const bottomToolbar = new ToolBar({
			x: 0,
			y: Enviroments.getInstance().client_height - 100,
			width: Enviroments.getInstance().game_width,
			height: 100,
			color: Colors.purpleNormal,
			isVisible: true,
		});
		bottomToolbar.run();

		const btn = new CButton({
			color: "#f00",
			isVisible: true,
			priority: 10,
			text: "Me aperte",
			height: 20,
			width: 102,
			x: 50,
			y: 50,
		});
		const btn2 = new CButton({
			color: "#f40",
			priority: 10,
			text: "Me aperte",
			x: 100,
			y: 100,
		});

		btn.run();
		btn2.run();
	}
}
