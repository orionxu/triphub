import {applyMiddleware, compose, createStore} from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducer";

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);
const store = createStoreWithMiddleware(reducer);

export default store