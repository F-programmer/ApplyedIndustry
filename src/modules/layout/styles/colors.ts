import { PropOf } from "../../utils/types";
export class Colors {
	public static readonly purpleDark: string = "#392245";
	public static readonly purpleNormal: string = "#4f3c80";
	public static readonly purpleLight: string = "#78618c";
	public static readonly purpleOppacity: string = "#b089a1";
	public static readonly greenDark: string = "#091d21";
	public static readonly greenNormal: string = "#405351";
	public static readonly greenLight: string = "#81906c";
	public static readonly blueDark: string = "#161d80";
	public static readonly blueNormal: string = "#204d85";
	public static readonly blueLight: string = "#4d73a1";
	public static readonly redDark: string = "#66333c";
	public static readonly redNormal: string = "#ab3232";
	public static readonly orangeDark: string = "#d44f26";
	public static readonly orangeLight: string = "#ef7e45";
	public static readonly yellowDark: string = "#f0c188";
	public static readonly yellowLight: string = "#b5a774";
	public static readonly lightblueDark: string = "#5f96b0";
	public static readonly lightblueNormal: string = "#72b4c4";
	public static readonly lightblueLight: string = "#a6dde3";
	public static readonly ocreDark: string = "#78756c";
	public static readonly ocreNormal: string = "#917d65";
	public static readonly ocreLight: string = "#cfcbb8";

	public static readonly colors = {
		purpleDark: Colors.purpleDark,
		purpleNormal: Colors.purpleNormal,
		purpleLight: Colors.purpleLight,
		purpleOppacity: Colors.purpleOppacity,
		greenDark: Colors.greenDark,
		greenNormal: Colors.greenNormal,
		greenLight: Colors.greenLight,
		blueDark: Colors.blueDark,
		blueNormal: Colors.blueNormal,
		blueLight: Colors.blueLight,
		redDark: Colors.redDark,
		redNormal: Colors.redNormal,
		orangeDark: Colors.orangeDark,
		orangeLight: Colors.orangeLight,
		yellowDark: Colors.yellowDark,
		yellowLight: Colors.yellowLight,
		lightblueDark: Colors.lightblueDark,
		lightblueNormal: Colors.lightblueNormal,
		lightblueLight: Colors.lightblueLight,
		ocreDark: Colors.ocreDark,
		ocreNormal: Colors.ocreNormal,
		ocreLight: Colors.ocreLight,
	};
}
const colors = Colors.colors;
export type Color = PropOf<typeof colors>;
