import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
    return (
        <header>
            <a href="#"><h1><HighlightIcon />Keeper</h1></a>
            {/* <a href="#"><h1>Keeper App</h1></a> */}
        </header>
    );
}

export default Header;
