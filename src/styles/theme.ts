import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2168fe",
		},
		secondary: {
			main: "#ddd",
		},
		text: {
			primary: "#555",
			secondary: "#2168fe",
			disabled: "#e1e2e1",
		},
		info: {
			main: "#308ffe",
		},
		common: {
			black: "#000",
			white: "#fff",
		},
		success: {
			main: "#00a824",
		},
		error: {
			main: "#ff4949",
		},
	},
	typography: {
		allVariants: {
			color: "#555",
		},
	},
});

export default theme;
