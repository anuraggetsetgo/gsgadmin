import React from 'react';
// MUI COMPONENTS
import { Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
// CONFIG
import Config from '../Utilities/config';

function StatusTabs(props) {
	// De-structuring props
	const { currentTab, onChange } = props;
	// Preparing tabs
	const statusTabs = Config.statusTabs;
	const statusTabLabels = Config.statusTabLabels;

	return (
		<TabContext value={currentTab}>
			<TabList onChange={onChange}>
				{statusTabs.map((tabValue, index) => (
					<Tab key={`${tabValue}-${index}`} label={statusTabLabels[index]} value={tabValue} />
				))}
			</TabList>
		</TabContext>
	);
}

export default StatusTabs;
