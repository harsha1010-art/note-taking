import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';
import Edit from './edit';
import { Grid } from '@mui/material';

export default function Notes({ element, note, setnotes,setedit,edit}) {
    const removehndler = (id) => {
        const newNotes = note.filter((elm) => {
            if (elm.id !== id) {
                return elm
            }

        })
        setnotes(newNotes)
        console.log(id)


    }
    const edithndler = (id) => {
        setedit(id)
        note.filter((elm) => {
            if (elm.id === id) {
                
                document.getElementById("editttl").value = elm.title
                document.getElementById("disc").value = elm.disc
            }

        })
        
        

    }
   
    {
        return (
            <>
                <h1 className='yournotes'>
                    you'r Notes
                </h1>
                <div className='maincard'>
                  
                        
                       
                         <Card sx={{ minWidth: 300, backgroundColor: 'rgb(198, 224, 246)', borderRadius: '20px', maxWidth: 400 }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }} >
                                {element.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ padding: '10px', display: flexbox, paddingRight: '10px' }}>
                                <li >
                                    {element.disc}
                                </li>


                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button size="large" sx={{ color: 'grey' }} onClick={() => { edithndler(element.id) }}><Edit note={note} setnotes={setnotes} edit={edit}/></Button>
                            <Button size="large" sx={{ color: 'grey' }} onClick={() => { removehndler(element.id) }}><i class="fa-solid fa-trash"></i></Button>
                        </CardActions>
                    </Card>
                   
                    
                    </div>

                   
                </>
        );
    }
}