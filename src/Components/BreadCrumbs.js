import React from 'react';
// MUI
import { Breadcrumbs, Link, Typography } from '@mui/material';

function AdminBreadCrumbs(props) {
	// De-structuring props
	const { currentView, goToAdmin } = props;
	return (
		<Breadcrumbs>
			<Link underline='hover' variant='h5' color='primary' onClick={goToAdmin}>
				Admin
			</Link>
			{currentView !== 'Admin' ? <Typography variant='h5'>{currentView}</Typography> : null})
		</Breadcrumbs>
	);
}

export default AdminBreadCrumbs;
