import React from "react";
import ActiveNote from "./ActiveNote";
import AddNote from "./AddNote";
import ArchiveNote from "./ArchiveNote";
import Footer from "./Footer";
import Navbar from "./Navbar";

function NotesApp() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <AddNote />
      <ActiveNote />
      <ArchiveNote />
      <Footer />
    </div>
  );
}

export default NotesApp;
