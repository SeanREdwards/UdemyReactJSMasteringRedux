import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers'
import thunk from 'redux-thunk';

import { fetchMemes } from './Actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));