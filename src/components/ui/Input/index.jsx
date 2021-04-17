import React from "react";
import {
	FormControl,
	FormHelperText,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
} from "@material-ui/core";

function UIInput({
	name,
	value,
	onChange = () => {},
	label,
	error,
	type = "text",
	onStartClick = () => {},
	onEndClick = () => {},
	startIcon,
	endIcon,
	max,
	min,
	fullWidth = false,
	...props
}) {
	const endAdornment = endIcon ? (
		<InputAdornment position="end">
			<IconButton onClick={onEndClick}>{endIcon}</IconButton>
		</InputAdornment>
	) : null;
	const startAdornment = startIcon ? (
		<InputAdornment position="start">
			<IconButton onClick={onStartClick}>{startIcon}</IconButton>
		</InputAdornment>
	) : null;

	return (
		<FormControl fullWidth={fullWidth} error={error ? true : false}>
			{label ? <InputLabel>{label}</InputLabel> : ""}
			<Input
				name={name}
				type={type}
				value={value}
				onChange={(element) => {
					const newValue = element.target.value;
					if (type === "number") {
						if (max && newValue > max) onChange(max);
						else if (min && newValue < min) onChange(min);
						else onChange(newValue);
					} else onChange(newValue);
				}}
				endAdornment={endAdornment}
				startAdornment={startAdornment}
				{...props}
			/>
			<FormHelperText>{error}</FormHelperText>
		</FormControl>
	);
}

export default UIInput;
export { UIInput };
