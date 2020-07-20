import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard1573054Reducer from '../features/Dashboard1573054/redux/reducers'
import Dashboard1473055Reducer from '../features/Dashboard1473055/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard1573054: Dashboard1573054Reducer,
Dashboard1473055: Dashboard1473055Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});