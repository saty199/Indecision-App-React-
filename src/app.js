import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp options={[2,3,4,5,0,6]}/>,document.getElementById('app'));
