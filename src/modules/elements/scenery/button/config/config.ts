import { ElementFinalClass } from "modules/elements/models/classes";
import {
	IConfigButton,
	IConfigButtonAuto,
	IConfigButtonAttrs,
} from "../interfaces/button.interface";
import { Colors } from "../../../../layout/styles/colors";
import { RenderButton } from "../controller/render";
import { DefaultStylesButton } from "../render/mocks";
import { Enviroments } from "../../../../controllers/enviroments";
import { EventsButton } from "../controller/events";

export class CButton extends ElementFinalClass {
	private text: string = "";
	private textColor: string = "";
	private priority: number = 0;
	private padding: number = 0;
	private renderService: RenderButton = new RenderButton();

	constructor({
		text,
		priority,
		textColor = Colors.purpleDark,
		padding = DefaultStylesButton.padding,
		...props
	}: IConfigButton | IConfigButtonAuto) {
		super({
			...(() => {
				const propsCopy: any = props;
				const { font_pixels } = Enviroments.getInstance();
				return {
					color: propsCopy.color,
					isVisible: propsCopy.isVisible ? propsCopy.isVisible : true,
					x: propsCopy.x,
					y: propsCopy.y,
					width: propsCopy.width || text.length * font_pixels.w,
					height: propsCopy.height || font_pixels.h * 1.6,
				};
			})(),
		});
		this.text = text;
		this.textColor = textColor;
		this.priority = priority;
		this.padding = padding;
	}

	public getAttrs(): IConfigButtonAttrs {
		const superAttrs = super.getAttrs();
		return {
			...superAttrs,
			priority: this.priority,
			text: this.text,
			textColor: this.textColor,
			padding: this.padding,
			renderService: this.renderService,
		};
	}

	public run(): void {
		const attrs = this.getAttrs();

		this.renderService.setup({
			buttonProps: attrs,
			padding: this.padding,
		});

		const eventsService = new EventsButton();
		eventsService.setup(this);
	}
}
