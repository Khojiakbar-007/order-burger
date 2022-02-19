import React from "react";

import { connect } from "react-redux";

const Burger = ({burger}) => {
  console.log(burger);
  return (
    <div className="burger">
      <div>
        <img src="./images/burger-parts/nonniTepasi.jpg" alt="non" />

        <div className="reversed">
          {burger?.map((masalliq, i) => (
            <img src={masalliq.url} key={i} />
          ))}
        </div>

        <img src="./images/burger-parts/nonniTagi.jpg" alt="non" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  burger: state.masalliqlar.hozirgiBurger,
});

export default connect(mapStateToProps)(Burger);
