import { BothTypeFunction } from "./types";
export const RemoveArrayDuplicates: BothTypeFunction<any[]> = (array) =>
	Array.from(new Set(array));

export const lumos = (color: string, rate: number): string => {
	const black = 0;
	const white = 255;

	// accepts #000, #000000, 000, 000000, //#0000 and 0000
	// #3, #6, 3, 6, //#4 and 4

	let hex = color.replace(/[^0-9a-f]/gi, "");
	/* removes invalids characters
	^ = not
	g = global (to all text)
	i = ignore case (accepts T and t)
	*/

	// validation to rgb or rrggbb
	const isValid = hex.length === 6 || hex.length === 3;
	if (!isValid) throw new Error("Invalid HEX value");
	if (hex.length === 3)
		hex = hex
			.split("")
			.map((m) => `${m}${m}`)
			.join("");

	const groups = hex.match(/([0-9a-f]){2}/gi);
	if (groups) {
		const parsed = groups.map((m) => {
			const rgb = parseInt(m, 16);
			// converts to decimal base m value in string from hexadecimal base
			const luminance = rgb + rate * white;
			// when + near 255, + white

			const validColor = Math.round(
				Math.min(white, Math.max(black, luminance))
			);
			// cannot be more than 255 and less then 0
			// cannot be decimal

			return `0${validColor.toString(16)}`.slice(-2);
			// cannot be 1 character, when c => 0c, when cc => cc
		});

		return `#${parsed.join("")}`;
	} else throw new Error("Values HEX not found");
};
