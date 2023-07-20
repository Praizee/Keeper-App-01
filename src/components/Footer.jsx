import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {currentYear} <a href="https://stephen-adeniji.netlify.app/">Stephen Adeniji</a> </p>
            {/* &copy; */}
        </footer>
    );
}

export default Footer;
