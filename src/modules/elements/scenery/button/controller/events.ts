import { CButton } from "../config/config";
import { Hover } from "../../../../events/hover";
import { Mouse } from "../../../../core/Mouse";
import { lumos } from "../../../../utils/functions";
export class EventsButton {
	private onHover = (cButton: CButton): void => {
		const { x, y, width, height, padding, renderService, color } =
			cButton.getAttrs();
		Hover.getInstance().addEffectTo({
			onEnter: () => {
				renderService.renderAll({
					buttonProps: {
						...cButton.getAttrs(),
						width,
						height,
						color: lumos(color, 0.3),
					},
					padding: padding || 0,
				});
				Mouse.getInstance().setMouseMode("interact");
			},
			onLeave: () => {
				Mouse.getInstance().setMouseMode("normal");
			},
			target: {
				x,
				y,
				width: width + (padding || 0) * 2,
				height: height + (padding || 0) * 2,
			},
		});
	};

	public setup = (cButton: CButton): void => {
		this.onHover(cButton);
	};
}
