import { RefObject } from "react";
import { Start } from "../exec/start";
import { Hover, Click } from "../events";
import { AddCss } from "./index";

export class Main {
	// attrs
	private static ref: HTMLCanvasElement;
	private static ctx: CanvasRenderingContext2D;
	private static windowRef: typeof globalThis;

	// singleton
	private static instance: Main;
	private constructor() {}
	public static getInstance(): Main {
		if (!this.instance) this.instance = new Main();
		return this.instance;
	}

	public setup(
		ref: RefObject<HTMLCanvasElement>,
		windowRef: typeof globalThis
	) {
		if (ref.current) {
			const canvas: HTMLCanvasElement = ref.current;
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;

			// events
			// hover
			canvas.onmouseenter = (props) =>
				Hover.getInstance().onHover({
					isHovering: true,
					x: props.x,
					y: props.y,
				});
			canvas.onmousemove = (props) =>
				Hover.getInstance().onHover({
					isHovering: true,
					x: props.x,
					y: props.y,
				});
			canvas.onmouseleave = (props) =>
				Hover.getInstance().onHover({
					isHovering: false,
					x: props.x,
					y: props.y,
				});
			// click
			canvas.onmousedown = (props) =>
				Click.getInstance().onMouseDown({
					x: props.x,
					y: props.y,
				});
			canvas.onmouseup = (props) =>
				Click.getInstance().onMouseUp({
					x: props.x,
					y: props.y,
				});

			Main.ref = canvas;

			const context: any = Main.ref.getContext("2d");
			if (context) {
				Main.ctx = context;
			}
		}
		Main.windowRef = windowRef;
	}

	public saveCtxState(): boolean {
		if (Main.ctx) {
			Main.ctx.save();
			return true;
		}
		return false;
	}

	public restoreCtxState(): boolean {
		if (Main.ctx) {
			Main.ctx.restore();
			return true;
		}
		return false;
	}

	public run(): void {
		Start.run();
	}

	public getAtributes(): {
		ref: HTMLCanvasElement;
		ctx: CanvasRenderingContext2D;
		windowRef: typeof globalThis;
	} {
		return {
			ref: Main.ref,
			ctx: Main.ctx,
			windowRef: Main.windowRef,
		};
	}

	public addCss({ name, value }: AddCss): void {
		// styles
		Main.ref.style[name] = value;
	}
}
