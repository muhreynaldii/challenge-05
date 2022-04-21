import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const logger = createLogger();
const middlewares = [thunk,logger]
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
