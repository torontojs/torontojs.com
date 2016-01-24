import {routeReducer} from "redux-simple-router";
import {addReducer} from "incremental-redux-reducers";

// add redux-simple-router reducer via incremental-redux-reducers
export default addReducer("routing", routeReducer);
