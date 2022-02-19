import { getLastElIndex } from "../../my-utils/my-utils.utils";

export const masalliqniQosh = (masalliq, state) => {
  const { hozirgiBurger, burgerMasalliqlariSoni: burMasSon } = state;
  return {
    ...state,
    hozirgiBurger: [...hozirgiBurger, masalliq],
    burgerMasalliqlariSoni: {
      ...burMasSon,
      [masalliq.id]: burMasSon[masalliq.id] + 1,
    },
  };
};

export const masalliqniYoqot = (masalliq, state) => {
  const { burgerMasalliqlariSoni: masSoni, hozirgiBurger } = state;

  if (masSoni[masalliq.id] <= 0) return state;

  const yangiHozirgiBurger = [...hozirgiBurger];
  const ochirMas = getLastElIndex(yangiHozirgiBurger, masalliq);
  yangiHozirgiBurger.splice(ochirMas, 1);

  return {
    ...state,
    burgerMasalliqlariSoni: {
      ...masSoni,
      [masalliq.id]: masSoni[masalliq.id] - 1,
    },
    hozirgiBurger: yangiHozirgiBurger,
  };
};
