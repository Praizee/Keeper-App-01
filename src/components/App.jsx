import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes.js"

function App() {
  return (
    <div>
      <Header />
      {notes.map(NoteItem => (
        <Note
          key={NoteItem.key}
          title={NoteItem.title}
          content={NoteItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
