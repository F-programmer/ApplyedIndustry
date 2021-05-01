export interface IDrawSquare {
	color: string;
	canvasX: number;
	canvasY: number;
	size: number;
}
export interface IDrawQuadri {
	color: string;
	canvasX: number;
	canvasY: number;
	width: number;
	height: number;
}

export interface ItemRender {
	priority: number;
	action: (props: IDrawQuadri | IDrawSquare) => void;
	canRender: boolean;
	props: IDrawQuadri | IDrawSquare;
}
