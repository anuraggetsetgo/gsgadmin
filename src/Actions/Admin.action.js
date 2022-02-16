import React, { useState } from 'react';
// CONFIG
import Config from '../Utilities/config';
// ADMIN SCREEN
import AdminScreen from '../Screens/Admin.screen';

function AdminActions() {
	// MENU LIST
	const menuList = Config.menuList;
	// ----------------
	// REQUIRED STATES
	// ----------------
	// MENU
	const [menuDetails, setMenuDetails] = useState({ open: false, menu: menuList[2] });
	// ------------------
	// HANDLER FUNCTIONS
	// ------------------
	const handleMenuActions = (action, ...additionalData) => {
		let menu;
		switch (action) {
			case 'open':
				setMenuDetails((prevState) => ({ ...prevState, open: true, menu: '' }));
				break;
			case 'close':
				setMenuDetails((prevState) => ({ ...prevState, open: false, menu: '' }));
				break;
			case 'set-menu':
				menu = additionalData[0];
				setMenuDetails((prevState) => ({ ...prevState, open: false, menu: menu }));

				break;
			default:
				break;
		}
	};
	return (
		<AdminScreen
			// MENU
			menuDetails={menuDetails}
			handleMenuActions={handleMenuActions}
		/>
	);
}

export default AdminActions;
