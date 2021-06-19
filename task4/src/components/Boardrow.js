import React from "react";
import Board from "./Board";
import Modal from "./Modal";

const data = [
  {
    title: "Maine Coon Cats",
    color: "rgba(0,0,190,0.1)",
    content:
      "One of the oldest natural breeds in North America, Maine Coon cats are known for their intelligence and playfulness, as well as their size. "
  },
  {
    title: "Persian Cats",
    color: "rgba(0,255,155,0.1)",
    content:
      "Known for their gentle, laid-back personalities, sweet faces and round eyes, Persian cats are affectionate, quiet and beautiful creatures."
  },
  {
    title: "British Shorthair",
    color: "rgba(100,0,100,0.1)",
    content:
      "The Romans brought the British shorthair to England during the first century, at which time the breed co-existed and bred with wild cats native to England."
  },
  {
    title: "Ragdoll Cats",
    color: "rgba(190,0,0,0.1)",
    content:
      "Easygoing and loving, ragdoll cats get their name from their tendency to relax and go limp in one’s arms when picked up. "
  }
];

export default function Boardrow() {
  const [boardList, setBoardList] = React.useState(data);
  const [showModal, setModal] = React.useState(false);
  const [arrayIndex, setarrayIndex] = React.useState();

  const modalHandler = (index) => {
    setModal(true);
    setarrayIndex(index);
  };

  const changeBoard = (index) => {
    const newBoardList = [...boardList];
    newBoardList[index] += "im changed";
    setBoardList(newBoardList);
  };

  return (
    <>
      <div className="boardrow">
        {boardList.map((boardItem, index) => (
          <Board
            key={index}
            index={index}
            color={boardItem.color}
            title={boardItem.title}
            content={boardItem.content}
            img="/images/pic.jpg"
            showModal={modalHandler}
          />
        ))}
        <button
          className="add-board board"
          onClick={() =>
            setBoardList([
              ...boardList,
              {
                title: "new board",
                content: "write some content",
                color: `rgba(255,255,0,0.2)`
              }
            ])
          }
        >
          <h3>+ Create a new board</h3>
        </button>
      </div>

      {showModal && (
        <Modal
          close={() => setModal(false)}
          changeBoard={changeBoard}
          index={arrayIndex}
        />
      )}
    </>
  );
}
