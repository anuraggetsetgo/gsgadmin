import React from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';

function Tabs(props) {
	const { currentTab, onChange, tabDetails } = props;

	return (
		<TabContext value={currentTab}>
			{/* <Box sx={{ borderBottom: 1, borderColor: 'blue' }}> */}
			<TabList onChange={onChange} aria-label='lab API tabs example'>
				{tabDetails.tabs.map((tabValue, index) => (
					<Tab label={tabDetails.tabLabel[index]} value={tabValue} />
				))}
			</TabList>
			{/* </Box> */}
		</TabContext>
	);
}

export default Tabs;
