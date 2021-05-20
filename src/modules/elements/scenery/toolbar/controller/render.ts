import { IRenderToolbar } from "../interfaces";
import { GlobalRender } from "../../../../controllers/render";
export class RenderToolbar {
	public setup({
		color,
		height,
		width,
		x,
		y,
		isVisible,
	}: IRenderToolbar): void {
		GlobalRender.getInstance().addFixedRender({
			action: () =>
				GlobalRender.getInstance().drawQuadri({
					canvasX: x,
					canvasY: y,
					color: color,
					width,
					height,
				}),
			canRender: isVisible,
			priority: 1,
		});
	}
}
