import React from "react";

function AddNote() {
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl mx-auto my-4 shadow-md">
          <h2 className="card-title p-4 font-semibold">Buat Catatan</h2>
        <div className="card-body p-4">
          <form className="form-control">
            <input className="input w-full my-4" placeholder="Masukkan Judul" type={"text"} required />
            <textarea className="textarea textarea-lg w-full my-4" placeholder="Isi catatan" type={"text"} required />
            <button className="btn btn-block" type="submit">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
