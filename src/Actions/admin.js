import React, { useState, useEffect } from 'react';
import LoginActions from './loginActions';
import HomeActions from './homeActions';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function Admin(props) {
	// Communication
	const handleLoggedInStatus = (status) => {
		console.log(status);
		setTimeout(() => {
			handleTabChange('', '2');
		}, 1000);
	};

	// Tab Work
	const [tabDetails, setTabDetails] = useState({
		tabs: ['1', '2'],
		tabLabel: ['Login', 'Console'],
		currentTab: '1',
		tabContent: [<LoginActions handleLoggedInStatus={handleLoggedInStatus} />, <HomeActions />],
	});
	const handleTabChange = (e, newCurrentTabValue) => {
		console.log(newCurrentTabValue);
		setTabDetails((prevState) => ({ ...prevState, currentTab: newCurrentTabValue }));
	};

	return (
		// <Router>
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={tabDetails.currentTab}>
				<Box sx={{ borderBottom: 1, borderColor: 'blue' }}>
					<TabList onChange={handleTabChange} aria-label='lab API tabs example'>
						{tabDetails.tabs.map((tabValue, index) => (
							<Tab label={tabDetails.tabLabel[index]} value={tabValue} />
						))}
					</TabList>
				</Box>
				{tabDetails.tabs.map((tabValue, index) => (
					<TabPanel value={tabValue}>
						<React.Fragment>{tabDetails.tabContent[index]}</React.Fragment>
					</TabPanel>
				))}
			</TabContext>
		</Box>
		// </Router>
	);
}
