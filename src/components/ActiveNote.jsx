import React from 'react'
import NoteItems from './NoteItems'

function ActiveNote() {
  return (
    <div>
    <h2 className="card-title p-4 font-semibold">Catatan Aktif</h2>
      <NoteItems />
    </div>
  )
}

export default ActiveNote