import { HoverTriggerProps } from "../../../../events/interfaces";
import { ConfigGrid } from "../config/config";
import { GridCell } from "../interfaces/config.interface";
import { GlobalRender } from "../../../../controllers/render";
import { FindHovered } from "../interfaces/events.interface";
export class EventsGrid {
	// singleton
	private static instance: EventsGrid;
	private constructor() {}
	public static getInstance(): EventsGrid {
		if (!this.instance) this.instance = new EventsGrid();
		return this.instance;
	}

	public getCellHovered({ x, y }: FindHovered): GridCell[] {
		const cells: GridCell[] = ConfigGrid.getInstance().getCells();
		return cells.filter((cell) => {
			const settings = {
				x: cell.x,
				y: cell.y,
				xw: cell.x + cell.width,
				yh: cell.y + cell.height,
				xm: x,
				ym: y,
			};
			return (
				settings.xm >= settings.x &&
				settings.ym >= settings.y &&
				settings.xm <= settings.xw &&
				settings.ym <= settings.yh
			);
		});
	}

	public onHoverEnter({ x, y }: HoverTriggerProps): void {
		const currentHovered = EventsGrid.getInstance().getCellHovered({ x, y });
		if (currentHovered.length > 0) {
			const cell: GridCell = currentHovered[0];
			const stroke: number = ConfigGrid.getInstance().lineSize;
			GlobalRender.getInstance().drawQuadri({
				canvasX: cell.x + stroke,
				canvasY: cell.y + stroke,
				height: cell.height - stroke + 1,
				width: cell.width - stroke + 1,
				color: ConfigGrid.getInstance().colors.hovered,
			});
		}
	}
	public onHoverLeave({ x, y }: HoverTriggerProps): void {
		// const currentHovered = EventsGrid.getInstance().getCellHovered({ x, y });
		// if (currentHovered.length > 0) {
		// 	const cell: GridCell = currentHovered[0];
		// 	const stroke: number = ConfigGrid.getInstance().lineSize;
		// 	GlobalRender.getInstance().drawQuadri({
		// 		canvasX: cell.x + stroke,
		// 		canvasY: cell.y + stroke,
		// 		height: cell.height - stroke + 1,
		// 		width: cell.width - stroke + 1,
		// 		color: ConfigGrid.getInstance().colors.normal,
		// 	});
		// }
	}
}
