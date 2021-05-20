import { IRenderButton } from "../interfaces";
import { GlobalRender } from "../../../../controllers/render";

export class RenderButton {
	private renderArea = ({ buttonProps, padding }: IRenderButton): void =>
		GlobalRender.getInstance().drawQuadri({
			canvasX: buttonProps.x,
			canvasY: buttonProps.y,
			color: buttonProps.color,
			height: buttonProps.height + padding * 2,
			width: buttonProps.width + padding * 2,
		});
	private renderText = ({ buttonProps, padding }: IRenderButton): void =>
		GlobalRender.getInstance().writeText({
			canvasX: buttonProps.x + padding,
			canvasY: buttonProps.y + padding,
			color: String(buttonProps.textColor),
			text: buttonProps.text,
		});
	public renderAll = ({ buttonProps, padding }: IRenderButton) => {
		this.renderArea({ buttonProps, padding });
		this.renderText({ buttonProps, padding });
	};

	public setup({ buttonProps, padding }: IRenderButton): void {
		GlobalRender.getInstance().addFixedRender({
			action: () => {
				this.renderAll({ buttonProps, padding });
			},
			canRender: buttonProps.isVisible,
			priority: buttonProps.priority + 1,
		});
	}
}
