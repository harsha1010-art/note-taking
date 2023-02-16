import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Notetaking from './Components/Noteapp';
import Notes from './Components/notes';
import Search from './Components/search';


function App() {
  const [title, settitle] = useState("")
  const [disc, setdisc] = useState("")
  const [note, setnotes] = useState(getNotesFromLs)
  const [edit, setedit] = useState("")
  const [searchText, setSearchText] = useState('');
  localStorage.setItem("note", JSON.stringify(note))

  return (
    <>
      <div className="App">
        <Notetaking />
        <Search handleSearchNote={setSearchText} />
        <Form title={title} settitle={settitle} disc={disc} setdisc={setdisc} note={note} setnotes={setnotes} />
        {
          note.length === 0 ? <div className='err'>
            <h4 className='yournotes1'>NO Notes avilable</h4>

          </div> : note.map((element) => {
            return (
              <Box sx={{flexGrow:1}}>
              <Grid>
                <Grid item xs={6} md={8}>

                <Notes element={element} key={element.id} note={note} setnotes={setnotes} setedit={setedit} edit={edit} notes={note.filter((note) =>
                  note.toString().toLowerCase().includes(searchText)
                )} />
              </Grid>
              </Grid>
              
              
              </Box>

            )
          })

        }



      </div>

    </>

  );
  function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem("note"))
    if (note) {
      return note
    } else {
      return [];
    }

  }


}

export default App;
