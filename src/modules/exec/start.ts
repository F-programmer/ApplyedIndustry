import { Main } from "../core/Main";
import { Enviroments } from "../controllers/enviroments";
import { Loop } from "../controllers/loop";
import { GlobalSetup } from "./global-setup";
import { GlobalRender } from "../controllers/render";
import { Mouse } from "../core/Mouse";
import { Colors } from "../layout/styles/colors";

export class Start {
	private static instance: Start | null = null;

	private constructor() {}
	private static getInstance(): Start {
		if (!this.instance) this.instance = new Start();
		return this.instance;
	}

	public static run(): void {
		const attrs = Main.getInstance().getAtributes();

		const bigger: number =
			attrs.ref.width > attrs.ref.height
				? attrs.ref.height
				: attrs.ref.width;

		Enviroments.getInstance().client_width = bigger;
		Enviroments.getInstance().client_height = bigger;
		Enviroments.getInstance().game_width = bigger;
		Enviroments.getInstance().game_height = bigger;

		GlobalRender.getInstance().drawQuadri({
			canvasX: 0,
			canvasY: 0,
			color: Colors.ocreLight,
			height: Enviroments.getInstance().client_height,
			width: Enviroments.getInstance().client_width,
		});

		GlobalSetup.getInstance().run();

		Mouse.getInstance().run();

		Loop.getInstance().run();
	}
}
