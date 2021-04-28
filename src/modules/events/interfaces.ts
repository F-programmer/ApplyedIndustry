export interface HoverTriggerProps {
	isHovering: boolean;
	x: number;
	y: number;
}
export interface HoverTarget {
	x: number;
	y: number;
	width: number;
	height: number;
}
export interface HoverAction {
	onEnter: ({ ...props }: HoverTriggerProps) => void;
	onLeave: ({ ...props }: HoverTriggerProps) => void;
	target: HoverTarget;
}
