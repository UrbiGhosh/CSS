import React from "react";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-top">
        <h2> Add a new card</h2>
        <button onClick={() => props.close()} className="close-modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>

      <form>
        <input
          type="text"
          className="new-title"
          placeholder="Enter the title"
        ></input>
        <input
          type="text"
          className="new-content"
          placeholder="Enter the content"
        ></input>
        {/* <Board className='add-board'/> */}
        <button
          type="submit"
          className="submit-board"
          onClick={() => {
            props.changeBoard(props.index);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
