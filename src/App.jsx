import React from 'react';
import ReactDOM from 'react-dom';
// ADMIN ACTIONS
import AdminActions from '../src/Actions/Admin.action';

const App = () => <AdminActions />;
ReactDOM.render(<App />, document.getElementById('app'));
