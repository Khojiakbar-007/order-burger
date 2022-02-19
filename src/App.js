import React from "react";

import Burger from "./components/burger.component";
import TanlashMenu from "./components/tanlash-menu/tanlash-menu.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      burger: [],
      masalliqlarSoni: {
        gosht: 0,
        pishloq: 0,
        pomidor: 0,
        salatBargi: 0,
        piyoz: 0,
      },
      umumiyNarxi: 0,
    };
  }

  // umumiyNarxniHisobla () {
  //   masalliqlarSoni
  // }

  masalliqniQosh = (masalliq) => {
    const { burger, masalliqlarSoni, umumiyNarxi } = this.state;
    this.setState(
      {
        burger: [...burger, masalliq],
        masalliqlarSoni: {
          ...masalliqlarSoni,
          [masalliq.id]: masalliqlarSoni[masalliq.id] + 1,
        },
        umumiyNarxi: umumiyNarxi + masalliq.narxi,
      },
      () => console.log(this.state)
    );
  };

  masalliqniYoqot = (masalliq) => {
    const { burger, masalliqlarSoni, umumiyNarxi } = this.state;
    const masalliqlar = [...burger];

    const kerakmasMasalliq = masalliqlar
      .reverse()
      .find((mas) => mas.nomi === masalliq.nomi);
    if (!kerakmasMasalliq) return;

    const soni = masalliqlar.indexOf(kerakmasMasalliq);
    masalliqlar.splice(soni, 1);

    this.setState({
      burger: masalliqlar.reverse(),
      masalliqlarSoni: {
        ...masalliqlarSoni,
        [kerakmasMasalliq.id]: masalliqlarSoni[kerakmasMasalliq.id] - 1,
      },
      umumiyNarxi: umumiyNarxi - kerakmasMasalliq.narxi,
    });
  };

  render() {
    return (
      <div>
        <h1>Burger</h1>

        <main>
          <Burger burger={this.state.burger} />

          <TanlashMenu
            masalliqniQosh={this.masalliqniQosh}
            masalliqniYoqot={this.masalliqniYoqot}
            masalliqlarSoni={this.state.masalliqlarSoni}
            umumiyNarxi={this.state.umumiyNarxi}
          />
        </main>
      </div>
    );
  }
}

export default App;
