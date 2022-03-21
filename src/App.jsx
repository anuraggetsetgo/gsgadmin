import React from 'react';
import ReactDOM from 'react-dom';
// ADMIN ACTIONS
import AdminActions from '../src/Actions/Admin.action';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
// APP CSSS
import './App.css';

const App = () => (
	<ThemeProvider theme={theme}>
		<div className='App'>
			<AdminActions />
		</div>
	</ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
