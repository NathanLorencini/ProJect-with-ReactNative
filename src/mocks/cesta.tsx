import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const basket = {
  topo: {
    title: "Detail of Basket",
  },
  details: {
    subTitle: "Basket of vegetables",
    logoFarm: logo,
    nameFarm: "Jenny Jack Farm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius " +
      "suscipit magna, sit amet varius odio vestibulum at.",
    price: "R$ 40,00",
    button: "Buy",
  },
  itens: {
    title: "Itens of Basket",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default basket;
