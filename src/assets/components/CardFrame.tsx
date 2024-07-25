const Cards = () => {
  const CardFrame = miro.board.createFrame({
    title: "BlueCard-1_1",
    style: {
      fillColor: "#E0E0DF",
    },
    width: 450,
    height: 642,
    x: 0,
    y: 0,
  });

  return CardFrame;
};

export default Cards;
