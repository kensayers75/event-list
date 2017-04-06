// Store Dependencies
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

// Import Root Reducer
import rootReducer from './reducers/index';

export default function configureStore() {
  // For Dev Tools
  const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

  // Middleware
  const middleware = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];

  // Store
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      devTools
    )
  );

  // Reducer Hot Reloading
  if(module.hot) {
    module.hot.accept('./reducers/', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
