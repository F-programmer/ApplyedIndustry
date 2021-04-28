export const isDefined = (value: any): boolean => {
	// validando se nao possui valores padroes de 'null'
	if (value !== null && value !== undefined && value !== "") {
		// validando se eh um array
		if (typeof value === "object") {
			// validando se possui pelo menos 1 elemento
			if (Array.isArray(value)) return value.length > 0;
			// validando se nao eh objeto vazio ({})
			else return Object.keys(value).length > 0;

			// se nao eh nem array, nem objeto, nem 'null', eh valido
		} else return true;
	}

	// caso seja 'null', eh invalido
	return false;
};

export const randomColorPicker = (): string => {
	const hexadecimais = "0123456789ABCDEF";
	let color = "#";

	// pega 6 posicoes aleatorias do array
	for (var i = 0; i < 6; i++) {
		color += hexadecimais[Math.floor(Math.random() * 16)];
	}
	return color;
};
