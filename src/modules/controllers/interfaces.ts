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
export interface IWriteText {
	color: string;
	canvasX: number;
	canvasY: number;
	text: string;
	font?: string;
}

export interface ItemRender {
	priority: number;
	action: () => void;
	canRender: boolean;
}
