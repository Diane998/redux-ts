import { ActionType } from '../action-types';

const {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_ERROR
} = ActionType;

interface SearchRepositoriesAction {
  type: typeof SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: typeof SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: typeof SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
