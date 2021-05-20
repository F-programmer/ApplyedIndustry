export interface IFinalClass {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface IRenderClass {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface IElementFinalClass extends IFinalClass {
	color: string;
	isVisible: boolean;
}
