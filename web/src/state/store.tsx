import { applyMiddleware, compose, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import { createEpicMiddleware } from "redux-observable"
import { history } from "../services/history"
import rootEpic from "./indexEpics"
import rootReducer from "./indexReducers"
import React from "react"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

typeof window !== "undefined" && (window.React = React)

const epicMiddleware = createEpicMiddleware({
  dependencies: {},
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers())
  epicMiddleware.run(rootEpic)
  return store
}
