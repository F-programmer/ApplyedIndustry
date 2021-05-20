import FinalClass from "./FinalClass";
import { IElementFinalClass } from "./interfaces";
export class ElementFinalClass extends FinalClass {
	private color: string = "";
	private isVisible: boolean = false;

	constructor({ color, isVisible, ...props }: IElementFinalClass) {
		super(props);
		this.color = color;
		this.isVisible = isVisible;
	}

	public getAttrs(): IElementFinalClass {
		const superAttrs = super.getAttrs();
		return {
			...superAttrs,
			color: this.color,
			isVisible: this.isVisible,
		};
	}
}
