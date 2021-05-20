import { ConfigGrid } from "../elements/scenery/grid/config/config";
import { MainCreate } from "../elements/create/MainCreate";
export class GlobalSetup {
	// singleton
	private static instance: GlobalSetup;
	private constructor() {}
	public static getInstance(): GlobalSetup {
		if (!this.instance) this.instance = new GlobalSetup();
		return this.instance;
	}

	public run(): void {
		ConfigGrid.getInstance().setup();

		MainCreate.getInstance().run();
	}
}
