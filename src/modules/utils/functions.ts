import { BothTypeFunction } from "./types";
export const RemoveArrayDuplicates: BothTypeFunction<any[]> = (array) =>
	Array.from(new Set(array));
