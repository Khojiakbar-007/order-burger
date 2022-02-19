import React from "react";
import { connect } from "react-redux";

import MenuMasalliq from "../masalliq/masalliq.component";
import { selectUmumiyNarx } from "../../redux/masalliqlar/masalliqlar.selectors";

const TanlashMenu = ({ masalliqlar, hozirgiBurger, umumiyNarx }) => {
  return (
    <div className="tanlash-menu">
      {masalliqlar.map((masalliq, i) => (
        <MenuMasalliq key={i} masalliq={masalliq} />
      ))}
      <h2>Umumiy narxi: {umumiyNarx}</h2>
    </div>
  );
};

// <div key={i} className="masalliq">
//   <div className="nomi">
//     {masalliq.nomi}, {masalliq.narxi} so'm
//   </div>

//   <div className="buttonlar">
//     <button>-</button>
//     {/* {masalliqlarSoni[masalliq.id]} */}
//     <button>+</button>
//   </div>
// </div>

const mapStateToProps = (state) => ({
  masalliqlar: state.masalliqlar.hammaMasalliqlar,
  hozirgiBurger: state.burgerlar.hozirgiBurger,
  umumiyNarx: selectUmumiyNarx(state),
});
// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     masalliqlar: state.masalliqlar,
//   };
// };

export default connect(mapStateToProps)(TanlashMenu);
