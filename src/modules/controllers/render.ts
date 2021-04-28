/* eslint-disable no-empty-pattern */
import { IDrawSquare, IDrawQuadri } from "./interfaces";
import { Main } from "../core/main";

export class GlobalRender {
	// singleton
	private static instance: GlobalRender;
	private constructor() {}
	public static getInstance(): GlobalRender {
		if (!this.instance) this.instance = new GlobalRender();
		return this.instance;
	}

	private preserveState(): void {
		const attrs = Main.getInstance().getAtributes();
		attrs.ctx.save();
	}
	private restoreState(): void {
		const attrs = Main.getInstance().getAtributes();
		attrs.ctx.restore();
	}
	public selfRender(action: () => void): void {
		GlobalRender.getInstance().preserveState();
		action();
		GlobalRender.getInstance().restoreState();
	}

	public drawSquare({ canvasX, canvasY, color, size }: IDrawSquare): void {
		const attrs = Main.getInstance().getAtributes();
		GlobalRender.getInstance().selfRender(() => {
			attrs.ctx.fillStyle = color;
			attrs.ctx.fillRect(canvasX, canvasY, size, size);
		});
	}
	public drawQuadri({
		canvasX,
		canvasY,
		color,
		height,
		width,
	}: IDrawQuadri): void {
		const attrs = Main.getInstance().getAtributes();
		GlobalRender.getInstance().selfRender(() => {
			attrs.ctx.fillStyle = color;
			attrs.ctx.fillRect(canvasX, canvasY, width, height);
		});
	}
}
