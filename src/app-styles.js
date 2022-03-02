import { colors } from './Utilities/services';

let Styles = {
	// Border
	borderLightGrey: {
		borderColor: colors.lightGrey,
	},
	border1: {
		border: 1,
	},
	border2: {
		border: 2,
	},
	borderBottom1: {
		borderBottom: 1,
	},
	borderRadius2: {
		borderRadius: 2,
	},

	// Padding
	padding10: {
		padding: 10,
	},
	padding5: {
		padding: 5,
	},

	//  Margin
	marginTop10: {
		marginTop: 10,
	},
	marginTop5: {
		marginTop: 5,
	},
	marginRight5: {
		marginRight: 5,
	},

	// Background Color
	greyBG: {
		backgroundColor: colors.grey,
	},
	lightGreyBG: {
		backgroundColor: colors.lightGrey,
	},

	// Parent
	parentSquare: { paddingTop: '100%', position: 'relative', width: '100%' },
	childSquare: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
};

export { Styles };
