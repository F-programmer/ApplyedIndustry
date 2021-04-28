import { SelectRangePoint, SelectRangeAction, Click } from "./index";

export class SelectRange {
	// singleton
	private static instance: SelectRange;
	private constructor() {}
	public static getInstance(): SelectRange {
		if (!this.instance) this.instance = new SelectRange();
		return this.instance;
	}

	private startPoint: SelectRangePoint | null = null;
	private endPoint: SelectRangePoint | null = null;

	private actions: SelectRangeAction[] = [];

	private onSelecStarts(): void {
		SelectRange.getInstance().actions.forEach((item) => {
			const [start, end] = [
				SelectRange.getInstance().startPoint,
				SelectRange.getInstance().endPoint,
			];
			if (start && end) {
				item.onEnter({
					xs: start.x,
					ys: start.y,
					xe: end.x,
					ye: end.y,
				});
			}
		});
	}
	private onSelecEnds(): void {
		SelectRange.getInstance().actions.forEach((item) => {
			item.onLeave({
				xs: -1,
				ys: -1,
				xe: -1,
				ye: -1,
			});
		});
	}

	// trigger vem daqui
	public addEffectTo({ onEnter, onLeave, ...props }: SelectRangeAction): void {
		Click.getInstance().addEffectTo({
			...props,
			onEnter: (props) => {
				if (
					!SelectRange.getInstance().endPoint &&
					!SelectRange.getInstance().startPoint
				) {
					SelectRange.getInstance().startPoint = props;
				}
			},
			onLeave: (props) => {
				if (
					!SelectRange.getInstance().endPoint &&
					SelectRange.getInstance().startPoint
				) {
					SelectRange.getInstance().endPoint = props;
					SelectRange.getInstance().onSelecStarts();
				} else {
					SelectRange.getInstance().startPoint = null;
					SelectRange.getInstance().endPoint = null;
					SelectRange.getInstance().onSelecEnds();
				}
			},
		});
		SelectRange.getInstance().actions.push({
			...props,
			onEnter,
			onLeave,
		});
	}

	public printProps(): void {
		console.log("from", SelectRange.getInstance().startPoint);
		console.log("to", SelectRange.getInstance().endPoint);
	}
}
