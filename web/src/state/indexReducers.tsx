import { combineReducers } from "redux"

// Import other reducers
import { appReducer } from "../pages/appStore/index"

// Combine all reducers
const rootReducer = combineReducers({
  appReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
