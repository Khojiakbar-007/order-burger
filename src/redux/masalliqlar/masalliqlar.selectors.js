import { createSelector } from "reselect";

const selectMasalliqlarSoni = (state) => state.masalliqlar.hozirgiBurger;
const selectHammaMasalliqlar = (state) =>
  state.masalliqlar.hammaMasalliqlar;

export const selectUmumiyNarx = createSelector(
  [selectMasalliqlarSoni, selectHammaMasalliqlar],
  (masSoni, hammaMas) =>
    hammaMas.reduce((acc, mas) => masSoni[mas.id] * mas.narxi, 0)
);
