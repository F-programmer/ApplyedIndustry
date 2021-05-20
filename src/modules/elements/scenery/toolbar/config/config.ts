import { ElementFinalClass } from "modules/elements/models/classes";
import { RenderToolbar } from "../controller/render";
export class ToolBar extends ElementFinalClass {
	public run(): void {
		const attrs = this.getAttrs();

		const render = new RenderToolbar();
		render.setup({
			...attrs,
		});
	}
}
