import React from 'react';
//Home Screen
import HomeScreen from '../Screens/Home.screen';

function HomeActions(props) {
	// De-structuring props
	const { updateCurrentView } = props;
	return <HomeScreen updateCurrentView={updateCurrentView} />;
}

export default HomeActions;
