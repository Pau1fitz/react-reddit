import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />	
  </Provider>, document.getElementById('root') as HTMLElement
);
registerServiceWorker();
