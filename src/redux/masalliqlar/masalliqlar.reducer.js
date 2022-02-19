import { hammaMasalliqlar } from "./masalliqlar.data";

import { masalliqniQosh, masalliqniYoqot } from './masalliqlar.utils';

const INITIAL_STATE = {
  hammaMasalliqlar: hammaMasalliqlar,
  hozirgiBurger: [],
  burgerMasalliqlariSoni: hammaMasalliqlar.reduce(
    (acc, mas) => ({ ...acc, [mas.id]: 0 }),
    {}
  ),
};

const masalliqlarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MASALLIQNI_QOSH":
      return masalliqniQosh(action.payload, state);
    case "MASALLIQNI_YOQOT":
      return masalliqniYoqot(action.payload, state);
    default:
      return state;
  }
};

export default masalliqlarReducer;
