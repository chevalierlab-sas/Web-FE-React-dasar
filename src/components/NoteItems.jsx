import React from 'react'

function NoteItems() {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl my-4">
        <div className="card-body p-4">
        <div>judul</div>
        <div>tanggal</div>
        <div>body</div>

        <div>
            <button className="mr-1 btn btn-secondary">Hapus</button>
            <button className="mr-1 btn btn-primary">Arsipkan</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItems