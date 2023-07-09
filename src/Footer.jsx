import React from 'react'

function App() {
    const date = document.querySelector("#date");
    // set year
    date.innerHTML = new Date().getFullYear();
    return (

        <p>&copy;
            <span id="date"></span>
            Stephen Adeniji. all rights reserved
        </p>

    )
}

export default Footer