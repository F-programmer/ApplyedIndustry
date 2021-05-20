import { IElementFinalClass } from "./../../../models/classes/interfaces";
import { RenderButton } from "../controller/render";

export interface IConfigButton extends IElementFinalClass {
	text: string;
	priority: number;
	textColor?: string;
	padding?: number;
}

export interface IConfigButtonAuto {
	text: string;
	textColor?: string;
	color: string;
	priority: number;
	x: number;
	y: number;
	isVisible?: boolean;
	padding?: number;
}

export interface IConfigButtonAttrs extends IConfigButton {
	renderService: RenderButton;
}
