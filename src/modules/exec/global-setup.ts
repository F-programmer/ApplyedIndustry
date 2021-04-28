import { ConfigGrid } from "../elements/scenery/grid/config/config";
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
	}
}
