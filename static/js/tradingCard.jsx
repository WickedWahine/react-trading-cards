"use strict";
const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}
function TradingCardContainer() {
  const paragraphs = [];

  for (const card of tradingCardData) {
    paragraphs.push(<p>{card.name}</p>);
    paragraphs.push(<p>{card.skill}</p>);
  }

  return (
    <React.Fragment>
      {paragraphs}
    </React.Fragment>
  );
}
//Note for Sarah: next class start from "Before you re-render your page, stop and read over this code carefully with your pair."

ReactDOM.render(
  <TradingCardContainer />,
  document.querySelector('#container')
);

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Polymorphism"
//       skill="shape shifting"
//       imgUrl="/static/img/polymorphism.jpeg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Shortstack Overflow"
//       skill="melt butter"
//       imgUrl="/static/img/shortstack-overflow.jpeg"
//     />
//   ),
//   document.querySelector('#shortstack-overflow')
// );