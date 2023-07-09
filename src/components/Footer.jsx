import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {currentYear} Stephen Adeniji</p>
            {/* &copy; */}
        </footer>
    );
}

export default Footer;
