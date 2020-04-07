// Initial State
const initialState = {
  typed: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE': {
      return {
        ...state,
        typed: action.trueFalse,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
