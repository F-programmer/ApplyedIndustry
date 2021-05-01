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
		interface CellConditions {
			xc: number;
			yc: number;
			mxc: number;
			myc: number;
		}
		const getCellProps = (cell: GridCell): CellConditions => ({
			xc: cell.x,
			yc: cell.y,
			mxc: cell.x + ConfigGrid.getInstance().gridSize,
			myc: cell.y + ConfigGrid.getInstance().gridSize,
		});
		const getGridCellProps = (cell: CellConditions): GridCell => ({
			x: cell.xc,
			y: cell.yc,
		});

		const cells: GridCell[] = ConfigGrid.getInstance().getCells();

		const getPointerCell = (
			conditions: {
				minX: number;
				minY: number;
				maxX: number;
				maxY: number;
			},
			useCondition: (cell: GridCell) => boolean = () => false
		): CellConditions => {
			const selected = cells.filter((cell) => {
				const cellProps = getCellProps(cell);
				return (
					useCondition(cell) ||
					(conditions.minX >= cellProps.xc &&
						conditions.minY >= cellProps.yc &&
						conditions.maxX <= cellProps.mxc &&
						conditions.maxY <= cellProps.myc)
				);
			})[0];
			return getCellProps(
				selected || {
					x: 0,
					y: 0,
				}
			);
		};

		const defaultEmpty = {
			minX: -1,
			minY: -1,
			maxX: -1,
			maxY: -1,
		};
		// 4 bordas da selecao
		const sffCell = getPointerCell({
			minX: xs,
			minY: ys,
			maxX: xs,
			maxY: ys,
		});
		const sllCell = getPointerCell({
			minX: xe,
			minY: ye,
			maxX: xe,
			maxY: ye,
		});
		const sflCell = getPointerCell(defaultEmpty, (cell) => {
			const cellProps = getCellProps(cell);
			return (
				// selecionar ponto x maximo
				cellProps.mxc === sllCell.mxc &&
				cellProps.xc <= sllCell.mxc &&
				// selcionar com base em y minimo
				cellProps.yc === sffCell.yc
			);
		});
		const slfCell = getPointerCell(defaultEmpty, (cell) => {
			const cellProps = getCellProps(cell);
			return (
				// selecionar ponto x maximo
				cellProps.myc === sllCell.myc &&
				cellProps.yc <= sllCell.myc &&
				// selecionar com base em x minimo
				cellProps.xc === sffCell.xc
			);
		});

		const selectedCells = cells.filter((cell) => {
			const cellProps = getCellProps(cell);
			// verificar se a cell esta dentro do range
			const isCellInRange =
				xs <= cellProps.xc &&
				ys <= cellProps.yc &&
				xe >= cellProps.mxc &&
				ye >= cellProps.myc;

			const isCellInBorderRange =
				// top
				(cellProps.xc >= sffCell.xc &&
					cellProps.xc <= sflCell.xc &&
					cellProps.yc === sffCell.yc) ||
				// left
				(cellProps.yc >= sffCell.yc &&
					cellProps.yc <= slfCell.yc &&
					cellProps.xc === slfCell.xc) ||
				// right
				(cellProps.yc >= sffCell.yc &&
					cellProps.yc <= slfCell.yc &&
					cellProps.xc === sflCell.xc) ||
				// bottom
				(cellProps.xc >= sffCell.xc &&
					cellProps.xc <= sflCell.xc &&
					cellProps.yc === sllCell.yc);
			return isCellInRange || isCellInBorderRange;
		});
		selectedCells.push(getGridCellProps(sffCell));
		selectedCells.push(getGridCellProps(sflCell));
		selectedCells.push(getGridCellProps(slfCell));
		selectedCells.push(getGridCellProps(sllCell));

		ConfigGrid.getInstance().selectedCells = selectedCells;
	}

	public onSelectRangeLeave(): void {
		ConfigGrid.getInstance().selectedCells = [];
	}
}
