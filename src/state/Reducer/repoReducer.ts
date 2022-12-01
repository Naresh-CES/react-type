import ActionTypes from './ActionType';

interface Reporeducer {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload: any;
// }
interface searchRepoAction {
  type: ActionTypes.SEARCH_REPO;
}
interface searchRepoSuccessAction {
  type: ActionTypes.SEARCH_REPO_SUCCESS;
  payload: [];
}
interface searchRepoErrorAction {
  type: ActionTypes.SEARCH_REPO_ERROR;
  payload: string;
}

type Action = searchRepoAction | searchRepoSuccessAction | searchRepoErrorAction;

const reducer = (state: Reporeducer, action: Action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPO_SUCCESS:
      return { loading: true, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
