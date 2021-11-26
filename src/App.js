import logo from './logo.svg';
import './App.css';
import Admin from './Actions/admin';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Admin />
			</div>{' '}
		</ThemeProvider>
	);
}

export default App;
