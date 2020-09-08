import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);
// Provider is a helper component which helps us to inject redux store into our react application.
// FInally, to hook up our React project with Redux, we need to pass on a special property to the Provider

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
