import walletReducer from './wallet';
import vaultReducer from './vault';
import balanceReducer from './balance';
import pricesReducer from './prices';
import earnedReducer from './earned';
import modalReducer from './modal';
import zapReducer from './zap';
import winnersReducer from '../../winners/redux/reducer';
import promoCodesReducer from '../../promo/reducer';

const reducers = {
  walletReducer,
  vaultReducer,
  balanceReducer,
  pricesReducer,
  earnedReducer,
  modalReducer,
  zapReducer,
  winners: winnersReducer,
  promo: promoCodesReducer,
};

export default reducers;
