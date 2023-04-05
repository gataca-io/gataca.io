export interface IAppState {
  activeSubroute?: string
}

export interface ISetActiveSubrouteAction {
  type: AppActionTypes.SET_ACTIVE_SUBROUTE
  payload: {
    subroute?: string
  }
}

export type AppActions = ISetActiveSubrouteAction

export enum AppActionTypes {
  SET_ACTIVE_SUBROUTE = "notificaions/get",
}
