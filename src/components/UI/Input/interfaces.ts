import { FunctionComponent } from "react";

export interface IUIInput {
	name: string;
	value: any;
	onChange: (...evt: any) => void;
	label?: string;
	error?: string;
	type: "text" | "date" | "number" | "search";
	onStartClick: (...evt: any) => void;
	onEndClick: (...evt: any) => void;
	startIcon?: JSX.Element | FunctionComponent | null;
	endIcon?: JSX.Element | FunctionComponent | null;
	max?: number;
	min?: number;
	fullWidth?: boolean;
	[propName: string]: any;
}
