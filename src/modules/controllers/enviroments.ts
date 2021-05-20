export class Enviroments {
	// singleton
	private static instance: Enviroments;
	private constructor() {}
	public static getInstance(): Enviroments {
		if (!this.instance) this.instance = new Enviroments();
		return this.instance;
	}

	public client_width: number = 0;
	public client_height: number = 0;
	public game_width: number = 0;
	public game_height: number = 0;
	public readonly font_size: number = 20;
	public readonly font: string = `${this.font_size}px Poppins`;
	public readonly font_pixels = { w: 12, h: 11, spacingH: 14 };
}
