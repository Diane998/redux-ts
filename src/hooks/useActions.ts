import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionsCreators, dispatch);
};
