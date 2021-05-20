import { ConfigGrid } from "../elements/scenery/grid/config/config";
import { GlobalRender } from "./render";
export class LoopRender {
	// singleton
	private static instance: LoopRender;
	private constructor() {}
	public static getInstance(): LoopRender {
		if (!this.instance) this.instance = new LoopRender();
		return this.instance;
	}

	public run(): void {
		ConfigGrid.getInstance().render();
		// GlobalRender.getInstance().addFixedRender({
		// 	action: () =>
		// 		GlobalRender.getInstance().writeText({
		// 			canvasX: 0,
		// 			canvasY: 30,
		// 			color: "#f32",
		// 			text: "Eae pessoal tudo beleza? ah que legal",
		// 		}),
		// 	canRender: true,
		// 	priority: 10,
		// });
		GlobalRender.getInstance().renderAllItems();
	}
}
