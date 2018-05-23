import {createStore, combineReducers} from 'redux';
import {modalReducer} from './modal-state';
import {navModalReducer} from './nav-modal-state';
import {confirmReducer} from './confirm-state';

// createStore(reducer, [preloadedState], [enhancer])
const store = () =>
  createStore(
    combineReducers({
      navModal: navModalReducer,
      modal: modalReducer,
      confirm: confirmReducer
    })
  );

export default store;
