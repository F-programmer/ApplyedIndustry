export class Cursors {
	// singleton
	private static instance: Cursors;
	private constructor() {}
	public static getInstance(): Cursors {
		if (!this.instance) this.instance = new Cursors();
		return this.instance;
	}

	public readonly move: "grab" = "grab";
	public readonly moving: "grabbing" = "grabbing";
	public readonly selectCells: "cell" = "cell";
	public readonly click: "pointer" = "pointer";
	public readonly info: "help" = "help";
}
