import { AppActions, AppActionTypes, IAppState } from "./appTypes"

const appState: IAppState = {
  activeSubroute: "",
}

export function appReducer(state = appState, action: AppActions): IAppState {
  switch (action.type) {
    case AppActionTypes.SET_ACTIVE_SUBROUTE:
      return {
        ...state,
        activeSubroute: action.payload?.subroute,
      } as IAppState
    default:
      return state
  }
}
