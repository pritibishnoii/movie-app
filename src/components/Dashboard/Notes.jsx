import React, { useState } from 'react'

const Notes = () => {
  const [notes, setNotes] = useState(localStorage.getItem('notes') || '')
  
  return (
    <div style={{
      backgroundColor: '#F1C75B',
      borderRadius : '25px',
      color: 'black',
      height: '410px',
      width: '350px',
      padding: '10px',
      position: 'absolute',
      left: '39rem'
    }}>

      <div style={{
        height: '400px',
        width: '260px',
        margin : '2px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{
          fontSize: '1.5rem',
          width: '260px',
          backgroundColor: '#F1C75B',
          marginBottom : '5px'
        }}>All Notes</p>

        <textarea
          value={notes}
          onInput={e => { setNotes(e.target.value), localStorage.setItem('notes', e.target.value) }}
          style={{
            borderRadius : '25px',
            padding : '20px',
            height: '100%',
            width: '100%',
            resize: 'none',
            border: 'none', // to remove border
            outline: 'none', // to remove outline 
            backgroundColor : '#F1C75B',   
             color : "black",
            overflowY: 'auto'
          }}
        >
        </textarea>
      </div>

    </div>
  )
}

export default Notes
