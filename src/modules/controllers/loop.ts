import { LoopRender } from "./render-loop";
import { Main } from "../core/main";
import { Hover } from "../events/hover";
export class Loop {
	// singleton
	private static instance: Loop;
	private constructor() {}
	public static getInstance(): Loop {
		if (!this.instance) this.instance = new Loop();
		return this.instance;
	}

	private ticks: number = 60;

	public run(): void {
		const window = Main.getInstance().getAtributes().windowRef;
		window.requestAnimationFrame(Loop.getInstance().exec);
	}

	private exec(): void {
		LoopRender.getInstance().run();

		Hover.getInstance().checkHover();

		const window = Main.getInstance().getAtributes().windowRef;
		window.requestAnimationFrame(Loop.getInstance().exec);
	}
}
