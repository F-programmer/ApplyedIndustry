import { ClickTriggerProps, ClickTarget, ClickAction } from "./interfaces";
import { IsPropsMatch } from "../utils/validations";
export class Click {
	private xd: number = 0;
	private yd: number = 0;
	private xu: number = 0;
	private yu: number = 0;
	private isClicked: boolean = false;

	private actions: ClickAction[] = [];

	// singleton
	private static instance: Click;
	private constructor() {}
	public static getInstance(): Click {
		if (!this.instance) this.instance = new Click();
		return this.instance;
	}

	public onMouseDown({ x, y }: ClickTriggerProps): void {
		console.log("click(enter)", { x, y });
		if (Click.getInstance().isClicked === false) {
			Click.getInstance().xd = x;
			Click.getInstance().yd = y;
			Click.getInstance().isClicked = true;

			Click.getInstance().onClickEnter();
		}
	}
	public onMouseUp({ x, y }: ClickTriggerProps): void {
		console.log("click(leave)", { x, y });
		if (Click.getInstance().isClicked === true) {
			Click.getInstance().xu = x;
			Click.getInstance().yu = y;
			Click.getInstance().isClicked = false;

			Click.getInstance().onClickLeave();
		}
	}

	private onClickEnter() {
		Click.getInstance().actions.forEach((item) => {
			if (Click.getInstance().isClickedMe(item.target))
				item.onEnter({
					x: Click.getInstance().xd,
					y: Click.getInstance().yd,
				});
		});
	}
	private onClickLeave() {
		Click.getInstance().actions.forEach((item) =>
			item.onLeave({
				x: Click.getInstance().xu,
				y: Click.getInstance().yu,
			})
		);
	}

	public isClickedMe({ height, width, x, y }: ClickTarget): boolean {
		if (Click.getInstance().isClicked) {
			if (
				IsPropsMatch({
					xs: x,
					ys: y,
					xe: x + width,
					ye: y + height,
					xv: Click.getInstance().xd,
					yv: Click.getInstance().yd,
				})
			)
				return true;
		}

		return false;
	}

	public addEffectTo({ ...props }: ClickAction): void {
		Click.getInstance().actions.push(props);
	}

	public checkClick(): void {
		Click.getInstance().onClickEnter();
	}
}
