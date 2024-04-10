// reducer of loading

import { ERROR, ERROR_MSG, LOADING, LOADING_FALSE, LOADING_TRUE } from "../action/types";

  export interface LoadingAction {
    type: typeof LOADING;
    payload: boolean
  }
  
  export interface Error {
    type: typeof ERROR;
    payload: null
  }
  export interface ErrorMsg {
    type: typeof ERROR_MSG;
    payload: null
  }
  
  export type LoadingActionType = Error | LoadingAction | ErrorMsg