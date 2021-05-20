import { ConfigGrid } from "../config/config";
import { GlobalRender } from "../../../../controllers/render";
import { GridCell } from "../interfaces/config.interface";
export class RenderGrid {
	// singleton
	private static instance: RenderGrid;
	private constructor() {}
	public static getInstance(): RenderGrid {
		if (!this.instance) this.instance = new RenderGrid();
		return this.instance;
	}

	public render(): void {
		const settings = {
			size: ConfigGrid.getInstance().gridSize,
			stroke: ConfigGrid.getInstance().lineSize,
			w: ConfigGrid.getInstance().width,
			h: ConfigGrid.getInstance().height,
			color: ConfigGrid.getInstance().colors.normal,
			colorLimit: ConfigGrid.getInstance().colors.limit,
		};

		// background
		ConfigGrid.getInstance()
			.getCells()
			.forEach((cell) =>
				GlobalRender.getInstance().drawQuadri({
					canvasX: cell.x + settings.stroke,
					canvasY: cell.y + settings.stroke,
					height: settings.size - settings.stroke + 1,
					width: settings.size - settings.stroke + 1,
					color: ConfigGrid.getInstance().colors.background,
				})
			);

		// grid lines render
		// vertical
		for (let i = 0; i <= settings.h; i += settings.size + 1) {
			GlobalRender.getInstance().drawQuadri({
				canvasX: 0,
				canvasY: i,
				color: settings.color,
				height: settings.stroke,
				width: settings.w,
			});
		}
		// horizontal
		for (let i = 0; i <= settings.w; i += settings.size + 1) {
			GlobalRender.getInstance().drawQuadri({
				canvasX: i,
				canvasY: 0,
				color: settings.color,
				height: settings.h,
				width: settings.stroke,
			});
		}
		// bordas
		GlobalRender.getInstance().drawQuadri({
			canvasX: 0,
			canvasY: 0,
			color: settings.colorLimit,
			height: settings.h,
			width: settings.stroke,
		});
		GlobalRender.getInstance().drawQuadri({
			canvasX: 0,
			canvasY: 0,
			color: settings.colorLimit,
			height: settings.stroke,
			width: settings.w,
		});
		GlobalRender.getInstance().drawQuadri({
			canvasX: settings.w - settings.stroke,
			canvasY: 0,
			color: settings.colorLimit,
			height: settings.h,
			width: settings.stroke,
		});
		GlobalRender.getInstance().drawQuadri({
			canvasX: 0,
			canvasY: settings.h - settings.stroke,
			color: settings.colorLimit,
			height: settings.stroke,
			width: settings.w,
		});

		// selected cells
		const cellsRef = ConfigGrid.getInstance().selectedCells;
		if (cellsRef !== null) {
			cellsRef.forEach((cell) =>
				RenderGrid.getInstance().renderOneCell(
					cell,
					ConfigGrid.getInstance().colors.selected
				)
			);
		}
	}

	public renderOneCell(
		cell: GridCell,
		color: string = ConfigGrid.getInstance().colors.hovered
	): void {
		const settings = {
			stroke: ConfigGrid.getInstance().lineSize,
			size: ConfigGrid.getInstance().gridSize,
			mh: ConfigGrid.getInstance().height,
			mw: ConfigGrid.getInstance().width,
		};

		GlobalRender.getInstance().drawQuadri({
			canvasX: cell.x + settings.stroke,
			canvasY: cell.y + settings.stroke,
			height:
				// o valor a ser renderizado ultrapassa os limites do grid?
				cell.y + settings.size > settings.mh
					? // caso sim, descontamos a posicao + 2 * a linha dos limites da grade
					  // 2 * pq tem a linha da cell + a linha da borda da grid
					  settings.mh - cell.y - settings.stroke * 2
					: settings.size,
			// o valor a ser renderizado ultrapassa os limites do grid?
			width:
				cell.x + settings.size > settings.mw
					? // caso sim, descontamos a posicao + 2 * a linha dos limites da grade
					  // 2 * pq tem a linha da cell + a linha da borda da grid
					  settings.mw - cell.x - settings.stroke * 2
					: settings.size,
			color,
		});
	}
}
