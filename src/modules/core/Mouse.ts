import { PropOf } from "../utils";
import { Main } from "./Main";
export class Mouse {
	// singleton
	private static instance: Mouse;
	private constructor() {}
	public static getInstance(): Mouse {
		if (!this.instance) this.instance = new Mouse();
		return this.instance;
	}

	public readonly states = {
		normal: "default",
		canDrag: "grab",
		draggin: "graggin",
		select: "cell",
		interact: "pointer",
		info: "help",
	};
	public currentState: States = "normal";

	public run(): void {
		Mouse.getInstance().setMouseMode("normal");
	}

	public setMouseMode(cursor: States): void {
		Mouse.getInstance().currentState = cursor;
		Mouse.getInstance().setIcon(
			Mouse.getInstance().states[Mouse.getInstance().currentState]
		);
	}

	public setIcon(value: string): void {
		Main.getInstance().addCss({ name: "cursor", value: value });
	}
}

const states = Mouse.getInstance().states;
type States = PropOf<typeof states>;
export type { States };
