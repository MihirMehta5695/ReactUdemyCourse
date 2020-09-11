import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer);
// Provider is a helper component which helps us to inject redux store into our react application.
// FInally, to hook up our React project with Redux, we need to pass on a special property to the Provider

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
