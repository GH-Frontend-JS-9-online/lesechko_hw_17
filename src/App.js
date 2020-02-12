import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import MainScreen from './mainScreen/mainSreen';

function App() {
	return (
		<div className="App">
			<MainScreen massanger={false} listProject={true} />
		</div>
	);
}

export default App;
