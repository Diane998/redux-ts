import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initalState: RepositoriesState = {
  loading: false,
  error: null,
  data: []
};

const {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_ERROR
} = ActionType;

const repositoriesReducer = (
  state: RepositoriesState = initalState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
