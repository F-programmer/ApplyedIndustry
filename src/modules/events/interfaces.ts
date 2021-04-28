export interface DefaultCordProps {
	x: number;
	y: number;
}

export interface DefaultElementEventProps extends DefaultCordProps {
	width: number;
	height: number;
}

export interface HoverTriggerProps extends DefaultCordProps {
	isHovering: boolean;
}
export interface HoverTarget extends DefaultElementEventProps {}
export interface HoverAction {
	onEnter: ({ ...props }: HoverTriggerProps) => void;
	onLeave: ({ ...props }: HoverTriggerProps) => void;
	target: HoverTarget;
}

export interface ClickTriggerProps extends DefaultCordProps {}
export interface ClickTarget extends DefaultElementEventProps {}
export interface ClickAction {
	onEnter: ({ ...props }: ClickTriggerProps) => void;
	onLeave: ({ ...props }: ClickTriggerProps) => void;
	target: ClickTarget;
}

export interface SelectRangeTriggerProps {
	xs: number;
	ys: number;
	xe: number;
	ye: number;
}
export interface SelectRangeTarget extends DefaultElementEventProps {}
export interface SelectRangeAction {
	onEnter: ({ ...props }: SelectRangeTriggerProps) => void;
	onLeave: ({ ...props }: SelectRangeTriggerProps) => void;
	target: SelectRangeTarget;
}
export interface SelectRangePoint extends DefaultCordProps {}
