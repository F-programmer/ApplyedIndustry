import { HoverTriggerProps, ClickTriggerProps } from "../../../../events";
import { ConfigGrid } from "../config/config";
import { GridCell } from "../interfaces/config.interface";
import { FindTarged } from "../interfaces/events.interface";
import { IsPropsMatch } from "../../../../utils/validations";
import { SelectRangeTriggerProps } from "../../../../events/interfaces";
import { RenderGrid } from "./render";
export class EventsGrid {
	// singleton
	private static instance: EventsGrid;
	private constructor() {}
	public static getInstance(): EventsGrid {
		if (!this.instance) this.instance = new EventsGrid();
		return this.instance;
	}

	public getCellTarged({ x, y }: FindTarged): GridCell[] {
		const cells: GridCell[] = ConfigGrid.getInstance().getCells();
		return cells.filter((cell) =>
			IsPropsMatch({
				xs: cell.x,
				ys: cell.y,
				xe: cell.x + ConfigGrid.getInstance().gridSize,
				ye: cell.y + ConfigGrid.getInstance().gridSize,
				xv: x,
				yv: y,
			})
		);
	}

	public onHoverEnter({ x, y }: HoverTriggerProps): void {
		const currentTarget = EventsGrid.getInstance().getCellTarged({ x, y });
		if (currentTarget.length > 0) {
			const cell: GridCell = currentTarget[0];
			RenderGrid.getInstance().renderOneCell(cell);
		}
	}

	public onClickEnter({ x, y }: ClickTriggerProps): void {}

	public onSelectRangeEnter({
		xe,
		xs,
		ye,
		ys,
	}: SelectRangeTriggerProps): void {
		const cells: GridCell[] = ConfigGrid.getInstance().getCells();
		const selectedCells = cells.filter((cell) => {
			const isCenterClicked =
				xs >= cell.x &&
				ys >= cell.y &&
				xe <= cell.x + ConfigGrid.getInstance().gridSize &&
				ye <= cell.y + ConfigGrid.getInstance().gridSize;

			if (isCenterClicked) return isCenterClicked;
			else {
				const isCellInRange =
					xs <= cell.x &&
					ys <= cell.y &&
					xe >= cell.x + ConfigGrid.getInstance().gridSize &&
					ye >= cell.y + ConfigGrid.getInstance().gridSize;

				if (isCellInRange) return isCellInRange;
			}
			return false;
		});

		ConfigGrid.getInstance().selectedCells = selectedCells;
	}

	public onSelectRangeLeave(): void {
		ConfigGrid.getInstance().selectedCells = [];
	}
}
