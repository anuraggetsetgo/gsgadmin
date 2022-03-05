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
	// Current View
	const [currentView, setcurrentView] = useState(menuList[0]);

	// ------------------
	// HANDLER FUNCTIONS
	// ------------------
	// Update Current View
	const updateCurrentView = (view) => {
		setcurrentView(view);
	};
	return (
		<AdminScreen
			// Current View
			currentView={currentView}
			updateCurrentView={updateCurrentView}
		/>
	);
}

export default AdminActions;
