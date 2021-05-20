/* eslint-disable no-empty-pattern */
import { IDrawSquare, IDrawQuadri, IWriteText, ItemRender } from "./interfaces";
import { Main } from "../core/Main";
import { RemoveArrayDuplicates } from "../utils";
import { Enviroments } from "./enviroments";

export class GlobalRender {
	// singleton
	private static instance: GlobalRender;
	private constructor() {}
	public static getInstance(): GlobalRender {
		if (!this.instance) this.instance = new GlobalRender();
		return this.instance;
	}

	private renderItems: ItemRender[] = [];

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
	public writeText({
		font = Enviroments.getInstance().font,
		canvasX,
		canvasY,
		color,
		text,
	}: IWriteText): void {
		const attrs = Main.getInstance().getAtributes();
		GlobalRender.getInstance().selfRender(() => {
			attrs.ctx.font = font;
			attrs.ctx.fillStyle = color;
			attrs.ctx.fillText(
				text,
				canvasX,
				canvasY + Enviroments.getInstance().font_pixels.spacingH
			);
		});
	}

	public addFixedRender({ ...props }: ItemRender): void {
		GlobalRender.getInstance().renderItems.push(props);
	}

	public renderAllItems(): void {
		// referencia
		const itemsRef = GlobalRender.getInstance().renderItems;
		// pegando todas as prioridades possiveis, removendo duplicados
		const prioritys = RemoveArrayDuplicates(
			itemsRef.map((item) => item.priority)
			// ordeando crescentemente
		).sort();
		// percorrendo prioridades
		prioritys.forEach((priority) =>
			// percorrendo items
			itemsRef
				// filtrando os da prioridade atual
				.filter((item) => item.priority === priority)
				// renderizando
				.forEach((item) => {
					if (item.canRender) item.action();
				})
		);
	}
}
