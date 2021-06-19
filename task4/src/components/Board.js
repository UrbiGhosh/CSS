import React from "react";

export default function Board(boardData) {
  return (
    <div
      className="board"
      style={{ background: boardData.color }}
      onClick={() => boardData.showModal(boardData.index)}
    >
      <h3>{boardData.title}</h3>
      <p>{boardData.content}</p>

      <div className="bottom">
        <ul>
          <li>
            <img className="imgg" src={boardData.img} alt="lassan"></img>
          </li>
        </ul>
        <i className="fas fa-arrow-right">
          <div class="icon">
            <div class="arrow"></div>
          </div>
        </i>
      </div>
    </div>
  );
}
//<img src={boardData.users[0].imgs.url}  alt="user1"></img>
