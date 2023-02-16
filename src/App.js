import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Notetaking from './Components/Noteapp';
import Notes from './Components/notes';


function App() {
  const [title, settitle] = useState("")
  const [disc, setdisc] = useState("")
  const [note, setnotes] = useState([])
  const [edit,setedit] =useState("")
  localStorage.setItem("note", JSON.stringify(note))

  return (
    <>
    <div className="App">
      <Notetaking />
      <Form title={title} settitle={settitle} disc={disc} setdisc={setdisc} note={note} setnotes={setnotes} />
      {
        note.length === 0 ? <div className='err'>
          <h4 className='yournotes1'>NO Notes avilable</h4>

        </div> : note.map((element) => {
          return (
            <Notes element={element} key={element.id} note={note} setnotes={setnotes} setedit={setedit} edit={edit} />
          )
        })

      }
    


    </div>
    
    </>

  );
  function getnotesfromLs() {
    const note = JSON.parse(localStorage.getItem("note"))
    if (note) {
      return note
    } else {
      return [];
    }

  }
  

}

export default App;
