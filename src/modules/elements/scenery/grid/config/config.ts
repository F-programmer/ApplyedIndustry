import { Enviroments } from "../../../../controllers/enviroments";
import { RenderGrid } from "../controller/render";
import { GridCell } from "../interfaces/config.interface";
import { Hover } from "../../../../events/hover";
import { EventsGrid } from "../controller/events";
export class ConfigGrid {
	// singleton
	private static instance: ConfigGrid;
	private constructor() {}
	public static getInstance(): ConfigGrid {
		if (!this.instance) this.instance = new ConfigGrid();
		return this.instance;
	}

	public width: number = 0;
	public height: number = 0;
	public visible: boolean = true;
	public gridSize: number = 25;
	public lineSize: number = 2;
	public gridStretch: number = 2;
	public colors = {
		normal: "#78756c",
		limit: "#405351",
		hovered: "#5f96b0",
		background: "#cfcbb8",
	};

	private cells: GridCell[] = [];
	public getCells(): GridCell[] {
		return ConfigGrid.getInstance().cells;
	}

	public setup(): void {
		ConfigGrid.getInstance().width = Enviroments.getInstance().game_width;
		ConfigGrid.getInstance().height = Enviroments.getInstance().game_height;

		const settings = {
			size: ConfigGrid.getInstance().gridSize,
			w: ConfigGrid.getInstance().width,
			h: ConfigGrid.getInstance().height,
		};

		for (let i = 0; i <= settings.h; i += settings.size + 1) {
			for (let j = 0; j <= settings.h; j += settings.size + 1) {
				const newCell: GridCell = {
					height: settings.size,
					width: settings.size,
					x: i,
					y: j,
				};
				ConfigGrid.getInstance().cells.push(newCell);
			}
		}

		ConfigGrid.getInstance().events();
	}

	public render(): void {
		if (ConfigGrid.getInstance().visible) {
			RenderGrid.getInstance().render();
		}
	}

	public events(): void {
		Hover.getInstance().addEffectTo({
			onEnter: EventsGrid.getInstance().onHoverEnter,
			onLeave: EventsGrid.getInstance().onHoverLeave,
			target: {
				x: 0,
				y: 0,
				width: ConfigGrid.getInstance().width,
				height: ConfigGrid.getInstance().height,
			},
		});
	}
}
