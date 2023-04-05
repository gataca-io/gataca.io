import { RootState } from "../../state/indexReducers"

export const getActiveSubroute = (state: RootState) =>
  state.appReducer.activeSubroute
