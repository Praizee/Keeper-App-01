import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App";
import '../styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
)


// ReactDOM.render(<App />, document.getElementById("root"));

// Keeper App Part 02
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.