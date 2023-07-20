import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                {/* <DeleteForeverIcon /> */}
                <DeleteIcon />
            </button>
            {/* <button onClick={handleClick}>Delete</button> */}
        </div>
    );
}

export default Note;
