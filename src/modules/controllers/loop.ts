import { LoopRender } from "./render-loop";
import { Main } from "../core/Main";
import { Hover } from "../events/hover";
import { Click } from "../events/click";
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
		Click.getInstance().checkClick();

		const window = Main.getInstance().getAtributes().windowRef;
		window.requestAnimationFrame(Loop.getInstance().exec);
	}
}
