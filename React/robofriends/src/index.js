import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import CardArray from './CardArray';
import { robots } from './robots';

ReactDOM.render(
	<CardArray robots={robots}/>
	, document.getElementById('root')
);
