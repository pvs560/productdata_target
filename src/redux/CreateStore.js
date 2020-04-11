import rootReducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';

    const logger = createLogger();
    const middleware = applyMiddleware(thunk, logger);
    const storeEnhancers = compose(
     middleware
    );
 

    export default createStore (
      rootReducer,
      storeEnhancers
    );
