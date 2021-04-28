import { IIsPropsMatch } from "./interfaces";
export const IsPropsMatch = ({
	xs,
	ys,
	xe,
	ye,
	xv,
	yv,
}: IIsPropsMatch): boolean => xv >= xs && yv >= ys && xv <= xe && yv <= ye;
