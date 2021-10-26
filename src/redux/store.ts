import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./reducers";

const composeEnhancers =
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store