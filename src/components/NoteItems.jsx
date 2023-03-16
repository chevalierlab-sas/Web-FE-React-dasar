import React from "react";
import { showFormattedDate } from "../utils";

const NoteItems = ({ data }) => {
  const handleDelete = () => {
    // logika untuk menghapus catatan
  };

  const handleArchive = () => {
    // logika untuk mengarsipkan catatan
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-4">
        <div className="card-body p-4">
          <div>{data.title}</div>
          <div>{showFormattedDate(data.createdAt)}</div>
          <div>{data.body}</div>
    
          <div>
            <button className="mr-1 btn btn-secondary" onClick={handleDelete}>Hapus</button>
            <button className="mr-1 btn btn-primary" onClick={handleArchive}>Arsipkan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
