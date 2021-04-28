import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_ERROR
} = ActionType;

export const searchRepositories = (term: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SEARCH_REPOSITORIES });

  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term
      }
    });

    const names = data.objects.map((res: any) => res.package.name);

    dispatch({ type: SEARCH_REPOSITORIES_SUCCESS, payload: names });
  } catch (err) {
    dispatch({ type: SEARCH_REPOSITORIES_ERROR, payload: err.message });
  }
};
