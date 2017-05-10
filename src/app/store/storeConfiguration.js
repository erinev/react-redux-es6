import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
};

export default { configureStore };
