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
	// const [menuDetails, setMenuDetails] = useState({ open: false, menu: menuList[1] });
	const [menuDetails, setMenuDetails] = useState({ open: false, anchor: null });
	// Current View
	const [currentView, setcurrentView] = useState(menuList[0]);

	// ------------------
	// HANDLER FUNCTIONS
	// ------------------
	// Update Current View
	const updateCurrentView = (view) => {
		setcurrentView(view);
	};
	const handleMenuActions = (action, ...additionalData) => {
		let anchor, menu;
		switch (action) {
			case 'open':
				anchor = additionalData[0];
				setMenuDetails((prevState) => ({ ...prevState, open: true, anchor: anchor }));
				break;
			case 'close':
				setMenuDetails((prevState) => ({ ...prevState, open: false, anchor: null }));
				break;
			case 'set-view':
				menu = additionalData[0];
				updateCurrentView(menu);
				setMenuDetails((prevState) => ({ ...prevState, open: false, anchor: null }));
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
			// Current View
			currentView={currentView}
			updateCurrentView={updateCurrentView}
		/>
	);
}

export default AdminActions;
