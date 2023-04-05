import { AppActionTypes, ISetActiveSubrouteAction } from "./appTypes"

export const setActiveSubroute = (
  subroute?: string
): ISetActiveSubrouteAction => {
  return {
    type: AppActionTypes.SET_ACTIVE_SUBROUTE,
    payload: {
      subroute,
    },
  }
}
