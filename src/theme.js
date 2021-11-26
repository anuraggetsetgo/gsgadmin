import { createTheme } from '@mui/material/styles';

import { colors } from './services';

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primary,
		},
		secondary: {
			main: colors.secondary,
		},
		action: {
			disabled: colors.disableButtonColor,
		},
	},
	spacing: (value) => `${value * 10}px`,
	typography: {
		fontFamily: ['Roboto', 'Helvetica', 'Arial'],
		spacing: (value) => `${value * 10}px`,
		color: colors.secondary,

		root: {
			color: colors.secondary,
		},
		body1: {
			fontSize: '16px',
		},
		h1: {
			fontSize: '48px',
			lineHeight: '40px',
			fontWeight: 'normal',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		h2: {
			fontSize: '40px',
			lineHeight: '32px',
			fontWeight: 'normal',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		h3: {
			fontSize: '32px',
			lineHeight: '24px',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		h4: {
			fontSize: '24px',
			lineHeight: '20px',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		h5: {
			fontSize: '20px',
			lineHeight: '16px',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		h6: {
			fontSize: '16px',
			lineHeight: '14px',
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		
		},
		body2: {
			fontSize: '14px',
			lineHeight: '1.5rem',
		},
		subtitle1: {
			fontSize: '12px',
			// lineHeight: '1rem',
		},
		subtitle2: {
			fontSize: '10px',
			// lineHeight: '1.75rem',
			fontFamily: 'Roboto',
			fontWeight: 'normal',
		},
		caption:{fontSize:'8px'}
	},
	// MuiButton: {
	// 	root: {
	// 		borderRadius: '50px',
	// 	},
	// },
	// overrides: {
	// 	MuiCssBaseline: {
	// 		'@global': {
	// 			body: {
	// 				fontFamily: 'Poppins',
	// 			},
	// 		},
	// 	},
	// 	MuiButton: {
	// 		// Name of the rule
	// 		root: {
	// 			//borderRadius: '20px',
	// 			textTransform: 'none',
	// 		},
	// 		outlined: {
	// 			padding: '8px 20px',
	// 		},
	// 		contained: {
	// 			padding: '8px 20px',
	// 		},
	// 		containedPrimary: {
	// 			color: colors.secondary,
	// 		},
	// 	},

	// 	MuiSelect: {
	// 		root: { color: '#c0c0c0' },
	// 	},
	// 	MuiList: {
	// 		root: { background: 'none' },
	// 	},
	// 	MuiTextField: {
	// 		root: {
	// 			margin: '10px',
	// 			width: '25ch',
	// 		},
	// 	},
	// },
	// props: {
	// 	// Name of the component ️
	// 	MuiButtonBase: {
	// 		// The default props to change
	// 		disableRipple: true, // No more ripple, on the whole application 💣!
	// 	},
	// },
});

export default theme;
