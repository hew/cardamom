// ActionTypes:
const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM';

// Actions:
export const toggleConfirm = () => ({
  type: TOGGLE_CONFIRM
});

// Set InitialState
export const initialModalState = {
  show: false
};

// Reducer
export const confirmReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case TOGGLE_CONFIRM:
      return {...state, show: !state.show};
    default:
      return state;
  }
};
