import { IFinalClass } from "./index";

class FinalClass {
	private x: number = 0;
	private y: number = 0;
	private width: number = 0;
	private height: number = 0;

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	public getAttrs(): IFinalClass {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		};
	}
}

export { FinalClass };
export default FinalClass;
