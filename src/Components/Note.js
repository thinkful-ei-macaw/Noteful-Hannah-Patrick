import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  return (
    <div className='Note'>
      <h2 className='Note_Title'>
        <Link to={`/note/${props.id}`}>{props.name}</Link>
      </h2>
    </div>
  );
}

export default Note;
