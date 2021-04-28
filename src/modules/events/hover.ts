import { HoverTriggerProps, HoverTarget, HoverAction } from "./interfaces";
export class Hover {
	private x: number = 0;
	private y: number = 0;
	private isHovering: boolean = false;

	private actions: HoverAction[] = [];

	// singleton
	private static instance: Hover;
	private constructor() {}
	public static getInstance(): Hover {
		if (!this.instance) this.instance = new Hover();
		return this.instance;
	}

	public onHover({ isHovering, x, y }: HoverTriggerProps): void {
		Hover.getInstance().isHovering = isHovering;
		Hover.getInstance().x = x;
		Hover.getInstance().y = y;

		if (Hover.getInstance().isHovering) Hover.getInstance().onHoverEnter();
		else Hover.getInstance().onHoverLeave();
	}

	private onHoverEnter() {
		Hover.getInstance().actions.forEach((item) => {
			if (Hover.getInstance().isHoveringMe(item.target))
				item.onEnter({
					isHovering: Hover.getInstance().isHovering,
					x: Hover.getInstance().x,
					y: Hover.getInstance().y,
				});
		});
	}
	private onHoverLeave() {
		Hover.getInstance().actions.forEach((item) =>
			item.onLeave({
				isHovering: Hover.getInstance().isHovering,
				x: Hover.getInstance().x,
				y: Hover.getInstance().y,
			})
		);
	}

	public isHoveringMe({ height, width, x, y }: HoverTarget): boolean {
		if (Hover.getInstance().isHovering) {
			const settings = {
				x,
				y,
				xw: x + width,
				yh: y + height,
				xm: Hover.getInstance().x,
				ym: Hover.getInstance().y,
			};
			if (
				settings.xm >= settings.x &&
				settings.ym >= settings.y &&
				settings.xm <= settings.xw &&
				settings.ym <= settings.yh
			)
				return true;
		}

		return false;
	}

	public addEffectTo({
		onEnter = () => {},
		onLeave = () => {},
		target,
	}: HoverAction): void {
		Hover.getInstance().actions.push({
			onEnter,
			onLeave,
			target,
		});
	}

	public checkHover(): void {
		Hover.getInstance().onHoverEnter();
	}
}
