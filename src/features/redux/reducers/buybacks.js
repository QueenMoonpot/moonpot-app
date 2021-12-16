import { FETCH_BUYBACKS_BEGIN, FETCH_BUYBACKS_SUCCESS, FETCH_BUYBACKS_FAILURE } from '../constants';

const initialState = {
  buybacks: [],
  buybacksTotal: 0,
  lastBuybacksTotal: 0,
  loading: false,
  error: null,
};

const buybacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUYBACKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BUYBACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        buybacks: action.payload.buybacks,
        buybacksTotal: action.payload.buybacksTotal,
        lastBuybacksTotal: action.payload.lastBuybacksTotal,
      };
    case FETCH_BUYBACKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default buybacksReducer;
