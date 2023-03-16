
import ActiveNote from "./ActiveNote";
import AddNote from "./AddNote";
import ArchiveNote from "./ArchiveNote";
import Footer from "./Footer";
import Navbar from "./Navbar";

function NotesApp() {    

  return (
    <>
    <div className="container mx-auto my-4">
      <Navbar />
      <AddNote />
      <ActiveNote />
      <ArchiveNote />
    </div>
    <Footer/>
    </>
  );
}

export default NotesApp;
