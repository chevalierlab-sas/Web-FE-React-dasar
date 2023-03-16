import React from "react";
import NoteItems from "./NoteItems";

const ActiveNote = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Catatan Aktif</h2>
      <NoteItems />
    </div>
  );
};

export default ActiveNote;