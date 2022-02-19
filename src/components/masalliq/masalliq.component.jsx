import React from "react";
import { connect } from "react-redux";

import {
  masalliqniQosh,
  masalliqniYoqot,
} from "../../redux/masalliqlar/masalliqlar.actions";

const MenuMasalliq = ({
  masalliq,
  masalliqniQosh,
  masalliqniYoqot,
  burgerMasalliqlariSoni,
}) => {
  const { nomi, narxi } = masalliq;
  return (
    <div className="masalliq">
      <div className="nomi">
        {nomi}, {narxi} so'm
      </div>
      <div className="buttonlar">
        <button onClick={() => masalliqniYoqot(masalliq)}>-</button>
        {burgerMasalliqlariSoni[masalliq.id]}
        <button onClick={() => masalliqniQosh(masalliq)}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  burgerMasalliqlariSoni: state.masalliqlar.burgerMasalliqlariSoni,
});

const mapDispatchToProps = (dispatch) => ({
  masalliqniQosh: (masalliq) => dispatch(masalliqniQosh(masalliq)),
  masalliqniYoqot: (masalliq) => dispatch(masalliqniYoqot(masalliq)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuMasalliq);
