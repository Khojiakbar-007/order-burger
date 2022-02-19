import { combineReducers } from "redux";

import burgerReducer from "./burgerlar/burgerlar.reducer";
import masalliqlarReducer from "./masalliqlar/masalliqlar.reducer";

const rootReducer = combineReducers({
  burgerlar: burgerReducer,
  masalliqlar: masalliqlarReducer,
});

export default rootReducer;
